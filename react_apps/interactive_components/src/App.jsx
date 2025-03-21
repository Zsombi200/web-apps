import Carousel from "./Carousel";
import SearchBar from "./SearchBar";

import cat1 from "./assets/cat1.jpg";
import cat2 from "./assets/cat2.webp";
import cat3 from "./assets/cat3.png";
import cat4 from "./assets/cat4.png";

function App() {
  const pictures = [cat1, cat2, cat3, cat4];

  return (
    <>
      <SearchBar />
      <Carousel URLS={pictures} />
    </>
  );
}

export default App;
