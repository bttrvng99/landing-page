import "./NewRelease.css";
import FilmThumbnail from "../FilmThumbnail/FilmThumbnail";

const MOVIE = 0;

export default function NewRelease({ releaseType }) {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex flex-row justify-between">
        <div className="font-bold text-2xl">
          New Releases - {releaseType === MOVIE ? "Movies" : "Series"}
        </div>
        <button className="flex flex-row items-center gap-2 font-semibold opacity-50">
          View All
          <img alt="" src="../../assets/vector-arrow.svg"></img>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-x-8">
        <FilmThumbnail type={releaseType} />
        <FilmThumbnail type={releaseType} />
        <FilmThumbnail type={releaseType} />
        <FilmThumbnail type={releaseType} />
      </div>
    </div>
  );
}
