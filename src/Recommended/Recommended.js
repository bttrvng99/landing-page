import "./Recommended.css";
import FilmThumbnail from "../FilmThumbnail/FilmThumbnail";
import FormatToggle from "./FormatToggle/FormatToggle";
import { useState, useEffect } from "react";
import { apiOptions, MOVIE } from "../AppConsts";

const URL = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

export default function Recommended() {
  const [data, setData] = useState([]);

  const fetchInfo = async () => {
    return fetch(URL, apiOptions)
      .then((response) => response.json())
      .then((response) => setData(response.results.slice(0, 8)))
      .catch((err) => console.error(err));
  };

  useEffect(() => fetchInfo, []);

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex flex-row justify-between items-center">
        <div className="font-bold text-2xl flex flex-row gap-6 items-center">
          <div>Recommended</div>
          <FormatToggle id={"movie"} text={"Movies"} key={"movie"} />
          <FormatToggle id={"serie"} text={"Series"} key={"serie"} />
          <FormatToggle id={"anim"} text={"Animated"} key={"anim"} />
        </div>
        <button className="flex flex-row items-center gap-2 font-semibold opacity-50">
          View All
          <img alt="" src="../../assets/vector-arrow.svg"></img>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-8">
      {data?.map((entry) => {
          return (
            <FilmThumbnail
              type={MOVIE}
              imageUrl={entry.poster_path}
              key={entry.id}
              title={entry.title}
            />
          );
        })}
      </div>
    </div>
  );
}
