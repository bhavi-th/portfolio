import React from "react";
import "./SkillCard.css"; // Create a CSS file for styling

const SkillCard = ({ skillName, description, icon, level }) => {
    return (
        <div className="Skill-card fade-elements">
            <img src={icon} alt={`${skillName} logo`} className="skill-icon" />
            <h3>{skillName}</h3>
            <p>{description}</p>
            <div className="skill-level">
                <span>Level : {level}</span>
            </div>
        </div>
    );
};

export default SkillCard;
