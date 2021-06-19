import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <>
      <nav className="navbar">
        <div className="navbar-start">
          <Link to='/' className="navbar-item">
            Home
          </Link>
          <Link to='/forecast' className="navbar-item">
            Forecast
          </Link>
        </div>
        <div className="navbar-end">
          <Link to='/' className="navbar-item">
            Sign In
          </Link>
          <Link to='/forecast' className="navbar-item">
            Register
          </Link>
        </div>
      </nav>
    </>
  )
}

export default NavBar