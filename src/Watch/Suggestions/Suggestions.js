import "./Suggestions.css";
import { useState, useEffect } from "react";
import {
  API_OPTIONS,
  MOVIE,
  REGION,
  URL_MOVIE_DETAIL,
  URL_SERIE_DETAIL,
} from "../../AppConsts";
import FilmThumbnail from "../../FilmThumbnail/FilmThumbnail";

export default function Suggestions({ id, mediaType }) {
  const [data, setData] = useState([]);

  const fetchInfo = async () => {
    return fetch(
      `${
        mediaType === MOVIE ? URL_MOVIE_DETAIL : URL_SERIE_DETAIL
      }${id}/recommendations${REGION}&page=1`,
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => setData(response.results.slice(0, 8)))
      .catch((err) => console.error(err));
  };

  useEffect(() => fetchInfo, []);

  return (
    <div className="flex flex-col gap-y-2">
      <h1 className="text-2xl font-semibold">You may also like</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {data?.map((entry, index) => {
          return (
            <button key={`rec${index}`}>
              <FilmThumbnail
                id={entry.id}
                type={mediaType}
                imageUrl={entry.poster_path}
                key={entry.id}
                title={mediaType === MOVIE ? entry.title : entry.name}
                releaseType={mediaType}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
