import React from "react";
import { getAssetPath } from "../utils/assetPath.js";

const skillsData = [
  { name: "Python", icon: "icons/python-original.svg" },
  { name: "Java", icon: "icons/java-original.svg" },
  { name: "Kotlin", icon: "icons/kotlin-original.svg" },
  { name: "C", icon: "icons/c-original.svg" },
  { name: "C++", icon: "icons/cplusplus-original.svg" },
  { name: "HTML5", icon: "icons/html5-original.svg" },
  { name: "CSS3", icon: "icons/css3-original.svg" },
  { name: "JavaScript", icon: "icons/javascript-original.svg" },
  { name: ".NET ", icon: "icons/NET_Core_Logo.svg" },
  { name: "React", icon: "icons/react-original.svg" },
  { name: "Node.js", icon: "icons/nodejs-original.svg" },
  { name: "Angular", icon: "icons/angularjs-original.svg" },
  { name: "AWS", icon: "icons/aws_logo_.png" },
  { name: "Docker", icon: "icons/docker-original.svg" },
  { name: "Kubernetes", icon: "icons/kubernetes-original.svg" },
  { name: "Jenkins", icon: "icons/jenkins-original.svg" },
  { name: "Git", icon: "icons/git-original.svg" },
  { name: "MongoDB", icon: "icons/mongodb-original.svg" },
  { name: "MySQL", icon: "icons/mysql-original.svg" },
  { name: "VS Code", icon: "icons/vscode-original.svg" },
  { name: "Linux / Unix", icon: "icons/Linux.svg" },
];

// Generate skills with correct asset paths
const skills = skillsData.map(skill => ({
  ...skill,
  imgSrc: getAssetPath(skill.icon)
}));

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center p-10"
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-cyan-400">
        Skills &amp; Technologies
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
          maxWidth: 1000,
          width: "100%",
        }}
      >
        {skills.map(({ name, imgSrc }, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.4rem 0.8rem",
              borderRadius: "8px",
              border: "1.5px solid rgba(255, 255, 255, 0.15)",
              boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              transition: "all 0.3s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor =
                "rgba(255, 255, 255, 0.12)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.5)";
              e.currentTarget.style.borderColor = "rgba(0, 216, 255, 0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor =
                "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.3)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
            }}
          >
            <img
              src={imgSrc}
              alt={`${name} logo`}
              style={{ width: 28, height: 28, objectFit: "contain" }}
              loading="lazy"
            />
            <p
              style={{ margin: 0, fontWeight: "600", fontSize: "1rem" }}
            >
              {name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}