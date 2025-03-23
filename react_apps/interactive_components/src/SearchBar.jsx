import { useEffect, useRef, useState } from "react";

function SearchBar() {
  const [text, setText] = useState("");
  const [foundWords, setFoundWords] = useState([]);
  const [show, setShow] = useState(false)

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
        onFocus={setShow(!show)}
        onBlur={setShow(!show)}
      />
      <button>Search</button>
      <ul className={`dropdown ${show? "show" : "hide"}`}>
        {foundWords.length === 5
          ? foundWords.map((element, index) => {
              <li key={index}>{element}</li>;
            })
          : null}
      </ul>
    </>
  );
}

export default SearchBar;
