import "./PlayButton.css";
import { ReactComponent as Play } from "../../../assets/Vector-play.svg";
import { ReactComponent as Later } from "../../../assets/Vector-later.svg";
import { Link } from "react-router-dom";

function PlayButton({ id }) {
  return (
    <div className="playButton flex flex-col md:flex-row gap-11 absolute top-1/2 left-1/2 text-center items-center m-auto">
      <Link
        to={`/movie/${id}`}
        className="transition flex flex-row gap-2 items-center bg-red-600 border-0 rounded-md p-5 text-2xl font-bold hover:bg-red-500 active:bg-red-700 whitespace-nowrap"
      >
        Watch now
        <Play />
      </Link>
      <Link
        to={`/movie/${id}`}
        className="transition flex flex-row gap-2 items-center bg-none border-red-600 border-2 rounded-md p-5  text-2xl font-bold hover:border-red-500 active:border-red-700 whitespace-nowrap"
      >
        Watch later
        <Later className="transition hover:fill-red-600" />
      </Link>
    </div>
  );
}

export default PlayButton;
