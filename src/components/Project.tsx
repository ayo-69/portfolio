import React from "react";
import test01 from "../assets/images/test01.png";
import test02 from "../assets/images/test02.png";
import test03 from "../assets/images/test03.png";
import test04 from "../assets/images/test04.png";
import test05 from "../assets/images/test05.png";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/ayo-69/dropbox-clone-api" target="_blank" rel="noreferrer"><img src={test05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/ayo-69/dropbox-clone-api" target="_blank" rel="noreferrer"><h2>Dropbox API Backend</h2></a>
                <p>Cloud-powered file management service. Handles secure uploads, retrieval, and sync using the Dropbox API</p>
            </div>
            <div className="project">
                <a href="https://github.com/ayo-69/solidity-crowd-fund" target="_blank" rel="noreferrer"><img src={test04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/ayo-69/solidity-crowd-fund" target="_blank" rel="noreferrer"><h2>Web3 Crowdfunding Platform</h2></a>
                <p>Decentralized platform for trustless crowdfunding. Anyone can launch and support crypto-based campaigns</p>
            </div>
            <div className="project">
                <a href="https://github.com/ayo-69/SimpeWallet" target="_blank" rel="noreferrer"><img src={test03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/ayo-69/SimpeWallet" target="_blank" rel="noreferrer"><h2>Crypto Token Wallet</h2></a>
                <p>A non-custodial wallet for managing Ethereum-based tokens with on-chain visibility and private key ownership</p>
            </div>
            <div className="project">
                <a href="https://github.com/ayo-69/solidity-voting-system" target="_blank" rel="noreferrer"><img src={test02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/ayo-69/solidity-voting-system" target="_blank" rel="noreferrer"><h2>Blockchain Voting System</h2></a>
                <p>Tamper-proof, decentralized voting mechanism with on-chain verification and transparent result tracking.</p>
            </div>
            <div className="project">
                <a href="https://github.com/ayo-69/weather-api-wrapper-service" target="_blank" rel="noreferrer"><img src={test01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/ayo-69/weather-api-wrapper-service" target="_blank" rel="noreferrer"><h2>Weather API Wrapper with Caching</h2></a>
                <p>A weather service that wraps external APIs and uses caching to reduce latency and rate limit hits</p>
            </div>
        </div>
    </div>
    );
}

export default Project;