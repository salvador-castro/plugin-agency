import { useState, useEffect } from 'react';

const WORDS = [
    'marca,',
    'contenido,',
    'y tecnología.'
];

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = WORDS[wordIndex];
        const speed = isDeleting ? 60 : 100;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentWord.substring(0, charIndex + 1));
                if (charIndex + 1 === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), 1800);
                    return;
                }
                setCharIndex(c => c + 1);
            } else {
                setDisplayText(currentWord.substring(0, charIndex - 1));
                if (charIndex - 1 === 0) {
                    setIsDeleting(false);
                    setWordIndex(i => (i + 1) % WORDS.length);
                    setCharIndex(0);
                    return;
                }
                setCharIndex(c => c - 1);
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, wordIndex]);

    return (
        <section id="hero" className="hero">
            {/* Video background */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }}
                >
                    <source src="/assets/hero/hero.mp4" type="video/mp4" />
                </video>
                {/* Dark overlay over video */}
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to bottom, rgba(5,5,10,0.55) 0%, rgba(5,5,10,0.45) 50%, rgba(5,5,10,0.85) 100%)'
                }} />
            </div>

            {/* Animated grid + orbs on top of video */}
            <div className="hero-bg" style={{ zIndex: 1 }}>
                <div className="grid-bg" />
                <div className="orb orb-cyan" style={{
                    width: '600px', height: '600px',
                    top: '-150px', left: '-200px',
                    opacity: 0.35
                }} />
                <div className="orb orb-violet" style={{
                    width: '500px', height: '500px',
                    bottom: '-100px', right: '-150px',
                    opacity: 0.3
                }} />
            </div>

            <div className="container hero-content-wrapper">

                {/* Text content */}
                <div className="hero-text-col">
                    {/* Badge */}
                    <div className="hero-badge">
                        <span className="hero-badge-dot" />
                        <span className="mono">Agencia Digital · Uruguay</span>
                    </div>

                    {/* Headline */}
                    <h1>
                        Ordenamos tu proyecto digital:{' '}
                        <span style={{ display: 'inline-grid', verticalAlign: 'bottom', textAlign: 'left' }}>
                            <span style={{ gridArea: '1/1', visibility: 'hidden', whiteSpace: 'nowrap' }}>
                                {WORDS.reduce((a, b) => a.length > b.length ? a : b)}
                            </span>
                            <span className="hero-gradient-text" style={{ gridArea: '1/1' }}>
                                {displayText}
                                {(!isDeleting && charIndex < WORDS[wordIndex].length) || (isDeleting && charIndex > 0) ? (
                                    <span className="hero-cursor" />
                                ) : null}
                            </span>
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="hero-subtitle">
                        Convertimos proyectos digitales en un sistema conectado: branding, comunicación, contenidos, web y automatización trabajando en conjunto para ganar claridad, coherencia y visibilidad.
                    </p>

                    {/* CTAs */}
                    <div className="hero-buttons">
                        <a href="#contact" className="btn btn-primary">
                            Coordinar una llamada
                        </a>
                        <a href="#method" className="btn btn-outline">
                            Ver cómo trabajamos →
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="hero-stats">
                        <div className="hero-stat">
                            <span className="hero-stat-value">5<span>+</span></span>
                            <span className="hero-stat-label">Servicios</span>
                        </div>
                        <div className="hero-stat">
                            <span className="hero-stat-value">360<span>°</span></span>
                            <span className="hero-stat-label">Enfoque digital</span>
                        </div>
                        <div className="hero-stat">
                            <span className="hero-stat-value">1<span>x</span></span>
                            <span className="hero-stat-label">Ecosistema</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
