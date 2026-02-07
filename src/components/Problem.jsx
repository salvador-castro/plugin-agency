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
        <section id="problem" className="problem-section">
            <div className="container">
                <h2 className="section-title">El problema que resolvemos</h2>
                <div className="problem-content">
                    <p className="problem-intro">Muchos proyectos avanzan, pero se sienten desordenados: hay piezas buenas, pero no encajan.</p>

                    <div className="problem-grid">
                        {problems.map((item, index) => (
                            <div key={index} className="problem-card">
                                <div className="problem-icon">✕</div>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>

                    <p className="problem-conclusion">En ese punto, el desafío no es hacer más: es ordenar, integrar y conectar.</p>
                </div>
            </div>
        </section>
    );
};

export default Problem;
