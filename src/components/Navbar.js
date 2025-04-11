import { useState } from 'react';
import "./Navbar.css";

export default function Navbar() {

    const [activeLink, setActiveLink] = useState("home");

    return (
        <nav className="Navbar">
            <div id="logo">&lt;bhavi-th/&gt;</div>
            <ul id="links">
                <a href="#home" className={activeLink === "home" ? "active" : ""} onClick={() => setActiveLink("home")}>
                    <li>
                        Home
                    </li>
                </a>
                <a href="#about" className={activeLink === "about" ? "active" : ""} onClick={() => setActiveLink("about")}>
                    <li>
                        About
                    </li>
                </a>
                <a href="#projects" className={activeLink === "projects" ? "active" : ""} onClick={() => setActiveLink("projects")}>
                    <li>
                        Projects
                    </li>
                </a>
                <a href="#skills" className={activeLink === "skills" ? "active" : ""} onClick={() => setActiveLink("skills")}>
                    <li>
                        Skills
                    </li>
                </a>
                <a href="#contact" className={activeLink === "contact" ? "active" : ""} onClick={() => setActiveLink("contact")}>
                    <li>
                        Contact
                    </li>
                </a>
            </ul>
        </nav>
    );
}