import "./TrendingThumbnail.css";

export default function TrendingThumbnail() {
  return (
    <div className="relative">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Flower_poster_2.jpg"
        className="h-72 object-cover w-full rounded-xl"
        alt=""
      ></img>
      <div className="absolute top-4 left-4 flex flex-row items-center gap-1">
        <img src="../../assets/Vector-time.svg" alt=""></img>
        1:00:00
      </div>
      <div className="absolute top-4 right-4 flex flex-row items-center gap-1">
        <img src="../../assets/Vector-rating.svg" alt=""></img>
        5.0
      </div>
      <img
        className="playButton absolute top-1/2 right-1/2 bottom-1/2 left-1/2"
        alt=""
        src="../../assets/Vector-play-l.svg"
      ></img>
    </div>
  );
}
