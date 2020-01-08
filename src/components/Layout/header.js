import PropTypes from "prop-types"
import React from "react"

// importing components
import NavBar from "./NavBar"

const Header = ({ siteTitle }) => (
  <header>
    <NavBar title={siteTitle} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
