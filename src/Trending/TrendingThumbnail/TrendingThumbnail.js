import "./TrendingThumbnail.css";
import { BASE_IMG_URL } from "../../AppConsts";

export default function TrendingThumbnail({duration, rating, imgUrl}) {
  return (
    <div className="relative">
      <img
        src={BASE_IMG_URL+imgUrl}
        className="h-72 object-cover w-full rounded-xl"
        alt=""
      ></img>
      <div className="absolute top-4 left-4 flex flex-row items-center gap-1">
        <img src="../../assets/Vector-time.svg" alt=""></img>
        {calculateRuntime(duration)}
      </div>
      <div className="absolute top-4 right-4 flex flex-row items-center gap-1">
        <img src="../../assets/Vector-rating.svg" alt=""></img>
        {rating.toFixed(1)}
      </div>
      <img
        className="playButton absolute top-1/2 right-1/2 bottom-1/2 left-1/2"
        alt=""
        src="../../assets/Vector-play-l.svg"
      ></img>
    </div>
  );
}

function calculateRuntime(duration_minutes) {
  var hours = Math.floor(duration_minutes / 60);
  var minutes = duration_minutes % 60;
  return hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":00";
}
