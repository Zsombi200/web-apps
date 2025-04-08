import './maker.css'
import { Link } from "react-router-dom";

function Maker() {
  return (
    <div to="/asd" className="maker">
      <img
        src="/github.png"
        alt="Picture of the creator"
      />
      <p>
        Made by <a href="https://github.com/Zsombi200">me</a>
      </p>
    </div>
  );
}

export default Maker;
