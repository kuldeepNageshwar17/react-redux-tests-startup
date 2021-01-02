import React from 'react'
import logo from "../../assets/logo.png"
import "./style.scss"
function Header() {
    return (
      <header>
          <div className="wraper">
              <div className="logo">
                  <img src={logo} alt=""/>
              </div>
          </div>
      </header>
    )
}

export default Header
