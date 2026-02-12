import { useState, useRef, lazy, Suspense, useEffect } from 'react';

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

    useEffect(() => {
        const link = document.createElement('link');
        link.href = "https://assets.calendly.com/assets/external/widget.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);

        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
            if (document.head.contains(link)) {
                document.head.removeChild(link);
            }
        }
    }, []);

    const openCalendly = () => {
        if (window.Calendly) {
            window.Calendly.initPopupWidget({
                url: 'https://calendly.com/ceitutnfrba/plugin-test?hide_event_type_details=1&hide_gdpr_banner=1'
            });
        }
    };

    return (
        <section id="contact" className="section contact-section section-divider-dot">
            <div className="container">
                <h2 className="section-title">Contacto</h2>
                <div className="contact-wrapper two-column-layout">

                    <div className="contact-info-column">
                        <h3 className="contact-subtitle">Hablemos de tu proyecto</h3>
                        <p className="contact-intro">
                            Si tu proyecto necesita estructura, claridad y un sistema conectado, coordinemos una conversación.
                        </p>

                        <div style={{ marginTop: '20px' }}>
                            <button
                                onClick={openCalendly}
                                className="btn btn-outline-white"
                                style={{ width: '100%', maxWidth: '300px' }}
                            >
                                Agenda una llamada de 30 min
                            </button>
                        </div>

                        <div className="value-props" style={{ marginTop: '30px', color: 'rgba(255,255,255,0.9)' }}>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ color: '#4ade80', fontSize: '1.2rem' }}>✓</span> Visión integral del negocio
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ color: '#4ade80', fontSize: '1.2rem' }}>✓</span> Tecnología + Estrategia
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ color: '#4ade80', fontSize: '1.2rem' }}>✓</span> Plan de acción concreto
                                </li>
                            </ul>
                        </div>

                        <div className="founders-avatars" style={{ marginTop: '30px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ display: 'flex' }}>
                                <img src="/assets/equipo/maximiliano.webp" alt="Maxi" style={{ width: '45px', height: '45px', borderRadius: '50%', objectFit: 'cover', border: '2px solid white' }} />
                                <img src="/assets/equipo/salva.webp" alt="Salva" style={{ width: '45px', height: '45px', borderRadius: '50%', objectFit: 'cover', border: '2px solid white', marginLeft: '-15px' }} />
                                <img src="/assets/equipo/romina.webp" alt="Romina" style={{ width: '45px', height: '45px', borderRadius: '50%', objectFit: 'cover', border: '2px solid white', marginLeft: '-15px' }} />
                                <img src="/assets/equipo/pablo.webp" alt="Pablo" style={{ width: '45px', height: '45px', borderRadius: '50%', objectFit: 'cover', border: '2px solid white', marginLeft: '-15px' }} />
                                <img src="/assets/equipo/jenifer.webp" alt="Yenifer" style={{ width: '45px', height: '45px', borderRadius: '50%', objectFit: 'cover', border: '2px solid white', marginLeft: '-15px' }} />
                            </div>
                            <div>
                                <p style={{ fontSize: '0.9rem', fontWeight: '500', color: 'white', margin: 0 }}>Habla directo con nosotros online</p>
                                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>Equipo Plugin</p>
                            </div>
                        </div>

                        <div className="contact-details-mini">
                            <p>Punta del Este, Uruguay</p>
                            <p>info@plugin.uy</p>
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
