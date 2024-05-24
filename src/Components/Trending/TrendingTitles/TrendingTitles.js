import "./TrendingTitles.css";
import TrendingGenreTag from "../TrendingGenreTag/TrendingGenreTag";
import TrendingThumbnail from "../TrendingThumbnail/TrendingThumbnail";
import { REGION, URL_MOVIE_DETAIL, API_OPTIONS } from "../../../AppConsts";
import { useEffect, useState } from "react";

export default function TrendingTitles({ title, rating = "", imgUrl, id }) {
  const [data, setData] = useState({});
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch(`${URL_MOVIE_DETAIL}${id}${REGION}`, API_OPTIONS)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setGenres(response.genres);
      })
      .catch((err) => console.error(err));
  }, [id]);
  return (
    <div className="flex flex-col gap-y-2">
      <TrendingThumbnail
        duration={data?.runtime}
        rating={rating}
        imgUrl={imgUrl}
        id={data?.id}
      />
      <div className="flex flex-row items-center justify-between">
        <a
          href={`/movie/${data?.id}`}
          className="text-ellipsis overflow-hidden whitespace-nowrap font-semibold text-2xl hover:text-primary transition-colors"
        >
          {title}
        </a>
        <div className="flex md:flex-row flex-col gap-2">
          {genres?.map((genre) => {
            return (
              <TrendingGenreTag
                text={genre.name}
                key={genre.id}
              ></TrendingGenreTag>
            );
          })}
        </div>
      </div>
    </div>
  );
}
