import React, { useEffect, useState } from "react";
import { Picker } from "./Picker";
import { state } from "./State";
import "../styles/menu.css";

const Menu = () => {
  const [click, setClick] = useState(false);
  const [currentNum, setCurrentNum] = useState(0);
  const [proxy, setProxy] = useState("");

  useEffect(() => {
    console.log(currentNum)
    if(currentNum === -1){
      return setCurrentNum(1);
    }
    if(currentNum !== 0){
      ChangeCurrentState();
    }
  },[currentNum])

  useEffect(() => {
    console.log(state.current)
  },[proxy])

  const PlusNowState = () => {
    console.log(state.num[state.current] + 1)
    setCurrentNum(state.num[state.current] + 1);
  }

  const MinusNowState = () => {
    console.log(state.num[state.current] - 1)
    setCurrentNum(state.num[state.current] - 1);   
  }

  const ChangeCurrentState = () => {
    Object.keys(state.num).filter((key,index) => index + 1 === currentNum)
    .map((key) => {
      setProxy(key)
      return state.current = key;
    })
  }

  const handleClick = () => setClick(prev => !prev);

  return(
    <div className={!click ? "tray size": "tray"}>
      <div className="tray-header flx">
        <button className={click ? "down flx": "up flx"} onClick={handleClick}/>
        <div className="flx nav">
          <button className="flx left" onClick={MinusNowState}/>
          <div className="flx tDiv">
            <div className="title">
              <span className="fnt">{state.current}</span>
              <span className="num">{state.num[state.current]}/13</span>
            </div>
          </div>
          <button className="flx right" onClick={PlusNowState}/>
        </div>

      </div>
      <div className="tray-body flx">
        <Picker />
      </div>
    </div>
  )
}


export default Menu;