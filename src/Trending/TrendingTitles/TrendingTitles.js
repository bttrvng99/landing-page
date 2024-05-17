import "./TrendingTitles.css";
import TrendingGenreTag from "../TrendingGenreTag/TrendingGenreTag";
import TrendingThumbnail from "../TrendingThumbnail/TrendingThumbnail";

export default function TrendingTitles({title, genreList, duration = '', rating = '', imgUrl}) {
  return (
    <div className="flex flex-col gap-y-2">
      <TrendingThumbnail duration={duration} rating={rating} imgUrl={imgUrl}/>
      <div className="flex flex-row items-center justify-between">
        <div className="text-ellipsis overflow-hidden whitespace-nowrap font-semibold text-2xl">{title}</div>
        <div className=""><TrendingGenreTag key={1} text={"Genre"}></TrendingGenreTag></div>
      </div>
    </div>
  );
}
