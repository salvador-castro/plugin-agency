import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    try {
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

            // Notificar al webhook de n8n
            try {
                const webhookUrl = 'https://n8n.srv894423.hstgr.cloud/webhook/5d28ca90-6e03-48e8-95d2-20a481b80f85';
                const webhookRes = await fetch(webhookUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        nombre,
                        apellido,
                        email,
                        telefono,
                        message
                    }),
                });
                
                if (!webhookRes.ok) {
                    console.warn(`n8n webhook devolvió status no OK: ${webhookRes.status}`);
                } else {
                    console.log('Datos enviados a n8n exitosamente');
                }
            } catch (n8nError) {
                console.error('Error al notificar a n8n:', n8nError);
                // No detenemos el flujo para que al menos se intente enviar el email original
            }

            // Configurar el transportador SMTP para Webempresa
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com', // Asegurate de usar el host correcto aquí
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

            await transporter.sendMail(mailOptions);
            return res.status(200).json({ message: 'Email enviado con éxito y datos pasados a n8n.' });
        } else {
            res.setHeader('Allow', ['POST']);
            res.status(405).json({ error: `Method ${req.method} Not Allowed` });
        }
    } catch (globalError) {
        console.error('Error general del servidor en /api/send-email:', globalError);
        return res.status(500).json({ error: 'Hubo un error general interno al procesar el envío' });
    }
}
