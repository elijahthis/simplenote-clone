import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/main.css";
import "../css/Signup.css";
import logo from "../images/logo.png";

const Signup = () => {
  useEffect(() => {
    document.title = "Create a Simplenote Account";
  });
  return (
    <section style={{ paddingTop: "90px" }} className="signup-sect">
      <div>
        <img src={logo} alt="logo" />
        <h2>Sign up</h2>
        <form>
          <input type="email" placeholder="Email" />
          <input type="submit" value="Sign up" />
        </form>
        <p className="by-creating">By creating an account you agree to our</p>
        <Link to="">Terms of Service</Link>.
      </div>
    </section>
  );
};

export default Signup;
