import DurationLabel from "./DurationLabel/DurationLabel";
import "./FilmThumbnail.css";
import { baseIMGUrl } from "../AppConsts";

export default function FilmThumbnail({
  title = "Title gggg",
  duration = "1:00:00",
  season = 1,
  imageUrl = "https://upload.wikimedia.org/wikipedia/commons/a/a5/Flower_poster_2.jpg",
  type
}) {
  return (
    <div className="flex flex-col gap-y-4">
      <img
        className="object-cover poster rounded-xl"
        src={baseIMGUrl+imageUrl}
        alt={title}
      ></img>
      <div className="flex flex-row items-center justify-between">
        <div className="font-bold text-2xl text-ellipsis overflow-hidden whitespace-nowrap">{title}</div>
        <DurationLabel type={type} season={season}/>
      </div>
    </div>
  );
}
