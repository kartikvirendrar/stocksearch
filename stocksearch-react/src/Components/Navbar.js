import React from 'react'
import { Link } from 'react-scroll';
import "./Navbar.css"
import logo from "./Assets/logoNew.png";
export default function Navbar() {
  return (
      //<div className="overlay"></div>
    <>
    <div>
      <nav className="navbar" id="home">
        <div className="logos">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <ul className="nav-link">
            <li className="nav-item">
              
                <button className="nav-linkers link--btns" id="home--link"> <Link to="home" className="navLink" smooth={true}
                duration={500}
                spy={true}
                exact="true"
                 >Home</Link></button>
              
          </li>
          <li className="nav-item">
          
            <button className="nav-linkers link--btns" id="stocks--link" to="stocks"><Link to="stocks" smooth={true}
                duration={500}
                spy={true}
                exact="true"
                className="navLink">
              Stocks</Link>
            </button>
          </li>
          <li className="nav-item">
            {/* <a href="#" className="nav-linkers">About Us</a>  */}
            <button className="nav-linkers link--btns" id="about--link"><Link to="about" smooth={true}
                duration={500}
                spy={true}
                exact="true"
               className="navLink">
              About Us</Link>
            </button>
          </li>
          <li className="nav-item">
            
            <button className="nav-linkers link--btns" id="contact--link"><Link to="footer" smooth={true}
                duration={500}
                spy={true}
                exact="true"
                 className="navLink">
              Contact Us</Link>
            </button>
          </li>
          <li>
            <button className="btn--login" data-visible="true">
              Log in | Sign up
            </button>
          </li>
        </ul>
      </nav>
      </div>
      </>
    );
}