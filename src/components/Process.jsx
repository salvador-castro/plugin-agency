const STEPS = [
    {
        category: "Fase de Descubrimiento",
        title: "Diagnóstico y definición de objetivos",
        description: "Analizamos tu contexto, público y competencia para identificar qué realmente importa y qué no aporta valor."
    },
    {
        category: "Fase de Estrategia",
        title: "Orden de marca y mensaje",
        description: "Construimos una base coherente de identidad, propuesta de valor y narrativa para todos tus puntos de contacto."
    },
    {
        category: "Fase de Ejecución",
        title: "Implementación integrada",
        description: "Desarrollamos tu presencia digital: sitio web optimizado, contenidos estratégicos y procesos automatizados."
    },
    {
        category: "Fase de Crecimiento",
        title: "Iteración y mejora continua",
        description: "Medimos resultados, ajustamos la estrategia y escalamos lo que funciona para maximizar el impacto."
    }
];

const Process = () => {
    return (
        <section id="process" className="process-section section-divider">
            <div className="container">
                <h2 className="section-title">El <span>proceso</span></h2>
                <p style={{ color: 'var(--text-2)', textAlign: 'center', maxWidth: '520px', margin: '-2rem auto 3.5rem', fontSize: '0.95rem' }}>
                    Un proceso claro y estratégico que transforma ideas en resultados medibles.
                </p>
                <div className="process-timeline">
                    <div className="process-line" />
                    {STEPS.map((step, i) => (
                        <div key={i} className="process-item">
                            <div className="process-num">{String(i + 1).padStart(2, '0')}</div>
                            <div className="process-body">
                                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--cyan)', marginBottom: '0.4rem', opacity: 0.8 }}>{step.category}</p>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
