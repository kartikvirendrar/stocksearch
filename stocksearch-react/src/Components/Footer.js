import React from "react";
import logo from "./Assets/logo.png";
import instalogo from "./Assets/instagram.png"
import fblogo from "./Assets/facebook.png"
import twitterlogo from "./Assets/twitter.png"
import { Link } from "react-scroll";
import "./Footer.css";

export default function Footer() {
  return (
    <section className="section--footer-1" id="footer">
      <div className="footer-div--h1">
        <div className="footer-div">
          <div className="logo-name-div-1">
            <h1 className="footer-txt-1">Site Links</h1>
            <h2 className="footer-txt-2 lenk">
              <Link to="home" style={{cursor: "pointer"}}> Home Page</Link>
            </h2>
            <h2 className="footer-txt-2 lenk">
            <Link to="stocks" style={{cursor: "pointer"}}> Stocks</Link>
            </h2>
            <h2 className="footer-txt-2 lenk">
            <Link to="about" style={{cursor: "pointer"}}> About Us</Link>
            </h2>
            <h2 className="footer-txt-2 lenk">
            <Link to="footer" style={{cursor: "pointer"}}> Contact Us </Link>
            </h2>
          </div>
          <div className="logo-name-div">
            <img src={logo} alt="" className="res-logo" />
            <h1 className="footer-txt-3">Stock &nbsp; Search.</h1>
          </div>
        </div>
        <h1>Social media links...</h1>

        <div className="footer-2-div">
          <a href="https://www.instagram.com/">
            <img src={instalogo} alt="" className="res-logo-3" />
          </a>
          <a href="https://www.facebook.com/">
            <img src={fblogo} alt="" className="res-logo-3" />
          </a>
          <a href="https://www.twitter.com/">
            <img src={twitterlogo} alt="" className="res-logo-3" />
          </a>
        </div>
      </div>
      <h1 className="copyright--text">
        Copyright © 2022 Stock Search. , Inc. All rights reserved. By using this
        site you agree to the Subscriber Agreement & Terms of Use, Privacy
        Notice, and Cookie Notice.
      </h1>
    </section>
  );
}
