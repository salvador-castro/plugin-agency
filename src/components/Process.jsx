import React from 'react';

const Process = () => {
    const steps = [
        {
            number: "01",
            icon: "🎯",
            category: "Fase de Descubrimiento",
            title: "Diagnóstico y definición de objetivos",
            description: "Analizamos tu contexto, público y competencia para identificar qué realmente importa y qué no aporta valor."
        },
        {
            number: "02",
            icon: "✨",
            category: "Fase de Estrategia",
            title: "Orden de marca y mensaje",
            description: "Construimos una base coherente de identidad, propuesta de valor y narrativa para todos tus puntos de contacto."
        },
        {
            number: "03",
            icon: "🚀",
            category: "Fase de Ejecución",
            title: "Implementación integrada",
            description: "Desarrollamos tu presencia digital: sitio web optimizado, contenidos estratégicos y procesos automatizados."
        },
        {
            number: "04",
            icon: "📊",
            category: "Fase de Crecimiento",
            title: "Iteración y mejora",
            description: "Medimos resultados, ajustamos la estrategia y escalamos lo que funciona para maximizar el impacto."
        }
    ];

    return (
        <section id="process" className="process-section">
            <div className="container">
                <h2 className="section-title">Cómo trabajamos</h2>
                <p className="process-intro">
                    Un proceso claro y estratégico que transforma ideas en resultados medibles
                </p>
                <div className="process-grid">
                    {steps.map((step, index) => (
                        <div key={index} className="process-card">
                            <div className="process-badge">{step.number}</div>
                            <div className="process-icon">{step.icon}</div>
                            <div className="process-category">{step.category}</div>
                            <h3 className="process-title">{step.title}</h3>
                            <p className="process-description">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
