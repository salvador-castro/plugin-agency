import { MessageSquareOff, Share2, Puzzle, MegaphoneOff, Clock, EyeOff } from 'lucide-react';

const PROBLEMS = [
    {
        title: "Mensaje poco claro",
        text: "Tu marca y propuesta no están claras — cuesta explicarlas y venderlas.",
        icon: <MessageSquareOff size={24} />
    },
    {
        title: "Redes y contenidos desalineados",
        text: "Lo que mostrás en redes no representa lo que realmente hacen.",
        icon: <Share2 size={24} />
    },
    {
        title: "Falta de coherencia",
        text: "Web, redes y producto funcionan por separado y se pierde coherencia.",
        icon: <Puzzle size={24} />
    },
    {
        title: "El servicio es bueno, el mensaje no",
        text: "El servicio es sólido, pero el lenguaje no lo comunica.",
        icon: <MegaphoneOff size={24} />
    },
    {
        title: "Procesos que consumen tiempo",
        text: "Tareas repetidas, falta de seguimiento e improvisación operativa.",
        icon: <Clock size={24} />
    },
    {
        title: "Visibilidad sin estrategia",
        text: "Querés crecer, pero sin hacer ruido vacío ni disparar sin dirección.",
        icon: <EyeOff size={24} />
    }
];

const Problem = () => {
    return (
        <section id="problem" className="problem-section section-divider">
            <div className="container">
                <div className="problem-header">
                    <p className="problem-eyebrow">// el problema que resolvemos</p>
                    <h2 className="section-title">
                        Proyectos que avanzan<br />
                        pero se sienten <span>desordenados</span>
                    </h2>
                    <p style={{ color: 'var(--text-2)', maxWidth: '560px', margin: '0 auto', fontSize: '0.95rem' }}>
                        Hay piezas buenas, pero no encajan. El desafío no es hacer más: es ordenar, integrar y conectar.
                    </p>
                </div>

                <div className="problem-grid">
                    {PROBLEMS.map((item, i) => (
                        <div key={i} className="problem-card">
                            <div className="problem-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <a href="#contact" className="btn btn-primary">Hablemos de tu proyecto</a>
                </div>
            </div>
        </section>
    );
};

export default Problem;
