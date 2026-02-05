import { useEffect, useRef } from 'react';

const TrustedBy = () => {
    const scrollerRefs = useRef([]);

    const clientCategories = [
        {
            title: "Blockchain & Web3",
            clients: [
                { name: "Devconnect", logo: "/assets/empresas/devconnect.png" },
                { name: "Binance", logo: "/assets/empresas/binance.png" },
                { name: "Polkadot", logo: "/assets/empresas/polkadot.png" },
                { name: "Cardano", logo: "/assets/empresas/cardano.png" },
                { name: "Bitget", logo: "/assets/empresas/bitget.png" },
                { name: "Blockchain Rio", logo: "/assets/empresas/blockchain-rio.png" },
                { name: "Blockchain Summit", logo: "/assets/empresas/blockchain-summit.png" },
                { name: "Scroll Protocol", logo: "/assets/empresas/scroll.png" },
                { name: "Meta Pool", logo: "/assets/empresas/meta-pool.png" },
                { name: "Hashrate Space", logo: "/assets/empresas/hashrate-space.png" },
                { name: "Roderich's Crypto House", logo: "/assets/empresas/roderich.png" },
                { name: "Nexchange", logo: "/assets/empresas/nexchange.png" },
                { name: "Criptala", logo: "/assets/empresas/criptala.png" },
                { name: "R3al Blocks", logo: "/assets/empresas/r3al-blocks.png" },
            ]
        },
        {
            title: "Partners Corporativos y Locales",
            clients: [
                { name: "7AM Tickets", logo: "/assets/empresas/7am-tickets.png" },
                { name: "Forum Propiedades", logo: "/assets/empresas/forum-propiedades.png" },
                { name: "Luxury Punta", logo: "/assets/empresas/luxury-punta.png" },
                { name: "DF Consultores", logo: "/assets/empresas/df-consultores.png" },
                { name: "Bem Local", logo: "/assets/empresas/bem-local.png" },
                { name: "Zag Coliving", logo: "/assets/empresas/zag-coliving.png" },
                { name: "Club del Inversor", logo: "/assets/empresas/club-inversor.png" },
            ]
        },
        {
            title: "Marcas & Activaciones",
            clients: [
                { name: "Vermut Rooster", logo: "/assets/empresas/vermut-rooster.png" },
                { name: "Más Colonia", logo: "/assets/empresas/mas-colonia.png" },
                { name: "Agua Vital Kangen", logo: "/assets/empresas/agua-kangen.png" },
                { name: "Asadao", logo: "/assets/empresas/asadao.png" },
                { name: "Urusu", logo: "/assets/empresas/urusu.png" },
                { name: "Handy", logo: "/assets/empresas/handy.png" },
                { name: "Viatik", logo: "/assets/empresas/viatik.png" },
                { name: "We Bike", logo: "/assets/empresas/we-bike.png" },
            ]
        },
        {
            title: "Venues de Prestigio",
            clients: [
                { name: "Casa Pueblo", logo: "/assets/empresas/casa-pueblo.png" },
                { name: "MACA", logo: "/assets/empresas/maca.png" },
                { name: "Radisson Victoria Plaza", logo: "/assets/empresas/radisson.png" },
            ]
        }
    ];

    useEffect(() => {
        // Clone logos for seamless infinite scroll
        scrollerRefs.current.forEach((scroller) => {
            if (!scroller || scroller.dataset.cloned === 'true') return;

            const scrollerContent = Array.from(scroller.children);
            scrollerContent.forEach((item) => {
                const clone = item.cloneNode(true);
                scroller.appendChild(clone);
            });
            scroller.dataset.cloned = 'true';
        });
    }, []);

    return (
        <section className="trusted-by-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Confían en Nosotros</h2>
                    <p className="section-subtitle">
                        Trabajamos con líderes del ecosistema Web3, marcas innovadoras y venues culturales de renombre
                    </p>
                </div>

                <div className="categories-container">
                    {clientCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="category-section">
                            <h3 className="carousel-category-title">{category.title}</h3>

                            <div className="carousel-row">
                                <div className="carousel-wrapper">
                                    <div
                                        className="carousel-scroller"
                                        ref={(el) => scrollerRefs.current[categoryIndex] = el}
                                    >
                                        {category.clients.map((client, index) => (
                                            <div key={index} className="carousel-logo-card">
                                                <img
                                                    src={client.logo}
                                                    alt={client.name}
                                                    className="client-logo"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                        e.target.nextElementSibling.style.display = 'flex';
                                                    }}
                                                />
                                                <div className="logo-placeholder" style={{ display: 'none' }}>
                                                    <span>{client.name}</span>
                                                </div>
                                            </div>
                                        ))}
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

export default TrustedBy;
