import React from "react";
import { Link } from "react-router-dom";
import landingImage from "../images/landing-image.png";
import featureImg1 from "../images/ic_cloud-sync.webp";
import featureImg2 from "../images/ic_tags.webp";
import featureImg3 from "../images/ic_collaborate.webp";
import featureImg4 from "../images/ic_history.webp";
import featureImg5 from "../images/ic_notes.webp";
import featureImg6 from "../images/ic_info.webp";
import storeImg1 from "../images/ic-app-store-mac.png";
import storeImg2 from "../images/ic-app-store-mac.png";
import storeImg3 from "../images/ic-play-store.png";
import storeImg4 from "../images/ic-windows.png";
import storeImg5 from "../images/ic-linux.png";
import "../css/main.css";
import "../css/Landing.css";

const Landing = () => {
  const features = [
    {
      title: "Use it everywhere",
      desc: "Notes stay updated across all your devices, automatically and in real time. There’s no “sync” button: It just works.",
      img: featureImg1,
    },
    {
      title: "Stay organized",
      desc: "Add tags to find notes quickly with instant searching.",
      img: featureImg2,
    },
    {
      title: "Work together",
      desc: "Share a to-do list, post some instructions, or publish your notes online.",
      img: featureImg3,
    },
    {
      title: "Go back in time",
      desc: "Notes are backed up with every change, so you can see what you noted last week or last month.",
      img: featureImg4,
    },
    {
      title: "Markdown support",
      desc: "Write, preview, and publish your notes in Markdown format.",
      img: featureImg5,
    },
    {
      title: "It’s free",
      desc: "Apps, backups, syncing, sharing – it’s all completely free.",
      img: featureImg6,
    },
  ];
  const quotes = [
    {
      name: "TechCrunch",
      quote: "If you’re not using Simplenote, you’re missing out.",
    },
    {
      name: "MacWorld",
      quote:
        "If you’re looking for a cross-platform note-taking tool with just enough frills, it’s hard to look beyond Simplenote.",
    },
    {
      name: "Zapier",
      quote:
        "If you want a truly distraction-free environment then you can’t do better than Simplenote for your note-taking needs.",
    },
  ];
  const stores = [
    [storeImg1, "Download on the", "App Store"],
    [storeImg2, "Download on the", "Mac App Store"],
    [storeImg3, "Download on the", "Play Store"],
    [storeImg4, "Download on the", "Windows Store"],
    [storeImg5, "Download for", "Linux"],
  ];
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
    <main>
      <section className="main-block">
        <h1>The simplest way to keep notes</h1>
        <p>
          All your notes, synced on all your devices. Get Simplenote now for
          iOS, Android, Mac, Windows, Linux, or in your browser.
        </p>
        <Link to="" className="lnk-btn">
          Sign up now
        </Link>
      </section>
      <div className="big-img-wrapper">
        <img src={landingImage} />
      </div>
      <section>
        <h2>Comprehensive underneath, simple on the surface</h2>
        <div className="features">
          {features.map((feature) => (
            <div className="feature-div">
              <div className="feature-head">
                <img src={feature.img} />
                <h5>{feature.title}</h5>
              </div>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <hr />
      <section>
        <h2>What people are saying</h2>
        <div className="quotes">
          {quotes.map((block) => (
            <div className="quote-div">
              <blockquote>
                <p>{block.quote}</p>
                <cite>{block.name}</cite>
              </blockquote>
            </div>
          ))}
        </div>
      </section>
      <hr />
      <section className="stores-section">
        <h2>Available on all your devices</h2>
        <p className="stores-desc">
          Download Simplenote for any device and stay in sync – all the time,
          everywhere.
        </p>
        <div className="stores">
          {stores.map((store) => (
            <div className="btn-link">
              <Link to="">
                <div className="btn-store">
                  <img src={store[0]} />
                  <div>
                    <span>{store[1]}</span>
                    <p>{store[2]}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <p>
          <Link to="" style={{ color: "rgb(97, 141, 242)" }}>
            Other Downloads
          </Link>
        </p>
      </section>
      <footer>
        <div>
          {footerLinks.map((item) => (
            <Link to="">{item}</Link>
          ))}
        </div>
        <Link to="">&copy; Automatic</Link>
      </footer>
    </main>
  );
};

export default Landing;
