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

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="faq-section">
            <div className="container">
                <h2 className="section-title">Preguntas Frecuentes</h2>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleFAQ(index)}>
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
