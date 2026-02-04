const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Logo y descripción */}
                    <div className="footer-section">
                        <h3 className="footer-logo">Plugin Agency</h3>
                        <p className="footer-description">
                            Transformamos ideas en experiencias digitales. Agencia de desarrollo web y diseño UI/UX especializada en crear soluciones innovadoras para empresas que buscan destacar en el mundo digital.
                        </p>
                    </div>

                    {/* Navegación */}
                    <div className="footer-section">
                        <h4>Navegación</h4>
                        <ul className="footer-links">
                            <li><a href="#hero">Inicio</a></li>
                            <li><a href="#about">Sobre Nosotros</a></li>
                            <li><a href="#services">Servicios</a></li>
                            <li><a href="#contact">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Servicios */}
                    <div className="footer-section">
                        <h4>Servicios</h4>
                        <ul className="footer-links">
                            <li><a href="#services">Desarrollo Web</a></li>
                            <li><a href="#services">Diseño UI/UX</a></li>
                            <li><a href="#services">E-commerce</a></li>
                            <li><a href="#services">SEO & Marketing</a></li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div className="footer-section">
                        <h4>Contacto</h4>
                        <ul className="footer-contact">
                            <li>
                                <span className="contact-icon">📧</span>
                                <a href="mailto:info@plugin.uy">info@plugin.uy</a>
                            </li>
                            <li>
                                <span className="contact-icon">🌐</span>
                                <span>Uruguay</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p>&copy; {currentYear} Plugin Agency. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
