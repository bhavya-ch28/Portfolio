import React from 'react';

const researchWorks = [
  {
    title: 'Evaluating the Impact of Serverless Computing (Thesis)',
    description:
      'Conducted an in‑depth study on serverless computing’s architectural benefits in modern web development and built a Lucidchart‑based decision‑making framework for technology adoption.',
    link: 'https://www.diva-portal.org/smash/record.jsf?pid=diva2:1910059',   // <-- add/adjust URL if needed
  },
  {
    title: 'Crop Price Prediction using Machine Learning',
    description:
      'Applied Linear and Support Vector Regression on Kaggle agricultural‑pricing data to deliver predictive insights for data‑informed farming and market decisions.',
    link: 'https://github.com/bhavya-ch28/Machine_Learning_Project',         // <-- add/adjust URL if needed
  },
];

export default function ResearchWork() {
  return (
    <section className="research">
      <h2>Research Work</h2>

      <div className="research-container">
        {researchWorks.map(({ title, description, link }, idx) => (
          <div key={idx} className="research-item">
            <h3>{title}</h3>
            <p>{description}</p>

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
