import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/main.css";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
