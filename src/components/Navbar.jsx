import React from 'react'
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to='main' className='logo'>
        <img src='{}'alt='logo'/>
        </Link>
        <input className='menu-btn' type='checkbox'id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>

        <ul className='menu'>
        <li><Link to ='main'className='active'>Home</Link></li>
        <li><Link to ='features'className='active'>Features</Link></li>
        <li><Link to ='services'className='active'>Services</Link></li>
        <li><Link to ='subscribe'className='active'>Subscribe</Link></li>
        <li><Link to ='#'className='active'>Contact</Link></li>

        </ul>
        <Link to ='#' className='hey'>App</Link>
      </nav>
    </div>
  )
}

export default Navbar
