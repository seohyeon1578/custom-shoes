import React, { useState } from "react";
import { Picker } from "./Picker";
import "../styles/menu.css";

const Menu = ({value, setValue}) => {
  const [click, setClick] = useState(0);
  const [nowNum, setNowNum] = useState(1);

  const changeNowState = () => {
    console.log()
  }

  const handleClick = () => setClick(prev => !prev);

  return(
    <div className={!click ? "tray size": "tray"}>
      <div className="tray-header flx">
        <button className={click ? "down flx": "up flx"} onClick={handleClick}/>
        <div className="flx nav">
          <button className="flx left" onClick={changeNowState}/>
          <div className="flx tDiv">
            <div className="title">
              <span className="fnt">{value}</span>
              <span className="num">{nowNum}/13</span>
            </div>
          </div>
          <button className="flx right" onClick={changeNowState}/>
        </div>
        <button className="menuBtn">
          <img className="menuImg" alt="menu" src={require('../images/menu.png')}/>
          <span className="menuFnt">Menu</span>
        </button>
      </div>
      <div className="tray-body flx">
        <Picker />
      </div>
    </div>
  )
}


export default Menu;