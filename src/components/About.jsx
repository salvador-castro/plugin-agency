import { useEffect, useRef, useState } from 'react';

const About = () => {
    const observerRef = useRef(null);
    const [flippedCards, setFlippedCards] = useState({});

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-flip-down');
                        observerRef.current.unobserve(entry.target); // Trigger once
                    }
                });
            },
            {
                threshold: 0.2, // Trigger when 20% visible
            }
        );

        const cards = document.querySelectorAll('.flip-card-container');
        cards.forEach((el) => observerRef.current.observe(el));

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    const toggleFlip = (index) => {
        setFlippedCards(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const team = [
        {
            name: "Maximiliano Perez",
            role: "Strategy Lead",
            bio: "Maximiliano lidera con una visión estratégica, conectando las necesidades de la comunidad con los objetivos del negocio. Su experiencia en planificación y liderazgo asegura un crecimiento sostenible.",
            skills: [
                "Community Builder",
                "Strategic Planning",
                "Team Leadership",
                "Business Development"
            ],
            image: "/assets/equipo/maximiliano.png"
        },
        {
            name: "Salva Castro",
            role: "Web Developer",
            bio: "Salva permite a las marcas escalar con soluciones técnicas robustas y mantenibles. Se especializa en crear experiencias digitales fluidas desde el frontend hasta el backend.",
            skills: [
                "Frontend Architecture",
                "Backend Development",
                "System Integrations",
                "Process Automation",
                "Product-Oriented Solutions"
            ],
            image: "/assets/equipo/salva.png"
        },
        {
            name: "Yenifer Núñez",
            role: "Marketing & Experience",
            bio: "Yenifer crea narrativas convincentes y experiencias de marca memorables. Une a las empresas con sus audiencias a través de campañas creativas.",
            skills: [
                "Strategy",
                "Campaigns",
                "Content",
                "Events",
                "Brand experience"
            ],
            image: "/assets/equipo/jenifer.png"
        },
        {
            name: "Pablo",
            role: "Automation Specialist",
            bio: "Pablo optimiza flujos de trabajo, ahorrando tiempo y reduciendo errores. Sus soluciones de automatización agilizan procesos complejos, permitiendo a los equipos enfocarse en lo importante.",
            skills: [
                "n8n Workflows",
                "Low Code Platforms",
                "Process Automation",
                "Integration Logic"
            ],
            image: "/assets/equipo/pablo.png"
        },
        {
            name: "Romina Garbino",
            role: "Blockchain Amb. & VA",
            bio: "Romina conecta en el espacio Web3, construyendo comunidades y gestionando comunicaciones estratégicas para posicionar marcas efectivamente en el ecosistema blockchain.",
            skills: [
                "Public Relations",
                "Community Building",
                "Strategic Communication",
                "Brand Positioning",
                "Web3 Ecosystems"
            ],
            image: "/assets/equipo/romina.png"
        }
    ];

    return (
        <section id="about" className="section accent-bg">
            <div className="container">
                <h2 className="section-title">Sobre Nosotros</h2>
                <div className="team-grid">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="flip-card-container"
                            style={{ animationDelay: `${index * 0.2}s` }} // Staggered entry
                        >
                            <div className={`flip-card ${flippedCards[index] ? 'is-flipped' : ''}`}>
                                <div className="flip-card-inner">
                                    {/* Front Side */}
                                    <div className="flip-card-front">
                                        <div>
                                            <div className="member-image-container">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="member-image"
                                                    onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.style.backgroundColor = '#ccc' }}
                                                />
                                            </div>

                                            <div className="card-content">
                                                <h3>{member.name}</h3>
                                                <p className="member-role">{member.role}</p>
                                            </div>
                                        </div>

                                        <button
                                            className="action-btn"
                                            onClick={() => toggleFlip(index)}
                                        >
                                            + Más info
                                        </button>
                                    </div>

                                    {/* Back Side */}
                                    <div className="flip-card-back">
                                        <button
                                            className="btn-close-flip"
                                            onClick={() => toggleFlip(index)}
                                            aria-label="Close details"
                                        >
                                            ✕
                                        </button>

                                        <div className="back-content">
                                            <div>
                                                <h3 className="back-name">{member.name}</h3>
                                                <p className="back-role">{member.role}</p>
                                            </div>

                                            <div className="bio-section">
                                                <h4>Biografía</h4>
                                                <p className="bio-text">{member.bio}</p>
                                            </div>

                                            <div className="skills-section">
                                                <h4>Habilidades</h4>
                                                <ul className="skills-list-back">
                                                    {member.skills.map((skill, i) => (
                                                        <li key={i} className="skill-tag">
                                                            {skill}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
