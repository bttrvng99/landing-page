import "./NewRelease.css";
import FilmThumbnail from "../FilmThumbnail/FilmThumbnail";

export default function NewRelease({ releaseType }) {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex flex-row justify-between">
        <div className="font-bold text-2xl">
          New Releases - {releaseType === 0 ? "Movies" : "Series"}
        </div>
        <button>View All</button>
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
