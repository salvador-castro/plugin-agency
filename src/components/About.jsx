import React from 'react';

const About = () => {
    const team = [
        {
            name: "Maximiliano Perez",
            role: "Strategy Lead",
            skills: [
                "Strategic Planning",
                "Team Leadership",
                "Business Development"
            ],
            image: "/assets/equipo/maximiliano.png"
        },
        {
            name: "Salva Castro",
            role: "Web Developer",
            skills: [
                "React Development",
                "Python Backend",
                "PHP Solutions",
                "Full Stack"
            ],
            image: "/assets/equipo/salva.png"
        },
        {
            name: "Yenifer Núñez",
            role: "Marketing & Experience",
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
            skills: [
                "Public Relations",
                "Conflux Ambassador",
                "Virtual Assistance",
                "Community Management"
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
                        <div key={index} className="team-card">
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

                                <div className="skills-container">
                                    <h4>Especialidades</h4>
                                    <ul className="skills-list">
                                        {member.skills.map((skill, i) => (
                                            <li key={i}>
                                                <span className="check-icon">✓</span>
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
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
