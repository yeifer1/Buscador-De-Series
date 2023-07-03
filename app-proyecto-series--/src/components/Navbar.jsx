import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light' style={{ backgroundColor: 'rgb(0.25turn, #3f87a6, #ebf8e1, #f69d3c)' }}>
      <div className='container'>
        <img className='logo-series-pro' src='02logo-series-pro.png' alt='logo' />
        <NavLink className='navbar-brand' to='/'>Series-Pro</NavLink>

        <button className='navbar-toggler' type='button' onClick={toggleMenu}>
          <span className='navbar-toggler-icon' />
        </button>

        <div className={`collapse navbar-collapse${isMenuOpen ? ' show' : ''}`}>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' exact to='/' activeClassName='active'>Series</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/about' activeClassName='active'>Acerca de</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
