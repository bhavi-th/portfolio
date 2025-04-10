import { useState } from 'react';
import "./Navbar.css";

export default function Navbar() {

    const [activeLink, setActiveLink] = useState("home");
    const [cursor, setCursor] = useState("default");

    const changeCursor = () => {
        document.body.style.cursor = (cursor === "default") ? 'url("/cursor.cur") 10 10, auto' : "default";
        setCursor((cursor === "default") ? 'url("/cursor.cur") 10 10, auto' : "default")
    }

    return (
        <nav className="Navbar">
            <div id="logo" onClick={changeCursor} title="Click the logo to change the cursor style">&lt;bhavi-th/&gt;</div>
            <ul id="links">
                <li className={activeLink === "home" ? "active" : ""} onClick={() => setActiveLink("home")} >
                    <a href="#home">
                        Home
                    </a>
                </li>
                <li className={activeLink === "about" ? "active" : ""} onClick={() => setActiveLink("about")} >
                    <a href="#about">
                        About
                    </a>
                </li>
                <li className={activeLink === "projects" ? "active" : ""} onClick={() => setActiveLink("projects")} >
                    <a href="#projects">
                        Projects
                    </a>
                </li>
                <li className={activeLink === "skills" ? "active" : ""} onClick={() => setActiveLink("skills")} >
                    <a href="#skills">
                        Skills
                    </a>
                </li>
                <li className={activeLink === "contact" ? "active" : ""} onClick={() => setActiveLink("contact")} >
                    <a href="#contact">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}