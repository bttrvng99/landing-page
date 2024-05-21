import {
  BASE_IMG_URL,
  URL_MOVIE_DETAIL,
  REGION,
  API_OPTIONS,
} from "../../AppConsts";
import { ReactComponent as Add } from "../../assets/Vector-plus.svg";
import { ReactComponent as Calendar } from "../../assets/Group-calendar.svg";
import { ReactComponent as Time } from "../../assets/Vector-time.svg";
import { ReactComponent as Rating } from "../../assets/Vector-rating.svg";
import GenreTag from "./GenreTag/GenreTag";
import { useEffect, useState } from "react";

function CurrentMovieInfo({ data, id }) {
  var [cast, setCast] = useState([]);

  const fetchCast = async () => {
    try {
      const response = await fetch(
        URL_MOVIE_DETAIL + id + "/credits" + REGION,
        API_OPTIONS
      );
      const response_1 = await response.json();
      setCast(response_1.cast);
    } catch (err) {
      return console.error(err);
    }
  };

  useEffect(() => fetchCast, []);

  return (
    <div className="flex flex-row gap-8">
      <img
        alt="Current Movie"
        className="w-1/3 h-fit"
        src={BASE_IMG_URL + data.poster_path}
      />
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl font-semibold">{data.title}</h1>
          <button className="flex flex-row bg-red-600 rounded-xl p-4 items-center gap-2 text-base font-normal transition hover:bg-red-500 active:bg-red-700">
            <Add />
            Add to Favourites
          </button>
        </div>
        <div className="flex flex-row gap-2 mt-16 mb-6">
          {data?.genres?.map((genre) => {
            return <GenreTag genre={genre.name} key={genre.id} />;
          })}
          <div className="flex flex-row items-center p-2 gap-2">
            <Calendar /> {data?.release_Year}
          </div>
          <div className="flex flex-row items-center p-2 gap-2">
            <Time /> {calculateRuntime(data?.runtime)}
          </div>
          <div className="flex flex-row items-center p-2 gap-2">
            <Rating />
            {data?.vote_average}
          </div>
        </div>
        <div>{data?.overview}</div>
        <table className="border-separate border-spacing-2">
          <tbody>
            <tr>
              <th className="font-normal text-end">Country:</th>
              <td className="text-start">
                {data?.origin_country?.map((country, index) => {
                  return (
                    country +
                    (index < data?.origin_country?.length - 1 ? ", " : "")
                  );
                })}
              </td>
            </tr>
            <tr>
              <th className="font-normal text-end">Genre:</th>
              <td className="text-start">
                {data?.genres?.map((genre, index) => {
                  return (
                    genre.name + (index < data?.genres?.length - 1 ? ", " : "")
                  );
                })}
              </td>
            </tr>
            <tr>
              <th className="font-normal text-end">Release date: </th>
              <td className="text-start">{data?.release_date}</td>
            </tr>
            <tr>
              <th className="font-normal text-end">Production: </th>
              <td className="text-start">
                {data?.production_companies?.map((company, index) => {
                  return (
                    company.name +
                    (index < data?.production_companies?.length - 1 ? ", " : "")
                  );
                })}
              </td>
            </tr>
            <tr>
              <th className="font-normal text-end">Cast: </th>
              <td className="text-start">
                {cast?.map((person, index) => {
                  return person.name + (index < cast?.length - 1 ? ", " : "");
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function calculateRuntime(duration_minutes) {
  var hours = Math.floor(duration_minutes / 60);
  var minutes = duration_minutes % 60;
  return hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":00";
}

export default CurrentMovieInfo;
