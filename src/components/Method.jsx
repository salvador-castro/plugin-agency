const LAYERS = [
    {
        title: "Estrategia y posicionamiento",
        text: "Para decidir qué decir, a quién y qué priorizar en cada etapa."
    },
    {
        title: "Marca y comunicación",
        text: "Para que el mensaje sea coherente, memorable y representativo."
    },
    {
        title: "Contenidos y redes",
        text: "Para construir visibilidad sostenida con propósito."
    },
    {
        title: "Web y producto digital",
        text: "Para convertir visitas en oportunidades reales."
    },
    {
        title: "Automatización e IA aplicada",
        text: "Para escalar operaciones sin sumar caos."
    }
];

const Method = () => {
    return (
        <section id="method" className="method-section section-divider">
            <div className="container">
                <p className="method-eyebrow">// cómo trabajamos</p>
                <h2 className="section-title">Plugin como <span>sistema</span></h2>
                <p style={{ color: 'var(--text-2)', textAlign: 'center', maxWidth: '580px', margin: '-2rem auto 3.5rem', fontSize: '0.95rem', lineHeight: '1.7' }}>
                    Trabajamos como agencia + sistema: conectamos las capas críticas del proyecto para que todo empuje en la misma dirección.
                </p>

                <div className="method-grid">
                    {LAYERS.map((layer, i) => (
                        <div key={i} className="method-card">
                            <p className="method-number">// {String(i + 1).padStart(2, '0')}</p>
                            <h3>{layer.title}</h3>
                            <p>{layer.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Method;
