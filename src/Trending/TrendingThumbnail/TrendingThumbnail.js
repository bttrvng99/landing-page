import "./TrendingThumbnail.css";

export default function TrendingThumbnail() {
  return (
    <div className="relative">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Flower_poster_2.jpg"
        className="h-72 object-cover w-full rounded-xl"
        alt=""
      ></img>
      <div className="absolute top-4 left-4">1:00:00</div>
      <div className="absolute top-4 right-4">5.0</div>
    </div>
  );
}
