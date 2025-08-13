import React from "react";
import "../../public/styles/graficas.css";

const skills = [
  { name: "HTML", percent: 55, color: "#f9a825" },
  { name: "CSS", percent: 30, color: "#005b8a" },
  { name: "JavaScript", percent: 70, color: "#00cfff" },
  { name: "React", percent: 65, color: "#ff6f6f" },
  { name: "Express", percent: 70, color: "#f9a825" },
  { name: "MongoDB", percent: 70, color: "#005b8a" },
  { name: "NodeJS", percent: 70, color: "#00cfff"},
  { name: "Java", percent: 30, color: "#ff6f6f" },
  { name: "MySQL", percent: 25, color: "#f9a825" },
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