import { useEffect, useState } from "react";
import "./Trending";
import TrendingTitles from "./TrendingTitles/TrendingTitles";
import { API_OPTIONS, REGION } from "../../AppConsts";
import {ReactComponent as Arrow} from '../../assets/Vector-arrow.svg'

const URL = `https://api.themoviedb.org/3/trending/movie/week${REGION}`;

export default function Trending() {
  const [data, setData] = useState([]);

  const fetchInfo = async () => {
    return fetch(URL, API_OPTIONS)
      .then((response) => response.json())
      .then((response) => setData(response.results.slice(0, 3)))
      .catch((err) => console.error(err));
  };

  useEffect(() => {fetchInfo()}, []);
  return (
    <section className="flex flex-col gap-y-2 mb-20">
      <div className="flex flex-row justify-between">
        <div className="font-bold text-2xl">Trending</div>
        <button className="flex flex-row items-center gap-2 font-semibold opacity-50 transition hover:opacity-100">
          View All
          <Arrow />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-start">
        {data?.map((entry, index) =>
          <button key={index}>
            <TrendingTitles
              rating={entry.vote_average}
              duration={"2:13:00"}
              title={entry.original_title}
              imgUrl={entry.poster_path}
              id={entry.id}
            />
          </button>
          )}
      </div>
    </section>
  );
}
