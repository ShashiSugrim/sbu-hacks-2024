import React from 'react'
import NAVBARCSS from "../css/NavBar.module.css"

const NavBar = () => {
  return (
    <>
    <div className={NAVBARCSS.navbar}>

    <button className={NAVBARCSS.navbutton}><span>Home</span></button>
        <button className={NAVBARCSS.navbutton}><span>About Us</span></button>

        <button className={NAVBARCSS.navbutton}><span>Price</span></button>
        <button className={NAVBARCSS.navbutton}><span>Contact</span></button>

    </div>

    </>

  )
}

export default NavBar
