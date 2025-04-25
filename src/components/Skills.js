import React from "react";
import "./Skills.css";
import SkillCard from "./SkillCard";
import ReactJS from "../assets/skills/react.svg";
import Git from "../assets/skills/git.svg";
import GitHub from "../assets/icon/github-inverted.svg";
import C from "../assets/skills/c.svg";
import Cpp from "../assets/skills/cpp.svg";
import HTML5 from "../assets/skills/html.svg";
import CSS3 from "../assets/skills/css.svg";
import JavaScript from "../assets/skills/js.svg";
import MongoDB from "../assets/skills/mongodb.svg";
import MySQL from "../assets/skills/mysql.svg";
import Python from "../assets/skills/python.svg";
import Postman from "../assets/skills/postman.svg";

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
            description: "Skilled in structuring web content with semantic markup.",
            icon: HTML5,
            level: "Advanced",
        },
        {
            skillName: "CSS3",
            description: "Proficient in styling and responsive design using modern techniques.",
            icon: CSS3,
            level: "Advanced",
        },
        {
            skillName: "JavaScript",
            description: "Experienced in developing dynamic and interactive web applications.",
            icon: JavaScript,
            level: "Advanced",
        },
        {
            skillName: "Git",
            description: "Experienced in version control, branching, merging, and efficient repository management.",
            icon: Git,
            level: "Advanced",
        },
        {
            skillName: "GitHub",
            description: "Skilled in collaborative development and pull requests.",
            icon: GitHub,
            level: "Intermediate",
        },
        {
            skillName: "C",
            description: "Strong foundation in system-level programming and algorithm optimization.",
            icon: C,
            level: "Intermediate",
        },
        {
            skillName: "C++",
            description: " Adept at object-oriented programming and performance-driven development.",
            icon: Cpp,
            level: "Intermediate",
        },
        {
            skillName: "Python",
            description: "Versatile in scripting, automation, and data handling with Python.",
            icon: Python,
            level: "Intermediate",
        },
        {
            skillName: "MongoDB",
            description: "Knowledgeable in NoSQL databases, schema design, and query optimization.",
            icon: MongoDB,
            level: "Beginner",
        },
        {
            skillName: "MySQL",
            description: "Experienced in relational databases, SQL queries, and data integrity management.",
            icon: MySQL,
            level: "Intermediate",
        },
        {
            skillName: "Postman",
            description: "Proficient in API testing, request debugging, and automation.",
            icon: Postman,
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
