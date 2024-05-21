import "./Suggestions.css";
import { useState, useEffect } from "react";
import { API_OPTIONS, MOVIE, URL_MOVIE_DETAIL } from "../../AppConsts";
import FilmThumbnail from "../../FilmThumbnail/FilmThumbnail";

export default function Suggestions({ id }) {
  const [data, setData] = useState([]);

  const fetchInfo = async () => {
    return fetch(URL_MOVIE_DETAIL + id + "/similar", API_OPTIONS)
      .then((response) => response.json())
      .then((response) => setData(response.results.slice(0, 8)))
      .catch((err) => console.error(err));
  };

  useEffect(() => fetchInfo, []);

  return (
    <div className="flex flex-col gap-y-2">
      <h1 className="text-2xl font-semibold">You may also like</h1>
      <div className="grid grid-cols-4 gap-8">
        {data?.map((entry, index) => {
          return (
            <button key={"rec" + index}>
              <FilmThumbnail
                id={entry.id}
                type={MOVIE}
                imageUrl={entry.poster_path}
                key={entry.id}
                title={entry.title}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
