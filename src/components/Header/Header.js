import React from 'react'

const Header = props => {
  return (
    <header className="mdl-layout__header mdl-layout__header--scroll mdl-color--primary">
      <div className="mdl-layout--large-screen-only mdl-layout__header-row">
        <h3>Skills Upgrader</h3>
      </div>
      <div className="mdl-layout--large-screen-only mdl-layout__header-row">
      </div>
      <div className="mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark">
        <a href="#overview" className="mdl-layout__tab is-active">Overview</a>
        <a href="#features" className="mdl-layout__tab">Popular Courses</a>
      </div>
    </header>
  )
}

export default Header