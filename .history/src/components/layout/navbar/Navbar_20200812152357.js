/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import music from "./music.jpg";
import "../../../App.css";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, {});
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="nav-wrapper colour">
            <a
              href="#home"
              data-target="slide-out"
              className="sidenav-trigger show-on-large"
            >
              <i className="material-icons">menu</i>
            </a>
          </div>
        </nav>

        <ul id="slide-out" className="sidenav sidenav-close">
          <li>
            <div className="user-view">
              <div className="background">
                <img className="background_img" src={music} alt="img" />
              </div>
              <br />
              <br />
              <br />
            </div>
            {/* Change font so that the name can be better read */}
          </li>
          <Link to="/portfolio-v3">
            <br />
            <li className="colour_of_nav changes_colour">Home</li>
          </Link>{" "}
          <br />
          <Link to="/skills">
            <li className="colour_of_nav changes_colour">Skills</li>
          </Link>
          <br />
          <Link to="/mywork">
            <li className="colour_of_nav changes_colour">Work</li>
          </Link>
          <br />
          <Link to="/testimonials">
            <li className="colour_of_nav changes_colour">Testimonials</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Navbar;
