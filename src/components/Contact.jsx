import { useState } from 'react';

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
        setStatus({ type: 'loading', message: 'Enviando...' });

        // Simulating submission
        setTimeout(() => {
            setStatus({ type: 'success', message: '¡Gracias! Tu mensaje ha sido enviado correctamente.' });
            setFormData({ nombre: '', apellido: '', email: '', telefono: '', cuerpo: '' });
            setTimeout(() => setStatus(null), 5000);
        }, 1500);
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
                                required
                                style={{ borderColor: errors.email ? 'red' : '#ddd' }}
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
                                placeholder="Ej: 1112345678"
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
                                rows="4"
                            ></textarea>
                        </div>

                        {status && (
                            <div className={`status-message ${status.type}`}>
                                {status.message}
                            </div>
                        )}

                        <button type="submit" className="btn btn-primary submit-btn" disabled={status?.type === 'loading'}>
                            {status?.type === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
