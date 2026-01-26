import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <div className="logo">
                    <img src="/assets/logo/logoPlugin.png" alt="Plugin Agency" style={{ height: '60px', width: 'auto' }} />
                </div>
                <ul className="nav-links">
                    <li><a href="#hero">Inicio</a></li>
                    <li><a href="#about">Nosotros</a></li>
                    <li><a href="#services">Servicios</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
