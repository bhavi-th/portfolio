import { useEffect, useState } from "react";

const ScrollTracker = () => {
    const [scrollWidth, setScrollWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = (scrolled / totalHeight) * 100;
            setScrollWidth(scrollPercentage);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div style={{
            position: "fixed",
            top: "calc(1rem + 9.5vmin)",
            width: `${scrollWidth}%`,
            height: "3px",
            backgroundColor: "white",
            transition: "width 0.1s ease-out"
        }} />
    );
};

export default ScrollTracker;
