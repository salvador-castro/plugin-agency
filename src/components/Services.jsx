const services = [
    {
        title: "Estrategia, Marca y Comunicación",
        description: "Ordenamos identidad, propuesta de valor y narrativa para que cada punto de contacto diga lo mismo: claro, consistente y con intención.",
        icon: "🎯"
    },
    {
        title: "Contenidos y Redes Sociales",
        description: "Diseñamos una estrategia de contenidos que represente al proyecto y lo vuelva encontrable.",
        icon: "📱"
    },
    {
        title: "Diseño Web y Soluciones Digitales",
        description: "Diseñamos y desarrollamos sitios web y landings orientadas a conversión, alineadas a la marca y al objetivo del negocio.",
        icon: "💻"
    },
    {
        title: "Automatización, Procesos e IA aplicada",
        description: "Implementamos flujos para ahorrar tiempo, estandarizar y escalar operaciones y contenido.",
        icon: "🤖"
    },
    {
        title: "PR, Experiencias y Ecosistema",
        description: "Creamos activaciones y conexiones que aumentan visibilidad real dentro del ecosistema creativo y tecnológico.",
        icon: "🤝"
    }
];

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <h2 className="section-title">Nuestros Servicios</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
