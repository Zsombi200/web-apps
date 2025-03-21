import { useState } from "react";

function Carousel({
  URLS,
  width = "500px",
  height = "300px",
  description = "Couldnt been loaded",
}) {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        id="left"
        onClick={() => {
          count === 0 ? setCount(URLS.length - 1) : setCount(count - 1);
        }}>
        ⬅
      </button>
      <img
        src={URLS[count]}
        alt={description}
        width={width}
        height={height}
      />
      <button
        id="right"
        onClick={() => {
          count === URLS.length - 1 ? setCount(0) : setCount(count + 1);
        }}>
        ⮕
      </button>
    </>
  );
}

export default Carousel;
