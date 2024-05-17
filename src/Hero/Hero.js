import "./Hero.css";
import MovieInfo from "./MovieInfo/MovieInfo";
import PlayButton from "./PlayButton/PlayButton";
import { useState, useEffect } from "react";
import { baseIMGUrl, apiOptions } from "../AppConsts";

const URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export default function Hero() {
  const [data, setData] = useState([]);

  const fetchInfo = async () => {
    return fetch(URL, apiOptions)
      .then((response) => response.json())
      .then((response) => setData(response.results.slice(0, 1)))
      .catch((err) => console.error(err));
  };

  useEffect(() => fetchInfo, []);

  return (
    <div>
      {data?.map((entry) => {
        return (
          <div className="hero max-w-full min-h-96 overflow-hidden relative">
            <img
              alt="Hero"
              src={baseIMGUrl+entry.backdrop_path}
              className="h-full w-full object-cover"
            ></img>

            <div className="absolute left-40 right-40 bottom-20">
              <div>
                <h1 className="text-3xl font-bold mb-2">{entry.title}</h1>
              </div>
              <MovieInfo release_date={entry.release_date} key={entry.id} vote_average={entry.vote_average}/>
              <p className="mt-6">{entry.overview}</p>
            </div>
            <PlayButton />
          </div>
        );
      })}
    </div>
  );
}
