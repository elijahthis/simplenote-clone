import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/main.css";
import Landing from "./components/Landing";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Contact from "./components/Contact";

class App extends Component {
  constructor() {
    super();
    this.state = {
      theme: parseInt(localStorage.getItem("theme") ?? 0),
    };
  }

  changeTheme = () => {
    this.setState({ theme: (this.state.theme + 1) % 2 });
    localStorage.setItem("theme", (this.state.theme + 1) % 2);
  };

  render() {
    console.log(localStorage);
    return (
      <div className={`App ${this.state.theme ? "light" : "dark"}`}>
        <main>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <Landing
                    theme={this.state.theme}
                    changeTheme={this.changeTheme}
                  />
                }
              />
              <Route
                path="/signup"
                element={<Signup theme={this.state.theme} />}
              />
              <Route
                path="/login"
                element={<Login theme={this.state.theme} />}
              />
              <Route
                path="/contact-us"
                element={<Contact theme={this.state.theme} />}
              />
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    );
  }
}

export default App;
