const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-brand">
                        <img src="/assets/logo/logoPlugin.webp" alt="Plugin Agency" style={{ height: '44px', width: 'auto', marginBottom: '0.75rem' }} />
                        <p className="footer-tagline">Agencia digital en Uruguay para ordenar marca, contenido y tecnología.</p>
                    </div>

                    <div className="footer-links-group">
                        <h4>Navegación</h4>
                        <ul>
                            <li><a href="#hero">Inicio</a></li>
                            <li><a href="#about">Nosotros</a></li>
                            <li><a href="#services">Servicios</a></li>
                            <li><a href="#workpacks">Packs</a></li>
                            <li><a href="#faq">FAQ</a></li>
                        </ul>
                    </div>

                    <div className="footer-links-group">
                        <h4>Servicios</h4>
                        <ul>
                            <li><a href="#services">Estrategia y Marca</a></li>
                            <li><a href="#services">Diseño Web</a></li>
                            <li><a href="#services">Contenidos</a></li>
                            <li><a href="#services">Automatización</a></li>
                        </ul>
                    </div>

                    <div className="footer-links-group">
                        <h4>Contacto</h4>
                        <ul>
                            <li><a href="mailto:info@plugin.uy">info@plugin.uy</a></li>
                            <li><a href="https://plugin.uy" target="_blank" rel="noreferrer">plugin.uy</a></li>
                            <li style={{ color: 'var(--text-3)', fontSize: '0.88rem' }}>Punta del Este, Uruguay</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copy">© {year} Plugin Agency — Todos los derechos reservados.</p>
                    <div className="footer-socials">
                        {/* Instagram */}
                        <a href="https://instagram.com/plugin.pde/" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="https://linkedin.com/company/pluginuy" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
