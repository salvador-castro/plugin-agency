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
                        observerRef.current.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        const cards = document.querySelectorAll('.flip-card-container');
        cards.forEach((el) => observerRef.current.observe(el));

        return () => {
            if (observerRef.current) observerRef.current.disconnect();
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
            bio: "Lidera la visión general de Plugin, el desarrollo del negocio y el armado de equipos. Integra comunidad, productora y agencia en un mismo ecosistema.",
            skills: ["Liderazgo Comercial", "Estrategia", "Gestión de Equipos"],
            image: "/assets/equipo/maximiliano.webp"
        },
        {
            name: "Salvador Castro",
            role: "Web Developer",
            bio: "Responsable de Desarrollo Web y Arquitectura de Soluciones. Diseña e implementa soluciones digitales robustas y escalables.",
            skills: ["Full Stack Dev", "Arquitectura Web", "React & Node"],
            image: "/assets/equipo/salva.webp"
        },
        {
            name: "Yenifer Núñez",
            role: "Marketing, Marca & Experiencia",
            bio: "Responsable de la construcción y gestión integral de la marca, asegurando coherencia estratégica y claridad en la comunicación.",
            skills: ["Branding", "Estrategia de Contenidos", "Marketing Digital"],
            image: "/assets/equipo/jenifer.webp"
        },
        {
            name: "Pablo González",
            role: "Automation Specialist",
            bio: "Especialista en automatización y flujos de trabajo con IA. Optimiza procesos para ganar eficiencia y escalabilidad.",
            skills: ["Automatización", "IA aplicada", "Procesos"],
            image: "/assets/equipo/pablo.webp"
        },
        {
            name: "Romina Garbino",
            role: "PR & Alianzas",
            bio: "Responsable de Relaciones Públicas y visibilidad. Conecta a la agencia y clientes con el ecosistema tech y Web3.",
            skills: ["Relaciones Públicas", "Networking", "Eventos"],
            image: "/assets/equipo/romina.webp"
        }
    ];

    return (
        <section id="about" className="section accent-bg about-section">
            <div className="container">
                <h2 className="section-title">Nosotros</h2>

                <div className="about-intro-container">
                    <p className="about-lead">Somos un equipo multidisciplinario con experiencia en estrategia, marca, contenidos, diseño web, automatización e IA aplicada.</p>
                    <p className="about-sub">Trabajamos cerca, con procesos claros y visión de largo plazo: construimos sistemas que se sostienen, no campañas aisladas.</p>
                    <div className="about-divider"></div>
                </div>

                <div className="team-grid">
                    {team.map((member, index) => (
                        <div key={index} className="flip-card-container" style={{ animationDelay: `${index * 0.2}s` }}>
                            <div className={`flip-card ${flippedCards[index] ? 'is-flipped' : ''}`}>
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <div className="member-image-container">
                                            <img src={member.image} alt={member.name} className="member-image" onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.style.backgroundColor = '#ccc' }} />
                                        </div>
                                        <div className="card-content">
                                            <h3>{member.name}</h3>
                                            <p className="member-role">{member.role}</p>
                                        </div>
                                        <button className="action-btn" onClick={() => toggleFlip(index)}>+ Info</button>
                                    </div>
                                    <div className="flip-card-back">
                                        <button className="btn-close-flip" onClick={() => toggleFlip(index)}>✕</button>
                                        <div className="back-content">
                                            <h3 className="back-name">{member.name}</h3>
                                            <p className="back-role">{member.role}</p>
                                            <p className="bio-text">{member.bio}</p>
                                            <ul className="skills-list-back">
                                                {member.skills.map((skill, i) => <li key={i} className="skill-tag">{skill}</li>)}
                                            </ul>
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
