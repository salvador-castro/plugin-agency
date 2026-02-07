const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="video-background">
                <video autoPlay loop muted playsInline>
                    <source src="/assets/hero/hero.mp4" type="video/mp4" />
                    Tu navegador no soporta videos HTML5.
                </video>
                <div className="overlay"></div>
            </div>
            <div className="container hero-content">
                <h1>Agencia digital en Uruguay para ordenar <span className="gradient-text">marca, contenido y tecnología</span></h1>
                <p className="hero-subtitle">Convertimos proyectos digitales en un sistema: branding, comunicación, contenidos, web y automatización trabajando en conjunto para ganar claridad, coherencia y visibilidad.</p>



                <div className="hero-buttons">
                    <a href="#contact" className="btn btn-primary">Coordinar una llamada</a>
                    <a href="#method" className="btn btn-outline">Ver cómo trabajamos</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
