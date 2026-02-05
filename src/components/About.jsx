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
            name: "Maximiliano Pérez",
            role: "Founder & Director",
            bio: "Maximiliano lidera la visión general de Plugin, el desarrollo del negocio y el armado de equipos. Es responsable de integrar comunidad, productora y agencia en un mismo ecosistema, asegurando coherencia, foco y crecimiento. Su rol abarca la relación con clientes, partners y sponsors, así como la gestión comercial y económica de los proyectos.",
            skills: [
                "Liderazgo Comercial",
                "Desarrollo de Negocio",
                "Gestión de Equipos",
                "Relaciones con Partners"
            ],
            image: "/assets/equipo/maximiliano.png"
        },
        {
            name: "Salvador Castro",
            role: "Web Developer",
            bio: "Responsable de Desarrollo Web y Arquitectura de Soluciones. Su rol se centra en el diseño, desarrollo e implementación de soluciones digitales robustas, escalables y orientadas a rendimiento. Trabaja en aplicaciones web, sistemas a medida y plataformas digitales, abarcando frontend y backend.",
            skills: [
                "Frontend & Backend",
                "Arquitectura de Soluciones",
                "Integración de APIs",
                "Modelado de Datos",
                "Optimización Técnica"
            ],
            image: "/assets/equipo/salva.png"
        },
        {
            name: "Yenifer Núñez",
            role: "Marketing, Marca & Experiencia",
            bio: "Yenifer es responsable de Marketing, Marca y Experiencia. Su rol se enfoca en la construcción y gestión integral de la marca, asegurando coherencia estratégica, claridad en la comunicación y orden en los procesos vinculados a marketing y contenidos. Conecta visión estratégica con ejecución concreta.",
            skills: [
                "Lineamientos de Marca",
                "Procesos de Comunicación",
                "Planificación de Contenidos",
                "Estrategia de Marketing"
            ],
            image: "/assets/equipo/jenifer.png"
        },
        {
            name: "Pablo González",
            role: "Founder & CEO of kude.agency",
            bio: "Pablo aporta a Plugin sus conocimientos sobre automatización y flujos de trabajo automatizados para liberar al equipo de tareas repetitivas. Su trabajo asistido por IA permite aumentar la productividad del grupo, automatizando procesos internos y de cara al público, como la creación de contenido para redes sociales.",
            skills: [
                "Automation Workflows",
                "AI Enthusiast",
                "Procesos Automatizados",
                "Productividad con IA"
            ],
            image: "/assets/equipo/pablo.png"
        },
        {
            name: "Romina Garbino",
            role: "Relaciones Públicas & Alianzas",
            bio: "Romina 'Mimi' Garbino es responsable de Relaciones Públicas, Alianzas Estratégicas y Comunicación. Su trabajo se centra en potenciar la visibilidad de la agencia y clientes en LinkedIn y X, ampliando alcance y posicionamiento en el ecosistema tech y Web3. Construye colaboraciones estratégicas y acompaña la presencia en eventos IRL en LATAM.",
            skills: [
                "Relaciones Públicas",
                "Alianzas Estratégicas",
                "Comunicación",
                "Eventos IRL LATAM",
                "Ecosistema Web3"
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
