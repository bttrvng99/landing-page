import GenreTag from "../GenreTag/GenreTag";
import { apiOptions, URL_MOVIE_DETAIL, REGION } from "../../AppConsts";
import { useEffect, useState } from "react";

function MovieInfo({ id, release_date, vote_average }) {
  const [data, setData] = useState({});
  const [genres, setGenres] = useState([]);

  const fetchInfo = async () => {
    return fetch(URL_MOVIE_DETAIL + id + REGION, apiOptions)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setGenres(response.genres);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => fetchInfo, []);

  return (
    <div className="flex flex-row gap-2">
      {genres?.map((genre) => {
        return <GenreTag genre={genre.name} key={genre.id} />;
      })}
      <div className="flex flex-row items-center p-2 gap-2">
        <img src="../../assets/Group-calendar.svg" alt=""></img> {release_date.split("-")[0]}
      </div>
      <div className="flex flex-row items-center p-2 gap-2">
        <img src="../../assets/Vector-time.svg" alt=""></img> {calculateRuntime(data?.runtime)}
      </div>
      <div className="flex flex-row items-center p-2 gap-2">
        <img src="../../assets/Vector-rating.svg" alt=""></img>{" "}
        {vote_average.toFixed(1)}
      </div>
    </div>
  );
}

function calculateRuntime(duration_minutes) {
  var hours = Math.floor(duration_minutes / 60);
  var minutes = duration_minutes % 60;
  return hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":00";
}

export default MovieInfo;
