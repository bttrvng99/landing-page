import "./NavbarButtonGroup.css";
import NavbarButton from "../NavbarButton/NavbarButton";

export default function NavbarButtonGroup({ group }) {
  return (
    <div className="flex gap-4">
      {group.map((button) => {
        return (
          <NavbarButton text={button.text} key={button.key}></NavbarButton>
        );
      })}
    </div>
  );
}
