import React from "react";
import "./Skills.css";
import SkillCard from "./SkillCard";
import ReactJS from "../assets/skills/react.svg";
import Git from "../assets/skills/git.svg";
import C from "../assets/skills/c.svg";
import Cpp from "../assets/skills/cpp.svg";
import HTML5 from "../assets/skills/html.svg";
import CSS3 from "../assets/skills/css.svg";
import JavaScript from "../assets/skills/js.svg";
import MongoDB from "../assets/skills/mongodb.svg";
import MySQL from "../assets/skills/mysql.svg";
import Python from "../assets/skills/python.svg";
import Postman from "../assets/skills/postman.svg";
import Linux from "../assets/skills/linux.svg";

const Skills = () => {
    const skills = [
        {
            skillName: "React",
            description: "Experienced in building UIs with hooks and state management.",
            icon: ReactJS,
            level: "Intermediate",
        },
        {
            skillName: "HTML5",
            description: "Proficient with version control and GitHub collaboration.",
            icon: HTML5,
            level: "Advanced",
        },
        {
            skillName: "CSS3",
            description: "Proficient with version control and GitHub collaboration.",
            icon: CSS3,
            level: "Advanced",
        },
        {
            skillName: "JavaScript",
            description: "Proficient with version control and GitHub collaboration.",
            icon: JavaScript,
            level: "Advanced",
        },
        {
            skillName: "Git",
            description: "Proficient with version control and GitHub collaboration.",
            icon: Git,
            level: "Advanced",
        },
        {
            skillName: "C",
            description: "Proficient with version control and GitHub collaboration.",
            icon: C,
            level: "Intermediate",
        },
        {
            skillName: "C++",
            description: "Proficient with version control and GitHub collaboration.",
            icon: Cpp,
            level: "Intermediate",
        },
        {
            skillName: "Python",
            description: "Proficient with version control and GitHub collaboration.",
            icon: Python,
            level: "Intermediate",
        },
        {
            skillName: "MongoDB",
            description: "Proficient with version control and GitHub collaboration.",
            icon: MongoDB,
            level: "Beginner",
        },
        {
            skillName: "MySQL",
            description: "Proficient with version control and GitHub collaboration.",
            icon: MySQL,
            level: "Intermediate",
        },
        {
            skillName: "Postman",
            description: "Proficient with version control and GitHub collaboration.",
            icon: Postman,
            level: "Intermediate",
        },
        {
            skillName: "Linux",
            description: "Proficient with version control and GitHub collaboration.",
            icon: Linux,
            level: "Intermediate",
        },
        // Add more skills here
    ];

    return (
        <section className="Skills" id="skills">
            {skills.map((skill, index) => (
                <SkillCard key={index} {...skill} />
            ))}
        </section>
    );
};

export default Skills;
