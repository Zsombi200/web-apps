import { useRef } from "react";
import "./Calculator.css";

function Calculator() {
  const screenRef = useRef(null);

  function handleClick(event) {
    let charachter = event.target.value;
    let screenElement = screenRef.current;

    if (event.target.tagName === "BUTTON") {
      switch (charachter) {
        case "reset":
          screenElement.value = "";
          break;
        case "back":
          screenElement.value = screenElement.value.slice(0, -1);
          break;
        case "equal":
          screenElement.value = eval(screenElement.value);
          break;
        default:
          screenElement.value += charachter;
      }
    }
  }
  return (
    <div>
      <div id="display">
        <input
          id="screen"
          ref={screenRef}
        />
      </div>
      <div
        className="buttons"
        onClick={handleClick}>
        <button value="reset">C</button>
        <button value="back">←</button>
        <button value="/">÷</button>
        <button value="*">X</button>

        <button value={7}>7</button>
        <button value={8}>8</button>
        <button value={9}>9</button>
        <button value="+">+</button>

        <button value={4}>4</button>
        <button value={5}>5</button>
        <button value={6}>6</button>
        <button value="-">-</button>

        <button value={1}>1</button>
        <button value={2}>2</button>
        <button value={3}>3</button>

        <button
          id="zero"
          value={0}>
          0
        </button>
        <button value=",">,</button>
        <button
          id="equal"
          value="equal">
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
