import React, { useState } from 'react';

const FAQ = () => {
    const faqs = [
        {
            question: "¿Qué hace una agencia digital y en qué se diferencia de una agencia de marketing?",
            answer: "Una agencia digital combina estrategia, diseño y tecnología para crear activos digitales (webs, apps, automatizaciones), mientras que muchas agencias de marketing se enfocan solo en campañas y redes. Nosotros construimos sistemas completos."
        },
        {
            question: "¿Qué incluye un proyecto de branding y comunicación?",
            answer: "Incluye el posicionamiento, mensaje, lineamientos visuales, arquitectura de comunicación y un plan base de contenidos para asegurar que tu marca sea coherente en todos los canales."
        },
        {
            question: "¿Cuánto demora tener una web lista y optimizada para convertir?",
            answer: "Depende del alcance, pero un sitio web estructurado o landing page suele tomar entre 4 a 8 semanas, incluyendo diseño, desarrollo y carga de contenidos."
        },
        {
            question: "¿Qué automatizaciones se pueden implementar en un negocio digital?",
            answer: "Desde respuestas automáticas y gestión de formularios, hasta integración de CRMs, facturación y flujos de nutrición de leads."
        },
        {
            question: "¿Trabajan con proyectos en etapa temprana o solo con empresas?",
            answer: "Trabajamos con ambos. Tenemos packs iniciales para startups que necesitan validar y ordenar, y soluciones avanzadas para empresas que buscan escalar."
        },
        {
            question: "¿Cómo se mide el impacto del trabajo?",
            answer: "Definimos KPIs claros al inicio: tráfico, conversiones, leads cualificados y ahorro de tiempo operativo son métricas comunes que seguimos."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const filteredFaqs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section id="faq" className="faq-section section-divider-dot">
            <div className="container">
                <h2 className="section-title">Preguntas Frecuentes</h2>
                <div className="faq-content-wrapper">
                    <div className="faq-list">
                        <div className="faq-search-container">
                            <input
                                type="text"
                                placeholder="Buscar pregunta..."
                                className="faq-search-input"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <button
                                    className="search-clear"
                                    onClick={() => setSearchQuery('')}
                                    aria-label="Limpiar búsqueda"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            )}
                            <span className="search-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </span>
                        </div>
                        <div className="faq-items-container">
                            {filteredFaqs.length > 0 ? (
                                filteredFaqs.map((faq, index) => (
                                    <div key={index} className={`faq-item-ref ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleFAQ(index)}>
                                        <div className="faq-question-ref">
                                            <h3>{faq.question}</h3>
                                            <span className={`faq-icon-ref ${activeIndex === index ? 'active' : ''}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="faq-answer-ref">
                                            <p>{faq.answer}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="faq-no-results">No se encontraron preguntas que coincidan con tu búsqueda.</p>
                            )}
                        </div>
                    </div>
                    <div className="faq-image">
                        <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                            {/* Background decorative circles */}
                            <circle cx="80" cy="80" r="40" fill="#667eea" opacity="0.1" />
                            <circle cx="320" cy="100" r="30" fill="#764ba2" opacity="0.1" />
                            <circle cx="350" cy="320" r="50" fill="#667eea" opacity="0.08" />

                            {/* Main question mark */}
                            <defs>
                                <linearGradient id="questionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#667eea" />
                                    <stop offset="100%" stopColor="#764ba2" />
                                </linearGradient>
                            </defs>

                            <path d="M 200 80 C 240 80 270 110 270 150 C 270 180 250 200 230 210 L 230 240"
                                stroke="url(#questionGradient)" strokeWidth="24" strokeLinecap="round" fill="none" />
                            <circle cx="230" cy="280" r="15" fill="url(#questionGradient)" />

                            {/* Floating chat bubbles */}
                            <g opacity="0.6">
                                <rect x="60" y="200" width="80" height="50" rx="10" fill="#667eea" opacity="0.2" />
                                <circle cx="75" cy="220" r="4" fill="#667eea" />
                                <circle cx="90" cy="220" r="4" fill="#667eea" />
                                <circle cx="105" cy="220" r="4" fill="#667eea" />
                            </g>

                            <g opacity="0.6">
                                <rect x="260" y="240" width="100" height="60" rx="12" fill="#764ba2" opacity="0.2" />
                                <line x1="280" y1="260" x2="340" y2="260" stroke="#764ba2" strokeWidth="3" strokeLinecap="round" />
                                <line x1="280" y1="275" x2="320" y2="275" stroke="#764ba2" strokeWidth="3" strokeLinecap="round" />
                            </g>

                            {/* Sparkles */}
                            <g opacity="0.4">
                                <path d="M 100 150 L 105 155 L 100 160 L 95 155 Z" fill="#667eea" />
                                <path d="M 300 180 L 306 186 L 300 192 L 294 186 Z" fill="#764ba2" />
                                <path d="M 150 320 L 154 324 L 150 328 L 146 324 Z" fill="#667eea" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;