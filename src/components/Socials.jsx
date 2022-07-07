import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

function Socials() {
  return (
    <div className="socials-container">
      <div className="socials-item">
        <h3>CONNECT WITH US</h3>
      </div>
      <div className="socials-item">
        <FacebookIcon />
        <InstagramIcon />
        <YouTubeIcon />
        <WhatsAppIcon />
        <EmailIcon />
      </div>
    </div>
  );
}

export default Socials;
