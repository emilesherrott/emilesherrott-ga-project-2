import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import linkedIn from '../styles/assets/social-media/linkedIn.png'
import gitHub from '../styles/assets/social-media/github.png'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <span onClick={handleMenuToggle} className={`navbar-burger ${isOpen ? 'is-active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
            <div className="navbar-start">
              <Link to='/' className="navbar-item">
                Home
              </Link>
              <Link to='/forecast' className="navbar-item">
                Forecast
              </Link>
              <Link to='/history' className="navbar-item">
                History
              </Link>
            </div>
            <div className="navbar-end">
              <span className="navbar-item created-by">
                Created by Emile Sherrott &#47; Ole Nascimento
              </span>
              <a href='https://www.linkedin.com/in/emilesherrott/' className="navbar-item" target="_blank" rel="noreferrer">
                <img src={linkedIn} alt={'LinkedIn'} className="social-media" />
              </a>
              <a href='https://github.com/emilesherrott/' className="navbar-item" target="_blank" rel="noreferrer">
                <img src={gitHub} alt={'GitHub'} className="social-media" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar