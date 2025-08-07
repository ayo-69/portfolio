import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { WhatsApp } from "@mui/icons-material";
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/ayo-69" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/nommoh-hayab/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://wa.me/+2348028641942" target="_blank" rel="noreferrer"><WhatsApp/></a>
      </div>
    </footer>
  );
}

export default Footer;