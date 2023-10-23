import { InstagramLogo, YoutubeLogo } from "phosphor-react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer   ">
      <div className="footer-logo">
        <img src="" alt="" />
      </div>
      <div className="social-media">
        <div className="icon-container">
          <p>
            <InstagramLogo />
          </p>
          <p>
            <YoutubeLogo />
          </p>
        </div>
      </div>
      <p className="justify-center">Contact: easycharger@gmail.com</p>
    </footer>
  );
}

export default Footer;
