import React from "react";
import "../../public/styles/graficas.css";

const skills = [
  { name: "JavaScript", percent: 70, color: "#00cfff" },
  { name: "MongoDB", percent: 70, color: "#005b8a" },
  { name: "Express", percent: 70, color: "#f9a825" },
  { name: "React", percent: 65, color: "#ff6f6f" },
  { name: "NodeJS", percent: 65, color: "#00cfff" },
  { name: "Github", percent: 60, color: "#ff6f6f" },
  { name: "HTML", percent: 55, color: "#005b8a" },
  { name: "Java", percent: 50, color: "#ff6f6f" },
  { name: "MySQL", percent: 45, color: "#00cfff" },
  { name: "CSS", percent: 40, color: "#f9a825" },
];

const Graficas = () => (
  <div className="skills-container">
    {skills.map((skill) => (
      <div className="skill-bar" key={skill.name}>
        <div className="skill-label">
          {skill.name}
          <span className="skill-percent">{skill.percent}%</span>
        </div>
        <div className="skill-track">
          <div
            className="skill-fill"
            style={{
              width: `${skill.percent}%`,
              background: skill.color,
            }}
          ></div>
        </div>
      </div>
    ))}
  </div>
);

export default Graficas;