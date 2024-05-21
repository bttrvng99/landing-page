import "./TrendingThumbnail.css";
import { BASE_IMG_URL } from "../../AppConsts";
import { ReactComponent as Time } from "../../assets/Vector-time.svg";
import { ReactComponent as Rating } from "../../assets/Vector-rating.svg";
import { ReactComponent as Play } from "../../assets/Vector-play-l.svg";

export default function TrendingThumbnail({ duration, rating, imgUrl }) {
  return (
    <div className="relative">
      <div className="max-h-72 w-full object-cover rounded-xl overflow-hidden justify-center flex flex-col">
        <img
          src={BASE_IMG_URL + imgUrl}
          className="object-cover w-full transition hover:scale-105 self-center"
          alt=""
        ></img>
      </div>
      <div className="absolute top-2 left-4 flex flex-row items-center gap-1">
        <Time />
        {calculateRuntime(duration)}
      </div>
      <div className="absolute top-2 right-4 flex flex-row items-center gap-1">
        <Rating />
        {rating.toFixed(1)}
      </div>
      <Play className="playButton absolute top-1/2 right-1/2 bottom-1/2 left-1/2" />
    </div>
  );
}

function calculateRuntime(duration_minutes) {
  var hours = Math.floor(duration_minutes / 60);
  var minutes = duration_minutes % 60;
  return `${hours}:${(minutes < 10 ? "0" : "")}${minutes}:00`;
}
