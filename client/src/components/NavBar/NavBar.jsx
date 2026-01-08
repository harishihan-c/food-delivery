import React, { useState } from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'

const NavBar = () => {

    const [menu, setMenu] = useState("home");


  return (
    <div className="navbar">
        <img src={assets.logo} alt="" className="logo"/>
        <div className="navbar-menu">
            <ul>
                <li onClick={() => setMenu("home")} className={menu === "home"? "active" : ""}>Home</li>
                <li onClick={() => setMenu("menu")} className={menu === "menu"? "active" : ""}>Menu</li>
                <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app"? "active" : ""}>Mobile-app</li>
                <li onClick={() => setMenu("contact")} className={menu === "contact"? "active" : ""}>Contact us</li>
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