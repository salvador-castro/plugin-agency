import { useState, useRef, lazy, Suspense } from 'react';

const ReCAPTCHA = lazy(() => import('react-google-recaptcha'));

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
                <h2 className="section-title">Contacto</h2>
                <div className="contact-wrapper two-column-layout">

                    <div className="contact-info-column">
                        <h3 className="contact-subtitle">Hablemos de tu proyecto</h3>
                        <p className="contact-intro">
                            Si tu proyecto necesita estructura, claridad y un sistema conectado, coordinemos una conversación.
                        </p>

                        <div className="calendly-container">
                            <iframe
                                src="https://calendly.com/plugin-agency/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                title="Agendar llamada con Plugin"
                            ></iframe>
                        </div>

                        <div className="contact-details-mini">
                            <p>Montevideo, Uruguay</p>
                            <p>hola@plugin.uy</p>
                        </div>
                    </div>

                    <div className="contact-form-column">
                        <div className="form-header">
                            <h3>O escribinos por acá</h3>
                        </div>

                        <form onSubmit={handleSubmit} className="contact-form-grid">
                            <div className="form-row">
                                <div className="form-field">
                                    <label>Nombre</label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        placeholder="Tu nombre"
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
                                        placeholder="Tu apellido"
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
                                    placeholder="tu@email.com"
                                    required
                                    style={{ borderColor: errors.email ? "red" : "#ddd" }}
                                />
                                {errors.email && <span className="error-text">{errors.email}</span>}
                            </div>

                            <div className="form-field">
                                <label>Teléfono (Op.)</label>
                                <input
                                    type="tel"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleChange}
                                    placeholder="+598 ..."
                                />
                            </div>

                            <div className="form-field">
                                <label>Mensaje</label>
                                <textarea
                                    name="cuerpo"
                                    value={formData.cuerpo}
                                    onChange={handleChange}
                                    placeholder="Contanos brevemente sobre tu proyecto..."
                                    required
                                    rows={4}
                                ></textarea>
                            </div>

                            <div className="form-field header-btn" style={{ margin: '15px 0' }}>
                                <Suspense fallback={<div>Cargando...</div>}>
                                    <ReCAPTCHA
                                        ref={captchaRef}
                                        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                                        onChange={setCaptchaToken}
                                    />
                                </Suspense>
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
            </div>
        </section>
    );
};

export default Contact;
