import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { WhatsApp } from "@mui/icons-material";
import avatar from "../assets/images/avatar.png";
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ayo-69" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/nommoh-hayab/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://wa.me/+2348028641942" target="_blank" rel="noreferrer"><WhatsApp/></a>
          </div>
          <h1>Isaac Hayab</h1>
          <p>Software Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/ayo-69" target="_blank" rel="noreferrer"><GitHubIcon/></a>
              <a href="https://www.linkedin.com/in/nommoh-hayab/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
              <a href="https://wa.me/+2348028641942" target="_blank" rel="noreferrer"><WhatsApp/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;