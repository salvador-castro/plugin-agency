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

        // Configurar el transportador SMTP para Webempresa
        const transporter = nodemailer.createTransport({
            host: 'mail.plugin.uy',
            port: 465,
            secure: true, // true para 465, false para otros puertos
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"Plugin Contacto" <${process.env.EMAIL_USER}>`, // El remitente debe ser la cuenta autenticada
            replyTo: email, // Responder al usuario que llenó el formulario
            // Se puede configurar en el .env como: EMAIL_TO=info@plugin.uy,salvacastro06@gmail.com
            to: process.env.EMAIL_TO ? process.env.EMAIL_TO.split(',').map(e => e.trim()) : ['info@plugin.uy', 'salvacastro06@gmail.com'],
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
