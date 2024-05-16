import "./Recommended.css";
import FilmThumbnail from "../FilmThumbnail/FilmThumbnail";

export default function Recommended() {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex flex-row justify-between">
        <div className="font-bold text-2xl">
          Recommended

        </div>
        <button>View All</button>
      </div>
      <div className="grid grid-cols-4 gap-8">
        <FilmThumbnail/>
        <FilmThumbnail/>
        <FilmThumbnail/>
        <FilmThumbnail/>
        <FilmThumbnail/>
        <FilmThumbnail/>
        <FilmThumbnail/>
        <FilmThumbnail/>
      </div>
    </div>
  );
}
