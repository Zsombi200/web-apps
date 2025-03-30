import "./search.css";
import { useState, useEffect } from "react";

function Search() {
  const [text, setText] = useState("");
  const [foundWords, setFoundWords] = useState([]);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    const searchHistory = [
      "word",
      "search",
      "waste",
      "apple",
      "banana",
      "cherry",
      "date",
      "elderberry",
      "fig",
      "grape",
      "honeydew",
      "kiwi",
      "lemon",
      "mango",
      "nectarine",
      "orange",
      "papaya",
      "quince",
      "raspberry",
      "strawberry",
    ];
    let goodWords = [];

    searchHistory.map((element) => {
      element.indexOf(text) === -1 ? null : goodWords.push(element);
    });
    setFoundWords(goodWords);
  }, [text]);

  return (
    <div className="search">
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
        {foundWords.length >= 1 ? (
          foundWords.map((element, index) =>
            index <= 5 ? (
              <li
                key={index}
                className="dropdown-content">
                {element}
              </li>
            ) : null
          )
        ) : (
          <li className="dropdown-content">No matches found</li>
        )}
      </ul>
    </div>
  );
}

export default Search;
