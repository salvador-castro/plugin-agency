import React from 'react';

const Method = () => {
    const items = [
        "Estrategia y posicionamiento (para decidir qué decir y qué priorizar)",
        "Marca y comunicación (para que el mensaje sea coherente y memorable)",
        "Contenidos y redes (para construir visibilidad sostenida)",
        "Web y producto digital (para convertir visitas en oportunidades reales)",
        "Automatización e IA aplicada (para escalar sin sumar caos)"
    ];

    return (
        <section id="method" className="method-section section-divider-dot">
            <div className="container">
                <h2 className="section-title">Cómo ayudamos</h2>
                <div className="method-content">
                    <p className="method-intro">En Plugin Agency trabajamos como <strong>agencia + sistema</strong>: conectamos las capas críticas del proyecto para que todo empuje en la misma dirección.</p>

                    <div className="method-layers">
                        {items.map((item, index) => (
                            <div key={index} className="method-layer">
                                <span className="layer-number">0{index + 1}</span>
                                <span className="layer-text">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Method;
