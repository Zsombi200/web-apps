import { useEffect, useRef, useState } from "react";

function SearchBar() {
  const [text, setText] = useState("");

  useEffect(() => {}, [text]);

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button>Search</button>
    </>
  );
}

export default SearchBar;
