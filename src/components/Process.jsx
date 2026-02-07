import React from 'react';

const Process = () => {
    const steps = [
        {
            number: "01",
            title: "Diagnóstico y definición de objetivos",
            description: "Qué importa y qué no."
        },
        {
            number: "02",
            title: "Orden de marca y mensaje",
            description: "Base coherente."
        },
        {
            number: "03",
            title: "Implementación integrada",
            description: "Web + contenidos + procesos."
        },
        {
            number: "04",
            title: "Iteración y mejora",
            description: "Medir, ajustar, escalar."
        }
    ];

    return (
        <section id="process" className="process-section">
            <div className="container">
                <h2 className="section-title">Cómo trabajamos</h2>
                <div className="process-timeline">
                    {steps.map((step, index) => (
                        <div key={index} className="process-step">
                            <div className="process-number">0{index + 1}</div>
                            <div className="process-content">
                                <h3 className="process-title">{step.title}</h3>
                                <p className="process-description">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
