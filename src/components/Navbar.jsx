import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsMenuOpen(false);
            }
        };
        if (isMenuOpen) document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    const handleLinkClick = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        const el = document.querySelector(targetId);
        if (el) {
            const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} ref={menuRef}>
            <div className="container navbar-container">
                <div className="logo">
                    <img src="/assets/logo/logoPlugin.webp" alt="Plugin Agency" style={{ height: '52px', width: 'auto' }} />
                </div>

                <button
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="#hero" onClick={handleLinkClick}>Inicio</a></li>
                    <li><a href="#about" onClick={handleLinkClick}>Nosotros</a></li>
                    <li><a href="#services" onClick={handleLinkClick}>Servicios</a></li>
                    <li><a href="#workpacks" onClick={handleLinkClick}>Packs</a></li>
                    <li><a href="#faq" onClick={handleLinkClick}>FAQ</a></li>
                    <li><a href="#contact" className="nav-cta" onClick={handleLinkClick}>Contacto</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
