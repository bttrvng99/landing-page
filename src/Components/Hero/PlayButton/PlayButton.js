import "./PlayButton.css";
import { ReactComponent as Play } from "../../../assets/Vector-play.svg";
import { ReactComponent as Later } from "../../../assets/Vector-later.svg";
import { Link } from "react-router-dom";

function PlayButton({ id }) {
  return (
    <div className="playButton flex flex-col md:flex-row gap-11 absolute top-1/2 left-1/2 text-center items-center m-auto">
      <Link
        to={`/movie/${id}`}
        className="transition flex flex-row gap-2 items-center bg-primary border-0 rounded-md p-5 text-2xl font-bold hover:bg-primaryHover active:bg-primaryActive whitespace-nowrap"
      >
        Watch now
        <Play />
      </Link>
      <Link
        to={`/movie/${id}`}
        className="transition flex flex-row gap-2 items-center bg-none border-primary border-2 rounded-md p-5  text-2xl font-bold hover:border-primaryHover active:border-primaryActive whitespace-nowrap"
      >
        Watch later
        <Later className="transition hover:fill-primary" />
      </Link>
    </div>
  );
}

export default PlayButton;
