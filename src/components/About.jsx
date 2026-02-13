import React, { useState } from 'react';

const TeamMemberCard = ({ member }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`team-card-ds ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="card-inner-ds">
                {/* Front Side */}
                <div className="card-front-ds">
                    <div className="card-image-wrapper">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="member-image-ds"
                            onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.style.backgroundColor = '#ccc' }}
                        />
                        <div className="card-overlay-ds"></div>
                        <div className="card-content-ds">
                            <h3 className="member-name-ds">{member.name}</h3>
                            <p className="member-role-ds">{member.role}</p>
                            <button className="more-info-btn">
                                <span>+ Info</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Back Side */}
                <div className="card-back-ds">
                    <div className="card-back-bg" style={{ backgroundImage: `url(${member.image})` }}></div>
                    <div className="card-back-overlay"></div>
                    <div className="card-back-content">
                        <h3 className="member-name-back">{member.name}</h3>
                        <p className="member-role-back">{member.role}</p>

                        <div className="member-bio-scroll">
                            <p className="member-bio-text">{member.bio}</p>
                        </div>

                        <div className="member-skills-container">
                            <h4 className="skills-title">Skills</h4>
                            <div className="skills-tags">
                                {member.skills.map((skill, index) => (
                                    <span key={index} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>

                        <button className="close-btn" onClick={(e) => {
                            e.stopPropagation();
                            handleFlip();
                        }}>
                            ✕
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const About = () => {
    const team = [
        {
            name: "Maximiliano Pérez",
            role: "Founder & Director",
            bio: "Lidera Plugin: visión, desarrollo de negocio y equipos. Integra comunidad, productora y agencia en un ecosistema.",
            skills: [
                "Community Builder",
                "Strategic Planning",
                "Team Leadership",
                "Business Development"
            ],
            image: "/assets/equipo/maximiliano.webp"
        },
        {
            name: "Salvador Castro",
            role: "Web Developer",
            bio: "Responsable de Desarrollo Web y Arquitectura de Soluciones.",
            skills: [
                "React Development",
                "Python Backend",
                "PHP Solutions",
                "Full Stack"
            ],
            image: "/assets/equipo/salva.webp"
        },
        {
            name: "Yenifer Núñez",
            role: "Marketing & Brand",
            bio: "Responsable de la construcción y gestión integral de la marca.",
            skills: [
                "Strategy",
                "Campaigns",
                "Content",
                "Events",
                "Brand experience"
            ],
            image: "/assets/equipo/jenifer.webp"
        },
        {
            name: "Pablo González",
            role: "Automation Specialist",
            bio: "Especialista en automatización y flujos de trabajo con IA.",
            skills: [
                "n8n Workflows",
                "Low Code Platforms",
                "Process Automation",
                "Integration Logic"
            ],
            image: "/assets/equipo/pablo.webp"
        },
        {
            name: "Romina Garbino",
            role: "PR & Alianzas",
            bio: "Responsable de Relaciones Públicas y visibilidad.",
            skills: [
                "Public Relations",
                "Conflux Ambassador",
                "Virtual Assistance",
                "Community Management"
            ],
            image: "/assets/equipo/romina.webp"
        }
    ];

    return (
        <section id="about" className="section accent-bg about-section section-divider-dot">
            <div className="container">
                <h2 className="section-title">Nosotros</h2>

                <div className="about-intro-container">
                    <p className="about-lead">Somos un equipo multidisciplinario con experiencia en estrategia, marca, contenidos, diseño web, automatización e IA aplicada.</p>
                </div>

                <div className="team-grid-ds">
                    {team.map((member, index) => (
                        <TeamMemberCard key={index} member={member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
