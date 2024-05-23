import "./NewRelease.css";
import FilmThumbnail from "../FilmThumbnail/FilmThumbnail";
import { API_OPTIONS } from "../../AppConsts";
import { useState, useEffect } from "react";
import { MOVIE, REGION } from "../../AppConsts";
import { ReactComponent as Arrow } from "../../assets/Vector-arrow.svg";

const URL_NEW_MOVIES = `https://api.themoviedb.org/3/movie/upcoming${REGION}&page=1`;
const URL_NEW_SERIES = `https://api.themoviedb.org/3/tv/airing_today${REGION}&page=1`;

export default function NewRelease({ releaseType }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(releaseType === MOVIE ? URL_NEW_MOVIES : URL_NEW_SERIES, API_OPTIONS)
      .then((response) => response.json())
      .then((response) => setData(response.results.slice(0, 4)))
      .catch((err) => console.error(err));
  }, [releaseType]);
  return (
    <section className="flex flex-col gap-y-2 mb-20">
      <div className="flex flex-row justify-between">
        <div className="font-bold text-2xl">
          New Releases - {releaseType === MOVIE ? "Movies" : "Series"}
        </div>
        <button className="flex flex-row items-center gap-2 font-semibold opacity-50 transition hover:opacity-100">
          View All
          <Arrow />
        </button>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-8">
        {data?.map((entry, index) => {
          return (
            <button key={index}>
              <FilmThumbnail
                id={entry.id}
                type={releaseType}
                imageUrl={entry.poster_path}
                title={releaseType === MOVIE ? entry.title : entry.name}
                releaseType={releaseType}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}
