import "./NavbarButtonGroup.css";
import NavbarButton from "../NavbarButton/NavbarButton";

export default function NavbarButtonGroup({ group }) {
  return (
    <div className="flex gap-4 items-center">
      {group.map((button) => {
        return (
          <NavbarButton link={button.link} text={button.text} key={button.key} isHome={button.isHome}></NavbarButton>
        );
      })}
    </div>
  );
}
