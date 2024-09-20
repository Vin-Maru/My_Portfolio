import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Icons = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={40} />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={40} />
      </a>
      <a href="https://www.instagram.com/vinny_koech_?igsh=MXd0eTgyNm9mcXc1Zg==" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={40} />
      </a>
      <a href="https://www.linkedin.com/in/vincentkiprotich/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B5vmIvudZRNKSuwm39sf%2BTw%3D%3D" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={40} />
      </a>
      <a href="https://wa.me/qr/YMD3WK4T4MMXK1" target="https://wa.me/qr/YMD3WK4T4MMXK1" rel="noopener noreferrer">
      <FaWhatsapp size={40} />
      </a>
    </div>
  );
};

export default Icons;
