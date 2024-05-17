import "./UpdatedButton.css";
import {ReactComponent as Arrow} from "../../assets/group-5-right-arrow.svg"

function UpdatedButton() {
  return (
    <button className="flex flex-col items-center justify-center button-more rounded-full bg-neutral-300 hover:bg-neutral-200 active:bg-neutral-400 absolute top-1/2 right-2 bottom-1/2">
      <Arrow />
    </button>
  );
}

export default UpdatedButton;
