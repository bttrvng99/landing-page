import "./Hero.css";
import "../assets/fd1132de32fcc36eb79ecf8eb0d99c64.jpg";
import MovieInfo from "./MovieInfo/MovieInfo";
import PlayButton from "./PlayButton/PlayButton"

export default function Hero() {
  return (
    <div className="hero max-w-full min-h-96 overflow-hidden relative">
      <img
        alt="Hero"
        src="https://upload.wikimedia.org/wikipedia/vi/7/7d/Bliss.png"
        className="w-full"
      ></img>

      <div className="absolute left-40 bottom-20">
        <h1 className="text-3xl font-bold mb-2">Title</h1>
        <MovieInfo />
        <p className="mt-6">Description</p>
        
      </div>
      <PlayButton />
    </div>
  );
}
