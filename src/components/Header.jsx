import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <nav id='nav_container'>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
      </nav>
    </div>
  )
}

export default Header
