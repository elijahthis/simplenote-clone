import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    "Contact Us",
    "Help",
    "Blog",
    "Developers",
    "Terms & Conditions",
    "Privacy",
    "Press",
    "Privacy Notice",
  ];
  return (
    <footer>
      <div>
        {footerLinks.map((item) => (
          <Link to="">{item}</Link>
        ))}
      </div>
      <Link to="">&copy; Automatic</Link>
    </footer>
  );
};

export default Footer;
