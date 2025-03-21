import { useEffect, useRef, useState } from "react";

function SearchBar() {
  const [text, setText] = useState("");
  const [foundWords, setFoundWords] = useState([]);

  useEffect(() => {
    const searchHistory = ["word", "search", "waste"];
    const searchHistoryString = searchHistory.join(",");
    setFoundWords([]);

    searchHistory.map((element) => {
      const foundIndex = searchHistoryString.indexOf(text);
      foundIndex === -1
        ? console.log("didnt find")
        : setFoundWords(
            setFoundWords(
              foundWords +
                searchHistoryString[
                  (foundIndex, searchHistoryString.indexOf(","))
                ]
            )
          );
    });
    console.log(foundWords);
  }, [text]);

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
