import "./NavbarButton.css";

export default function NavbarButton({ text }) {
  return (
    <button className="text-white hover:border-b-1 hover:border-b-red-500">
      {text}
    </button>
  );
}
