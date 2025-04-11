import React, { useState, useEffect } from "react";
import "./Home.css";

export default function Home() {

    const [text, setText] = useState("");

    useEffect(() => {
        const fullText = `Hi, I’m <span id="name">Bhavith</span>, A Web Developer and Student based in Bengaluru.`;
        let index = 0;

        const typeText = () => {
            if (index < fullText.length) {
                setText(fullText.slice(0, index + 1)); // Append one character at a time
                index++;
                setTimeout(typeText, 25); // Call function again after 100ms
            }
        };

        typeText();

    }, [])

    return (
        <div className="Home" id="home">
            <p>
                <span dangerouslySetInnerHTML={{ __html: text }}></span>
                <span className="cursor">|</span>
            </p>
            <a href="#projects">View my work</a>
        </div>
    );
}