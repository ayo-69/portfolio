import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faDev } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "TypeScript",
    "JavaScript",
    "SQL",
    "PostgreSQL",
    "React.js",
    "Next.js",
    "MongoDB",
    "Postman",
    "Mongoose",
    "Express",
    "Prisma",
    "Node.js"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Linux",
    "Pandas",
    "CI/CD"
];

const labelThird = [
    "Sui",
    "Move",
    "Solidity",
    "Hardhat",
    "Foundry",
    "Metamask",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Next. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps</h3>
                    <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDev} size="3x"/>
                    <h3>Blockchain Development</h3>
                    <p>Built numerous projects from Crowdfunds to Personalised Token Marketplace, carefully audited and verified for production.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;