import Search from "./search/Search";
import Maker from "./maker/Maker";
import './topBar.css'

function TopBar() {
  return (
    <div className="top-bar">
      <div style={{width: "130px"}}></div>
      <Search />
      <Maker />
    </div>
  );
}

export default TopBar;
