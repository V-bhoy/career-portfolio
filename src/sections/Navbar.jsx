import { navLinks } from "../constants";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => { 
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
        <div className="inner">
            <a href="#hero" className="logo">
                Vaishali | Bhoyar
            </a>
            <nav className="desktop">
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.name} className="group">
                            <a href={link.link}>
                                <span>{link.name}</span>
                                <span className="underline"/>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <a href="#contact" className="contact-btn group">
                <div className="inner">
                    <span>Contact Me</span>
                </div>
            </a>
        </div>
    </header>
}