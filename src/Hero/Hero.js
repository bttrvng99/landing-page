import "./Hero.css";
// import "../../public/assets/fd1132de32fcc36eb79ecf8eb0d99c64.jpg";
import MovieInfo from "./MovieInfo/MovieInfo";
import PlayButton from "./PlayButton/PlayButton"

export default function Hero() {
  return (
    <div className="hero max-w-full min-h-96 overflow-hidden relative">
      <img
        alt="Hero"
        src="../../assets/fd1132de32fcc36eb79ecf8eb0d99c64.jpg"
        className="h-full w-full object-cover"
      ></img>

      <div className="absolute left-40 bottom-20">
        <div>
          <h1 className="text-3xl font-bold mb-2">Title</h1></div>
        <MovieInfo />
        <p className="mt-6">Description</p>
        
      </div>
      <PlayButton />
    </div>
  );
}
