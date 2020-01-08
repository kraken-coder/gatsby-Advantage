import React, { Fragment } from "react"
import { Link } from "gatsby"

const NavBar = ({ title }) => {
  return (
    <Fragment>
      <nav className="nav navbar navbar-expand-sm bg-secondary navbar-dark text-white">
        <div className="container">
          <Link to="/">
            <h3 className="navbar-brand">{title}</h3>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                {" "}
                <Link to="/">
                  <span className="nav-link">Home</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/about">
                  <span className="nav-link">About</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services">
                  <span className="nav-link">Service</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">
                  <span className="nav-link">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default NavBar
