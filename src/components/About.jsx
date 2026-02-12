const About = () => {
    const team = [
        {
            name: "Maximiliano Pérez",
            role: "Founder & Director",
            bio: "Lidera la visión general de Plugin, el desarrollo del negocio y el armado de equipos.",
            image: "/assets/equipo/maximiliano.webp"
        },
        {
            name: "Salvador Castro",
            role: "Web Developer",
            bio: "Responsable de Desarrollo Web y Arquitectura de Soluciones.",
            image: "/assets/equipo/salva.webp"
        },
        {
            name: "Yenifer Núñez",
            role: "Marketing & Brand",
            bio: "Responsable de la construcción y gestión integral de la marca.",
            image: "/assets/equipo/jenifer.webp"
        },
        {
            name: "Pablo González",
            role: "Automation Specialist",
            bio: "Especialista en automatización y flujos de trabajo con IA.",
            image: "/assets/equipo/pablo.webp"
        },
        {
            name: "Romina Garbino",
            role: "PR & Alianzas",
            bio: "Responsable de Relaciones Públicas y visibilidad.",
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
                        <div key={index} className="team-card-ds">
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
                                    <div className="member-bio-ds">
                                        <p>{member.bio}</p>
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
