import { Link } from "react-router-dom";
import "./NavbarButton.css";

export default function NavbarButton({ text, isHome, link }) {
  return (
    <Link to={link} className="text-white hover:text-primary relative transition">
      {text}
      {/* {isHome ? <span className="absolute bottom-0 text-primary right-0 left-0 text-5xl">.</span> : <span></span>} */}
    </Link>
  );
}
