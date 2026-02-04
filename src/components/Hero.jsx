const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="video-background">
                <video autoPlay loop muted playsInline>
                    <source src="/assets/hero/hero-video.mp4" type="video/mp4" />
                    Tu navegador no soporta videos HTML5.
                </video>
                <div className="overlay"></div>
            </div>
            <div className="container hero-content">
                <h1>Transformamos ideas en <span className="gradient-text">experiencias digitales</span></h1>
                <p className="hero-subtitle">Agencia de desarrollo web y diseño UI/UX enfocada en resultados.</p>
                <p className="hero-description">Creamos sitios web modernos, tiendas online y aplicaciones que conectan tu marca con tus clientes. Especialistas en React, Node.js y tecnologías de vanguardia.</p>
                <div className="hero-buttons">
                    <a href="#contact" className="btn btn-primary">Empezar Proyecto</a>
                    <a href="#services" className="btn btn-outline">Ver Servicios</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
