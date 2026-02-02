import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { nombre, apellido, email, telefono, message, captchaToken } = req.body;

        // Validar que los campos necesarios existan
        if (!nombre || !email || !message || !captchaToken) {
            return res.status(400).json({ error: 'Faltan campos obligatorios o el captcha' });
        }

        // Verificar Captcha con Google
        const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`;

        try {
            const captchaRes = await fetch(verifyUrl, { method: 'POST' });
            const captchaData = await captchaRes.json();

            if (!captchaData.success) {
                return res.status(400).json({ error: 'Captcha inválido' });
            }
        } catch (error) {
            console.error('Error verificando captcha:', error);
            return res.status(500).json({ error: 'Error al verificar captcha' });
        }

        // Configurar el transportador SMTP (Gmail en este caso)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Tu email de Gmail
                pass: process.env.EMAIL_PASS, // Tu contraseña de aplicación (App Password)
            },
        });

        const mailOptions = {
            from: `"${nombre} ${apellido}" <${process.env.EMAIL_USER}>`, // Remitente (debe ser tu email autenticado)
            replyTo: email, // Para que al responder le llegue al usuario
            to: ['salvacastro06@gmail.com', 'gssalva@gmail.com'], // Destinatarios
            subject: `Nuevo mensaje de contacto de: ${nombre} ${apellido}`,
            text: `
                Has recibido un nuevo mensaje desde el formulario de contacto:
                
                Nombre: ${nombre} ${apellido}
                Email: ${email}
                Teléfono: ${telefono}
                
                Mensaje:
                ${message}
            `,
            html: `
                <h3>Nuevo mensaje de contacto</h3>
                <p><strong>De:</strong> ${nombre} ${apellido}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Teléfono:</strong> ${telefono}</p>
                <p><strong>Mensaje:</strong><br/>${message}</p>
            `,
        };

        // Si hay un segundo email configurado en variables de entorno, agregarlo
        // O simplemente agregarlo hardcodeado si el usuario lo prefiere así por ahora
        // Para este caso, dejaré comentado cómo agregar más destinatarios dinámicamente
        // if (process.env.EMAIL_CC) { mailOptions.cc = process.env.EMAIL_CC; }

        try {
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ message: 'Email enviado con éxito' });
        } catch (error) {
            console.error('Error enviando email:', error);
            return res.status(500).json({ error: 'Error al enviar el email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
