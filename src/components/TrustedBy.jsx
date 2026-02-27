const clients = [
    { name: "Binance", logo: "/assets/empresas/binance.webp" },
    { name: "Polkadot", logo: "/assets/empresas/polkadot.webp" },
    { name: "Devconnect", logo: "/assets/empresas/devconnect.webp" },
    { name: "Bitget", logo: "/assets/empresas/bitget.webp" },
    { name: "Cardano", logo: "/assets/empresas/cardano.webp" },
    { name: "Blockchain Rio", logo: "/assets/empresas/blockchain-rio.webp" },
    { name: "Radisson", logo: "/assets/empresas/radisson.webp" },
    { name: "Meta Pool", logo: "/assets/empresas/meta-pool.webp" },
    { name: "7AM Tickets", logo: "/assets/empresas/7am-tickets.webp" },
    { name: "Forum Propiedades", logo: "/assets/empresas/forum-propiedades.webp" },
    { name: "Blockchain Summit", logo: "/assets/empresas/blockchain-summit.webp" },
    { name: "Scroll Protocol", logo: "/assets/empresas/scroll-protocol.webp" },
    { name: "Criptala", logo: "/assets/empresas/criptala.webp" },
    { name: "Zag Coliving", logo: "/assets/empresas/zag-coliving.webp" },
    { name: "Vermut Rooster", logo: "/assets/empresas/vermut-rooster.webp" },
    { name: "Nexchange", logo: "/assets/empresas/nexchange.webp" },
    { name: "Casa Pueblo", logo: "/assets/empresas/casa-pueblo.webp" },
    { name: "We Bike", logo: "/assets/empresas/we-bike.webp" },
];

const LogoItem = ({ client }) => (
    <div className="tb-logo-item">
        <img
            src={client.logo}
            alt={client.name}
            className="tb-logo-img"
            loading="lazy"
            width="140"
            height="60"
        />
    </div>
);

const TrustedBy = () => {
    const row1 = clients.slice(0, 9);
    const row2 = clients.slice(9);

    return (
        <section className="trusted-by-section">
            <div className="container">
                <p className="tb-eyebrow">CLIENTES &amp; PARTNERS</p>
                <h2 className="section-title">
                    Empresas que <span>confían</span> en nosotros
                </h2>
                <p className="tb-subtitle">
                    Desde proyectos Web3 globales hasta marcas locales y venues de prestigio.
                </p>
            </div>

            {/* Row 1 — scroll left → right */}
            <div className="tb-track-wrapper">
                <div className="tb-fade-left" />
                <div className="tb-fade-right" />
                <div className="tb-track tb-track--forward">
                    {[...row1, ...row1].map((c, i) => (
                        <LogoItem key={`r1-${i}`} client={c} />
                    ))}
                </div>
            </div>

            {/* Row 2 — scroll right → left */}
            <div className="tb-track-wrapper" style={{ marginTop: '1.5rem' }}>
                <div className="tb-fade-left" />
                <div className="tb-fade-right" />
                <div className="tb-track tb-track--reverse">
                    {[...row2, ...row2].map((c, i) => (
                        <LogoItem key={`r2-${i}`} client={c} />
                    ))}
                </div>
            </div>

            <div className="container">
                <p className="tb-count-note">
                    +30 proyectos ejecutados &mdash; Web3, marcas, venues y partners corporativos
                </p>
            </div>
        </section>
    );
};

export default TrustedBy;
