import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {/* LicenseGuard */}
        <div className="project-card">
          <h3>LicenseGuard</h3>
          <p>
            A full-stack software license management system built using <strong>Java Spring Boot</strong> and <strong>React.js</strong>. Tracks assignments, renewals, and user limits with a centralized interface.
          </p>
          <a
            href="https://github.com/Amrit-Raj-17/License-Guard-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="icon" />
            🔗 View on GitHub
          </a>
          <div className="project-tags">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>React</span>
            <span>MySQL</span>
            <span>REST API</span>
          </div>
        </div>

        {/* Genova */}
        <div className="project-card">
          <h3>Genova</h3>
          <p>
            Genova is an <strong>agentic multi-modal autonomous helpdesk system</strong> that automates the entire <strong>student admission</strong> and <strong>financial aid pipeline</strong> using modular AI agents and hybrid <strong>RAG pipelines</strong> for scalable, human-centric decision-making.
          </p>
          <a
            href="https://github.com/Amrit-Raj-17/Genova"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="icon" />
            🔗 View on GitHub
          </a>
          <div className="project-tags">
            <span>AI</span>
            <span>NLP</span>
            <span>LangChain</span>
            <span>Multi-modal</span>
            <span>Autonomous Agents</span>
            <span>RAG</span>
          </div>
        </div>

        {/* Alzheimer's Detection */}
        <div className="project-card">
          <h3>Alzheimer’s Detection</h3>
          <p>
            A deep learning project using <strong>AlexNet</strong> and <strong>GoogLeNet</strong> to classify MRI images and detect early signs of Alzheimer’s Disease.
          </p>
          <a
            href="https://www.overleaf.com/read/xyshfhwkgycd#d61f2e"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <img src="https://seeklogo.com/images/O/overleaf-logo-D46004E8F2-seeklogo.com.png" alt="Overleaf" className="icon" />
            🔗 View on Overleaf
          </a>
          <div className="project-tags">
            <span>Python</span>
            <span>Deep Learning</span>
            <span>CNN</span>
            <span>AlexNet</span>
            <span>GoogLeNet</span>
            <span>Medical Imaging</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
