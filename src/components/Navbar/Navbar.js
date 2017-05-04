import React from 'react'
import '../../assets/styles/App.css';
import {Link} from 'react-router'

const Navbar = () => {
  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link className="navbar-brand" to="/">SkillsUpgrader</Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="about">About</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;