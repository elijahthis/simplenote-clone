import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../css/main.css";

const Contact = () => {
  return (
    <>
      <NavBar />
      <section className="contact">
        <h1>Contact Us</h1>
        <p>
          Need help with Simplenote? Check out our <Link to="/help">Help</Link>{" "}
          page for frequently asked questions. If you can’t find an answer
          there, email us at <Link to="">emperorelijah007@gmail.com</Link> and
          one of our Happiness Engineers will be in touch.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
