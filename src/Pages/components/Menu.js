import React from "react";
import "../../styles/menu.css";

const Menu = () => {

  return(
    <div className="tray">
      <div className="tray-header flx">
        <button className="up flx"/>
        <div className="flx nav">
          <button className="flx left"/>
          <div className="flx tDiv">
            <div className="title">
              <span className="fnt">Tongue</span>
              <span className="num">1/13</span>
            </div>
          </div>
          <button className="flx right"/>
        </div>
        <button className="menuBtn">
          <img className="menuImg" alt="menu" src={require('../../images/menu.png')}/>
          <span className="menuFnt">Menu</span>
        </button>
      </div>
      <div className="tray-body flx"></div>
    </div>
  )
}

export default Menu;