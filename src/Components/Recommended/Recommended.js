import "./Recommended.css";
import FilmThumbnail from "../FilmThumbnail/FilmThumbnail";
import FormatToggle from "./FormatToggle/FormatToggle";
import { useState, useEffect } from "react";
import { API_OPTIONS, MOVIE } from "../../AppConsts";
import { ReactComponent as Arrow } from "../../assets/Vector-arrow.svg";

const URL =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

const FORMATS = [
  {
    key: "movi",
    text: "Movies",
  },
  {
    key: "seri",
    text: "Series",
  },
  {
    key: "anim",
    text: "Animation",
  },
];

export default function Recommended() {
  const [data, setData] = useState([]);

  const fetchInfo = async () => {
    return fetch(URL, API_OPTIONS)
      .then((response) => response.json())
      .then((response) => setData(response.results.slice(0, 8)))
      .catch((err) => console.error(err));
  };

  useEffect(() => {fetchInfo()}, []);

  return (
    <section className="flex flex-col gap-y-2 mb-20">
      <div className="flex flex-row justify-between items-center">
        <div className="font-bold text-2xl flex flex-col lg:flex-row gap-2 lg:gap-6 lg:items-center">
          <div>Recommended</div>
          <div className="flex flex-col md:flex-row gap-2 lg:gap-6">{FORMATS.map((format) => {
            return (
              <FormatToggle
                id={format.key}
                text={format.text}
                key={format.key}
              />
            );
          })}</div>
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
                type={MOVIE}
                imageUrl={entry.poster_path}
                title={entry.title}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}
