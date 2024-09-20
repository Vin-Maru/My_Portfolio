import React from "react";
import "./styles/Footer.css"; // You'll style it in a separate CSS file
import Icons from "./Icons";
const Footer = () => {
  return (
    <footer className="footer">
      <Icons />
      <br></br>
      <p>© 2024 Vincent Kiprotich Maru. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;