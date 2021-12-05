import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/main.css";
import "../css/Signup.css";
import logo from "../images/logo.png";

const Login = () => {
  useEffect(() => {
    document.title = "Log in to Simplenote";
  });
  return (
    <section style={{ paddingTop: "90px" }} className="signup-sect">
      <div>
        <img src={logo} alt="logo" />
        <h2>Log in</h2>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="submit" value="Log in" />
        </form>
        <label className="remember">
          <input type="checkbox" name="remember" value="" />
          Remember Me
        </label>
        <div className="forgot">
          <Link to="">Forgot your Password?</Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
