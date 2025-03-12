import { useState } from "react";

function Card({ content }) {
  const [toggleCheck, setToggleCheck] = useState(false);

  function handelDoneClick() {
    setToggleCheck(!toggleCheck);
  }

  return (
    <div className="card" onClick={handelDoneClick}>
      <p>{toggleCheck ? <del>{content + " ✅"}</del> : content}</p>
    </div>
  );
}

export default Card;
