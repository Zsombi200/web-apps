import { useEffect, useRef, useState } from "react";
import "./search.css";

function SearchBar() {
  const [text, setText] = useState("");
  const [foundWords, setFoundWords] = useState([]);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    const searchHistory = ["word", "search", "waste"];
    let goodWords = [];

    searchHistory.map((element) => {
      element.indexOf(text) === -1 ? null : goodWords.push(element);
    });
    setFoundWords(goodWords);
    console.log(foundWords);
    console.log(goodWords);
  }, [text]);

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
        onFocus={() => setFocus(!focus)}
        onBlur={() => setFocus(!focus)}
      />
      <button>Search</button>
      <ul className={`dropdown ${focus ? "show" : "hide"}`}>
        {foundWords.length >= 1
          ? foundWords.map((element, index) => <li key={index} className="dropdown-content">{element}</li>)
          : <li className="dropdown-content">Nothing matches</li>}
      </ul>
    </>
  );
}

export default SearchBar;
