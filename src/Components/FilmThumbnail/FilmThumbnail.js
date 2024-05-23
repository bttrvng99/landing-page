import DurationLabel from "./DurationLabel/DurationLabel";
import "./FilmThumbnail.css";
import { useState, useEffect } from "react";
import {
  BASE_IMG_URL,
  URL_MOVIE_DETAIL,
  REGION,
  API_OPTIONS,
  MOVIE,
  URL_SERIE_DETAIL,
} from "../../AppConsts";

export default function FilmThumbnail({
  id,
  title = "Title gggg",
  imageUrl = "https://upload.wikimedia.org/wikipedia/commons/a/a5/Flower_poster_2.jpg",
  type,
}) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `${type === MOVIE ? URL_MOVIE_DETAIL : URL_SERIE_DETAIL}${id}${REGION}`,
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, [id, type]);

  return (
    <div className="flex flex-col gap-y-4">
      <a
        href={`${type === MOVIE ? "/movie/" : "/tv/"}${data?.id}`}
        className="object-cover rounded-xl overflow-hidden"
      >
        <img
          className="transition hover:scale-105 "
          src={`${BASE_IMG_URL}${imageUrl}`}
          alt={title}
        ></img>
      </a>

      <div className="flex flex-row items-center justify-between">
        <a
          href={`${type === MOVIE ? "/movie/" : "/tv/"}${data?.id}`}
          className="font-bold text-2xl text-ellipsis overflow-hidden whitespace-nowrap transition-colors hover:text-primary"
        >
          {title}
        </a>
        <DurationLabel
          type={type}
          season={data.number_of_seasons}
          duration={data.runtime}
        />
      </div>
    </div>
  );
}
