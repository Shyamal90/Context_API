import React,{ useContext } from 'react'
import { Link } from 'react-router-dom'
import { Cart } from '../Context';

function Header() {
  const {cart,setCart} = useContext(Cart);
  return (
    <div>
      <nav id='nav_container'>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart({cart.length})</Link>
      </nav>
    </div>
  )
}

export default Header
