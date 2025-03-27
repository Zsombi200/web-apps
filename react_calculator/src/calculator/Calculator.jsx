import React, { useState } from "react";
import { useContext, createContext } from "react";
import "./Calculator.css";

const clickContext = createContext()

function Calculator() {

  function handleClick(event){
    let charachter = event.value
    if (typeof charachter === "string") {
      handleSymbol(charachter);
    } else {
      
    }
  }

  function handleSymbol(charachter){

  }

  return (
    <div>
      <div id="display">
        <input id="screen" />
      </div>
      <div className="buttons">
        <button value={reset}>C</button>
        <button value={back}>←</button>
        <button value={divide}>÷</button>
        <button value={multiply}>*</button>

        <button value={7}>7</button>
        <button value={8}>8</button>
        <button value={9}>9</button>
        <button value={plus}>+</button>

        <button value={4}>4</button>
        <button value={5}>5</button>
        <button value={6}>6</button>
        <button value={minus}>-</button>

        <button value={1}>1</button>
        <button value={2}>2</button>
        <button value={3}>3</button>

        <button id="zero" value={0}>0</button>
        <button value={comma}>,</button>
        <button id="equal" value={equal}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
