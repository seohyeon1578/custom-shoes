import React, { useEffect, useState } from "react";
import { BasicPicker } from "./picker/BasicPicker";
import { state } from "../../store/State";
import "../../assets/styles/menu.css";
import { AllPicker } from "./picker/AllPicker";

const Menu = () => {
  const [isPicker, setIsPicker] = useState(true);
  const [click, setClick] = useState(false);
  const [currentNum, setCurrentNum] = useState(0);
  const [proxy, setProxy] = useState("");

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
  
  useEffect(() => {
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
        <div className="picker-menu">
          <button onClick={() => setIsPicker(true)}>BASIC</button>
          <span style={{margin: '0 10px'}}>/</span>
          <button onClick={() => setIsPicker(false)}>ALL</button>
        </div>
      </div>
      <div className="tray-body flx">
        {isPicker ? <BasicPicker /> : <AllPicker />}
      </div>
    </div>
  )
}


export default Menu;