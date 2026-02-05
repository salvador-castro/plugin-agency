import { useMemo } from 'react';

const TrustedBy = () => {
    const clientCategories = useMemo(() => [
        {
            title: "Blockchain & Web3",
            clients: [
                { name: "Devconnect", logo: "/assets/empresas/devconnect.webp" },
                { name: "Binance", logo: "/assets/empresas/binance.webp" },
                { name: "Polkadot", logo: "/assets/empresas/polkadot.webp" },
                { name: "Cardano", logo: "/assets/empresas/cardano.webp" },
                { name: "Bitget", logo: "/assets/empresas/bitget.webp" },
                { name: "Blockchain Rio", logo: "/assets/empresas/blockchain-rio.webp" },
                { name: "Blockchain Summit", logo: "/assets/empresas/blockchain-summit.webp" },
                { name: "Scroll Protocol", logo: "/assets/empresas/scroll-protocol.webp" },
                { name: "Meta Pool", logo: "/assets/empresas/meta-pool.webp" },
                { name: "Hashrate Space", logo: "/assets/empresas/hashrate.webp" },
                { name: "Roderich's Crypto House", logo: "/assets/empresas/roderich.webp" },
                { name: "Nexchange", logo: "/assets/empresas/nexchange.webp" },
                { name: "Criptala", logo: "/assets/empresas/criptala.webp" },
                { name: "R3al Blocks", logo: "/assets/empresas/r3al-blocks.webp" },
            ]
        },
        {
            title: "Partners Corporativos y Locales",
            clients: [
                { name: "7AM Tickets", logo: "/assets/empresas/7am-tickets.webp" },
                { name: "Forum Propiedades", logo: "/assets/empresas/forum-propiedades.webp" },
                { name: "Luxury Punta", logo: "/assets/empresas/luxury-punta.webp" },
                { name: "DF Consultores", logo: "/assets/empresas/df-consultores.webp" },
                { name: "Bem Local", logo: "/assets/empresas/bem-local.webp" },
                { name: "Zag Coliving", logo: "/assets/empresas/zag-coliving.webp" },
                { name: "Club del Inversor", logo: "/assets/empresas/club-inversor.webp" },
            ]
        },
        {
            title: "Marcas & Activaciones",
            clients: [
                { name: "Vermut Rooster", logo: "/assets/empresas/vermut-rooster.webp" },
                { name: "Más Colonia", logo: "/assets/empresas/mas-colonia.webp" },
                { name: "Agua Vital Kangen", logo: "/assets/empresas/agua-kangen.webp" },
                { name: "Asadao", logo: "/assets/empresas/asadao.webp" },
                { name: "Urusu", logo: "/assets/empresas/urusu.webp" },
                { name: "Handy", logo: "/assets/empresas/handy.webp" },
                { name: "Viatik", logo: "/assets/empresas/viatik.webp" },
                { name: "We Bike", logo: "/assets/empresas/we-bike.webp" },
            ]
        },
        {
            title: "Venues de Prestigio",
            clients: [
                { name: "Casa Pueblo", logo: "/assets/empresas/casa-pueblo.webp" },
                { name: "MACA", logo: "/assets/empresas/maca.webp" },
                { name: "Radisson Victoria Plaza", logo: "/assets/empresas/radisson.webp" },
            ]
        }
    ], []);

    // Render a single logo card
    const LogoCard = ({ client, keyPrefix }) => (
        <div className="carousel-logo-card">
            <img
                src={client.logo}
                alt={client.name}
                className="client-logo"
                width="186"
                height="100"
                loading="lazy"
            />
        </div>
    );

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
                                    {/* 
                                        Pure CSS infinite scroll - we render the items twice 
                                        in React instead of cloning via DOM manipulation.
                                        This eliminates the forced reflow from useEffect.
                                    */}
                                    <div className="carousel-scroller">
                                        {/* First set of logos */}
                                        {category.clients.map((client, index) => (
                                            <LogoCard
                                                key={`first-${index}`}
                                                client={client}
                                            />
                                        ))}
                                        {/* Second set (duplicate for seamless loop) */}
                                        {category.clients.map((client, index) => (
                                            <LogoCard
                                                key={`second-${index}`}
                                                client={client}
                                            />
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
