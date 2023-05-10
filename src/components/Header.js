import React from 'react'

function Header() {
  return (
    <nav className='nav'>
      <a href='/' className='site-title'>Tech-Quick</a>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/contact'>Contact Us</a></li>
      </ul>
    </nav>
  )
}

export default Header