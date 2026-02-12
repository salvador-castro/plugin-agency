import React from 'react';

const Problem = () => {
    const problems = [
        "Tu marca y tu propuesta no están claras (cuesta explicarlas y venderlas).",
        "Redes y contenidos no representan lo que realmente hacen.",
        "Web, redes y producto funcionan por separado y se pierde coherencia.",
        "El servicio es sólido, pero el mensaje no lo muestra.",
        "Los procesos consumen tiempo: tareas repetidas, falta de seguimiento, improvisación.",
        "Querés visibilidad, pero sin “hacer ruido” sin sentido."
    ];

    return (
        <section id="problem" className="problem-section section-divider-dot">
            <div className="container">
                <div className="problem-header">
                    <h2 className="section-title">El problema que resolvemos</h2>
                    <p className="problem-intro">Muchos proyectos avanzan, pero se sienten desordenados: hay piezas buenas, pero no encajan.</p>
                </div>

                <div className="problem-grid">
                    {problems.map((item, index) => (
                        <div key={index} className="problem-card">
                            <div className="problem-icon-wrapper">
                                <div className="problem-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </div>
                            </div>
                            <p className="problem-text">{item}</p>
                        </div>
                    ))}
                </div>

                <div className="problem-footer">
                    <p className="problem-conclusion">En ese punto, el desafío no es hacer más: es <span className="highlight-text">ordenar, integrar y conectar</span>.</p>
                    <div className="problem-cta-wrapper">
                        <a href="#contact" className="btn btn-primary problem-cta">Hablemos de tu proyecto</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
