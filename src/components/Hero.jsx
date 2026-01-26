import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="video-background">
                {/* 
                  Using a direct link to a free tech abstract video.
                  Source: Coverr/Pexels style free stock. 
                  Fallback to a nice gradient if it fails or while loading.
                */}
                <video autoPlay loop muted playsInline>
                    <source src="/assets/hero-video.mp4" type="video/mp4" />
                    Tu navegador no soporta videos HTML5.
                </video>
                <div className="overlay"></div>
            </div>
            <div className="container hero-content">
                <h1>Transformamos ideas en <span className="gradient-text">experiencias digitales</span></h1>
                <p>Agencia de desarrollo web y diseño UI/UX enfocada en resultados.</p>
                <div className="hero-buttons">
                    <a href="#contact" className="btn btn-primary">Empezar Proyecto</a>
                    <a href="#services" className="btn btn-outline">Ver Servicios</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
