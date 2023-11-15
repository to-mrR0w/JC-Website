import { InstagramLogo, YoutubeLogo } from "phosphor-react";
import "./Footer.css";
import styled from "styled-components";
import { FaMailchimp } from "react-icons/fa";

styled.footer``;

function Footer() {
  return (
    <footer className="space-y-2 m-2 absolute bottom-0 w-full ">
      {/* <div className="footer-logo">
        <img src="" alt="" />
      </div> */}
      <span>
        <InstagramLogo />
      </span>
      <span>
        <YoutubeLogo />
      </span>
      <span className="flex">
        <FaMailchimp />{" "}
        <p className=" font-semibold text-stone-600 ">
          Contact: easycharger@gmail.com
        </p>
      </span>
    </footer>
  );
}

export default Footer;
