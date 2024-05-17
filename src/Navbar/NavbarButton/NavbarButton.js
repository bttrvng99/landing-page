import "./NavbarButton.css";

export default function NavbarButton({ text, isHome }) {
  return (
    <button className="text-white hover:border-b-1 hover:border-b-red-500 relative">
      {text}
      {isHome ? <span className="absolute bottom-0 text-red-600 right-0 left-0 text-5xl">.</span> : <span></span>}
    </button>
  );
}
