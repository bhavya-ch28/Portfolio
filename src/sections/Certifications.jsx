import React, { useState } from "react";
import { getAssetPath } from "../utils/assetPath.js";

const certificatesData = [
  {
    name: "AI/ML Internship",
    image: "certificates/lomma-it.jpg",
    url: "certificates/lomma-it.jpg",
  },
  {
    name: "Cyber Security Trainee",
    image: "certificates/Coursera_Certificate.jpg",
    url: "certificates/Coursera_Certificate.jpg",
  },
];

// Generate certificates with correct paths
const certificates = certificatesData.map(cert => ({
  ...cert,
  image: getAssetPath(cert.image),
  url: getAssetPath(cert.url)
}));

export default function CertificateCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const next = () => {
    if (index < certificates.length - 1) setIndex(index + 1);
  };

  const arrowStyle = (disabled) => ({
    fontSize: "3rem",
    color: disabled ? "#888888" : "#00aaff",
    background: "none",
    border: "none",
    cursor: disabled ? "default" : "pointer",
    userSelect: "none",
    transition: "color 0.3s ease, filter 0.3s ease",
    outline: "none",          // 👈 removes default outline
    boxShadow: "none",        // 👈 ensures no shadow either
  });

  return (
    <section
      style={{
        maxWidth: "960px",
        margin: "0 auto",
        padding: "4rem 2rem",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "#00d8ff",
          fontWeight: 700,
          fontSize: "2.5rem",
          marginBottom: "1rem",
          textShadow: "0 0 8px #00d8ffaa",
        }}
      >
        Certifications
      </h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        {/* Left Arrow */}
        <button
          onClick={prev}
          disabled={index === 0}
          aria-label="Previous Certificate"
          style={arrowStyle(index === 0)}
        >
          &lt;
        </button>

        {/* Certificate Image */}
        <div style={{ textAlign: "center" }}>
          <img
            src={certificates[index].image}
            alt={certificates[index].name}
            onClick={() => window.open(certificates[index].url, "_blank")}
            className="certificate-image"
            style={{ cursor: "pointer" }}
            draggable={false}
            title={`Click to view full certificate: ${certificates[index].name}`}
          />
          <h3
            style={{
              color: "#ffffff",
              fontSize: "1.2rem",
              marginTop: "1rem",
              fontWeight: 500,
            }}
          >
            {certificates[index].name}
          </h3>
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          disabled={index === certificates.length - 1}
          aria-label="Next Certificate"
          style={arrowStyle(index === certificates.length - 1)}
        >
          &gt;
        </button>
      </div>
    </section>
  );
}
