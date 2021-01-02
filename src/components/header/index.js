import React from 'react'
import logo from "../../assets/logo.png"
import "./style.scss"
function Header() {
    return (
      <header data-test="headerComponent" className="">
          <div className="wraper ">
              <div className="logo">
                  <img data-test="logoIMG"  className="logoIMG" src={logo} alt=""/>
              </div>
          </div>
      </header>
    )
}

export default Header
