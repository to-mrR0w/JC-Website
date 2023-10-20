import { InstagramLogo, YoutubeLogo } from "phosphor-react";
import "./Footer.css";
import Icon_3lines from "./Icon_3lines";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="" alt="" />
      </div>
      <div className="social-media">
        <div className="icon-container">
          <InstagramLogo />
          <YoutubeLogo />
        </div>
      </div>
      <p className="justify-center">Contact: easycharger@gmail.com</p>
    </footer>
  );
}

export default Footer;
