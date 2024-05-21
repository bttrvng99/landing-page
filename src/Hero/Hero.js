import "./Hero.css";
import MovieInfo from "./MovieInfo/MovieInfo";
import PlayButton from "./PlayButton/PlayButton";
import { useState, useEffect } from "react";
import { BASE_IMG_URL, API_OPTIONS, REGION } from "../AppConsts";
import HeroPagination from "./HeroPagination/HeroPagination";

const URL =
  "https://api.themoviedb.org/3/movie/now_playing"+REGION+"&page=1";

export default function Hero() {
  const [data, setData] = useState([]);

  const fetchInfo = async () => {
    return fetch(URL, API_OPTIONS)
      .then((response) => response.json())
      .then((response) => setData(response.results.slice(0, 1)))
      .catch((err) => console.error(err));
  };

  useEffect(() => fetchInfo, []);

  return (
    <div>
      {data?.map((entry, index) => {
        return (
          <div className="hero max-w-full min-h-96 overflow-hidden relative" key={'main_div'+index}>
            <img
              alt="Hero"
              src={BASE_IMG_URL + entry.backdrop_path}
              className="h-full w-full object-cover"
              key={'main_img'+index}
            ></img>

            <div className="absolute left-40 right-40 bottom-20" key={'info1'+index}>
              <div>
                <h1 className="text-3xl font-bold mb-2" key={'img_title'+index}>{entry.title}</h1>
              </div>
              <MovieInfo
                id={entry.id}
                release_date={entry.release_date}
                key={'hero'+entry.id+index}
                vote_average={entry.vote_average}
              />
              <p className="mt-6">{entry.overview}</p>
            </div>
            <PlayButton key={entry.id} id={entry.id+index}/>
            <HeroPagination key={'pagination1'+entry.id+index}/>
          </div>
        );
      })}
    </div>
  );
}