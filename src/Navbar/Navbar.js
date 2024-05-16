import NavbarButton from "./NavbarButton/NavbarButton";
import NavbarSearch from "./NavbarSearch/NavbarSearch";
import NavbarButtonGroup from "./NavbarButtonGroup/NavbarButtonGroup";
import "./Navbar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const buttonsLeft = [
  {
    key: "home",
    text: "Home",
  },
  {
    key: "genre",
    text: "Genre",
  },
  {
    key: "country",
    text: "Country",
  },
];

const buttonsRight = [
  {
    key: "movies",
    text: "Movies",
  },
  {
    key: "series",
    text: "Series",
  },
  {
    key: "animation",
    text: "Animation",
  },
];

function Navbar() {
  return (
    <div className="flex flex-row justify-center p-6 gap-6 bg-black">
      {/* {buttonsLeft.map((button) => {
        return (
          <NavbarButton text={button.text} key={button.key}></NavbarButton>
        );
      })} */}
      <NavbarButtonGroup group={buttonsLeft} key={1}></NavbarButtonGroup>
      <NavbarSearch></NavbarSearch>
      {/* {buttonsRight.map((button) => {
        return (
          <NavbarButton text={button.text} key={button.key}></NavbarButton>
        );
      })} */}
      <NavbarButtonGroup group={buttonsRight} key={2}></NavbarButtonGroup>
      <NavbarButton text={"Login/SignUp"} key={7}></NavbarButton>
      <button>
        <img alt="" src="../../assets/Vector-notiy.svg"></img>
      </button>
    </div>
  );
}

export default Navbar;
