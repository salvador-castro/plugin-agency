import { useState, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        cuerpo: ''
    });

    const [status, setStatus] = useState(null);
    const [errors, setErrors] = useState({});
    const [captchaToken, setCaptchaToken] = useState(null);
    const captchaRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
        if (status) setStatus(null);

        if (name === 'telefono') {
            const re = /^[0-9\b]+$/;
            if (value === '' || re.test(value)) {
                setFormData({ ...formData, [name]: value });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            if (value && !value.includes('@')) {
                setErrors({ ...errors, email: 'El email debe contener un @' });
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!captchaToken) {
            setStatus({ type: 'error', message: 'Por favor, completa el captcha.' });
            return;
        }

        setStatus({ type: 'loading', message: 'Enviando...' });

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre: formData.nombre,
                    apellido: formData.apellido,
                    email: formData.email,
                    telefono: formData.telefono,
                    message: formData.cuerpo,
                    captchaToken
                }),
            });

            if (response.ok) {
                setStatus({ type: 'success', message: '¡Gracias! Tu mensaje ha sido enviado correctamente.' });
                setFormData({ nombre: '', apellido: '', email: '', telefono: '', cuerpo: '' });
                setCaptchaToken(null);
                captchaRef.current.reset();
                setTimeout(() => setStatus(null), 5000);
            } else {
                const data = await response.json();
                throw new Error(data.error || 'Error en el servidor');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus({ type: 'error', message: error.message || 'Hubo un error al enviar el mensaje.' });
            setTimeout(() => setStatus(null), 5000);
        }
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">Contáctanos</h2>
                <div className="contact-wrapper">
                    <form onSubmit={handleSubmit} className="contact-form-grid">
                        <div className="form-row">
                            <div className="form-field">
                                <label>Nombre</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    placeholder="Ej: Juan"
                                    autoComplete="given-name"
                                    minLength={2}
                                    required
                                />
                            </div>
                            <div className="form-field">
                                <label>Apellido</label>
                                <input
                                    type="text"
                                    name="apellido"
                                    value={formData.apellido}
                                    onChange={handleChange}
                                    placeholder="Ej: Pérez"
                                    autoComplete="family-name"
                                    minLength={2}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-field">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Ej: juan@email.com"
                                autoComplete="email"
                                inputMode="email"
                                required
                                aria-invalid={!!errors.email}
                                style={{ borderColor: errors.email ? "red" : "#ddd" }}
                            />
                            {errors.email && <span className="error-text">{errors.email}</span>}
                        </div>

                        <div className="form-field">
                            <label>Teléfono</label>
                            <input
                                type="tel"
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                                placeholder="Ej: +54 11 1234 5678"
                                autoComplete="tel"
                                inputMode="tel"
                                pattern="^\+?[0-9][0-9 -]{7,14}$"
                                required
                            />
                        </div>

                        <div className="form-field">
                            <label>Mensaje</label>
                            <textarea
                                name="cuerpo"
                                value={formData.cuerpo}
                                onChange={handleChange}
                                placeholder="Escribe tu consulta aquí..."
                                required
                                rows={4}
                                minLength={10}
                                maxLength={1000}
                            ></textarea>
                        </div>

                        <div className="form-field header-btn" style={{ margin: '20px 0' }}>
                            <ReCAPTCHA
                                ref={captchaRef}
                                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"} // Clave de prueba por defecto
                                onChange={setCaptchaToken}
                            />
                        </div>

                        {status && (
                            <div className={`status-message ${status.type}`}>
                                {status.message}
                            </div>
                        )}

                        <button type="submit" className="btn btn-primary submit-btn" disabled={status?.type === 'loading' || status?.type === 'success'}>
                            {status?.type === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
