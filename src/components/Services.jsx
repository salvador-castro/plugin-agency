const services = [
    {
        title: "Desarrollo Web",
        description: "Sitios web rápidos, seguros y escalables utilizando las últimas tecnologías.",
        icon: "💻"
    },
    {
        title: "Diseño UI/UX",
        description: "Interfaces intuitivas y atractivas que enamoran a tus usuarios.",
        icon: "🎨"
    },
    {
        title: "E-commerce",
        description: "Tiendas online optimizadas para convertir visitantes en clientes.",
        icon: "🛒"
    },
    {
        title: "SEO & Marketing",
        description: "Posicionamiento orgánico y estrategias para aumentar tu visibilidad.",
        icon: "📈"
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
