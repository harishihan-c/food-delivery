import React from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'

const NavBar = () => {
  return (
    <div className="navbar">
        <img src={assets.logo} alt="" className="logo"/>
        <div className="navbar-menu">
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>Mobile-app</li>
                <li>Contact us</li>
            </ul>
        </div>
        <div className="navbar-right">
            <img src={assets.search_icon} alt=""/>
            <div className="cart-bucket">
                <img src={assets.basket_icon} alt="" />
                <div className="dot"></div>
            </div>
            <button>Sign In</button>
        </div>

    </div>
  )
}

export default NavBar