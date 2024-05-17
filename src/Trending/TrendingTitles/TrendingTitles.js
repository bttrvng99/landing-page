import "./TrendingTitles.css";
import TrendingGenreTag from "../TrendingGenreTag/TrendingGenreTag";
import TrendingThumbnail from "../TrendingThumbnail/TrendingThumbnail";
import { REGION, URL_MOVIE_DETAIL, API_OPTIONS } from "../../AppConsts";
import { useEffect, useState } from "react";

export default function TrendingTitles({
  title,
  genreList,
  duration = "",
  rating = "",
  imgUrl,
  id,
}) {
  const [data, setData] = useState({});
  const [genres, setGenres] = useState([]);

  const fetchInfo = async () => {
    return fetch(URL_MOVIE_DETAIL + id + REGION, API_OPTIONS)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setGenres(response.genres);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => fetchInfo, []);
  return (
    <div className="flex flex-col gap-y-2">
      <TrendingThumbnail duration={data?.runtime} rating={rating} imgUrl={imgUrl} />
      <div className="flex flex-row items-center justify-between">
        <div className="text-ellipsis overflow-hidden whitespace-nowrap font-semibold text-2xl">
          {title}
        </div>
        <div className="flex flex-row gap-2">
          {genres?.map((genre) => {
            return(
              <TrendingGenreTag text={genre.name} key={genre.id}></TrendingGenreTag>
            )
          })}
        </div>
      </div>
    </div>
  );
}
