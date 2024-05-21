import NavbarButton from "./NavbarButton/NavbarButton";
import NavbarSearch from "./NavbarSearch/NavbarSearch";
import NavbarButtonGroup from "./NavbarButtonGroup/NavbarButtonGroup";
import "./Navbar.css";
import {ReactComponent as Notification} from '../assets/Vector-notiy.svg'

const buttonsLeft = [
  {
    key: "home",
    text: "Home",
    link: ''
  },
  {
    key: "genre",
    text: "Genre",
    link: ''
  },
  {
    key: "country",
    text: "Country",
    link: ''
  },
];

const buttonsRight = [
  {
    key: "movies",
    text: "Movies",
    link: ''
  },
  {
    key: "series",
    text: "Series",
    link: ''
  },
  {
    key: "animation",
    text: "Animation",
    link: ''
  },
];

function Navbar() {
  return (
    <div className="flex flex-row justify-center p-6 gap-6 bg-black items-center">
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
        <Notification className="hover:fill-red-600 transititon"/>
      </button>
    </div>
  );
}

export default Navbar;
