import React from 'react';

const WorkPacks = () => {
    const packs = [
        {
            title: "Pack Base — Sistema Inicial",
            subtitle: "Para proyectos que necesitan ordenarse y arrancar bien.",
            description: "Ideal si estás construyendo identidad, mensaje y una presencia digital simple pero coherente.",
            includes: [
                "Identidad, mensaje y posicionamiento inicial",
                "Estrategia base de comunicación y contenidos",
                "Lineamientos para redes",
                "Landing o sitio simple y estructurado",
                "Acompañamiento durante la implementación"
            ],
            result: "Una base clara y comunicable para empezar a crecer.",
            highlight: false
        },
        {
            title: "Pack Intermedio — Sistema Integrado",
            subtitle: "Para proyectos en crecimiento que necesitan coherencia y visibilidad.",
            description: "Ideal si ya están activos, pero web, redes y comunicación no funcionan como un sistema.",
            includes: [
                "Estrategia de marca, comunicación y contenidos",
                "Planificación y acompañamiento de redes",
                "Desarrollo/mejora de sitio o plataforma",
                "Automatización de procesos clave",
                "Acompañamiento continuo"
            ],
            result: "Un sistema alineado donde comunicación, contenidos y tecnología trabajan juntos.",
            highlight: true
        },
        {
            title: "Pack Avanzado — Ecosistema Conectado",
            subtitle: "Para proyectos que buscan consolidarse y escalar.",
            description: "Ideal si necesitan estructura, posicionamiento y visibilidad estratégica dentro del ecosistema.",
            includes: [
                "Dirección estratégica integral",
                "Estrategia avanzada de contenidos y posicionamiento",
                "Desarrollo web / soluciones a medida",
                "Automatización avanzada",
                "PR, alianzas y acciones de visibilidad",
                "Diseño y ejecución de experiencias específicas"
            ],
            result: "Un proyecto consolidado, visible y conectado.",
            highlight: false
        }
    ];

    return (
        <section id="workpacks" className="workpacks-section section-divider-dot">
            <div className="container">
                <h2 className="section-title">Packs de trabajo</h2>
                <div className="packs-grid">
                    {packs.map((pack, index) => (
                        <div key={index} className={`pack-card ${pack.highlight ? 'highlight' : ''}`}>
                            <h3 className="pack-title">{pack.title}</h3>
                            <p className="pack-subtitle">{pack.subtitle}</p>
                            <p className="pack-description">{pack.description}</p>
                            <ul className="pack-includes">
                                {pack.includes.map((item, idx) => (
                                    <li key={idx}><span className="check-icon">✓</span> {item}</li>
                                ))}
                            </ul>
                            <div className="pack-result">
                                <strong>Resultado:</strong> {pack.result}
                            </div>
                            <a href="#contact" className="btn btn-primary pack-btn">Consultar Pack</a>
                        </div>
                    ))}
                </div>
                <p className="packs-disclaimer">Aclaración: Cada pack es una estructura de acompañamiento: el alcance final se define por etapa, objetivos y necesidades.</p>
            </div>
        </section>
    );
};

export default WorkPacks;
