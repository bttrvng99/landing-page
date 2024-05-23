import {
  BASE_IMG_URL,
  URL_MOVIE_DETAIL,
  REGION,
  API_OPTIONS,
  URL_SERIE_DETAIL,
} from "../../AppConsts";
import { ReactComponent as Add } from "../../assets/Vector-plus.svg";
import { ReactComponent as Calendar } from "../../assets/Group-calendar.svg";
import { ReactComponent as Time } from "../../assets/Vector-time.svg";
import { ReactComponent as Rating } from "../../assets/Vector-rating.svg";
import GenreTag from "./GenreTag/GenreTag";
import { useEffect, useState } from "react";
import { MOVIE } from "../../AppConsts";

function CurrentInfo({ data, id, mediaType }) {
  const [cast, setCast] = useState([]);

  const [isExpanded, setIsExpanded] = useState(false);

  const changeStateExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    fetch(
      `${
        mediaType === MOVIE ? URL_MOVIE_DETAIL : URL_SERIE_DETAIL
      }${id}/credits${REGION}`,
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.crew && !response.cast.length)
          setCast(response.crew);
        else setCast(response.cast);
      })
      .catch((err) => console.error(err));
  }, [id, mediaType]);

  return (
    <section className="flex flex-col md:flex-row gap-8 mt-24">
      <img
        alt="Current Movie"
        className="md:w-1/3 h-fit"
        src={`${BASE_IMG_URL}${data.poster_path}`}
      />
      <div className="flex flex-col md:w-2/3">
        <div className="flex flex-col items-start xl:flex-row xl:justify-between xl:items-center gap-2">
          <h1 className="text-3xl font-semibold">
            {data?.title ? data?.title : data?.name}
          </h1>
          <button className="flex flex-row bg-primary rounded-xl p-4 items-center gap-2 text-base font-normal transition hover:bg-primaryHover active:bg-primaryActive">
            <Add />
            Add to Favourites
          </button>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 mt-16 mb-6">
          <div className="flex flex-col w-fit sm:flex-row gap-2">
            {data?.genres?.map((genre) => {
              return <GenreTag genre={genre.name} key={genre.id} />;
            })}
          </div>
          <div className="flex flex-row">
            <div className="flex flex-row items-center p-2 gap-2">
              <Calendar /> {data?.release_Year}
            </div>
            <div className="flex flex-row items-center p-2 gap-2">
              <Time /> {calculateRuntime(data?.runtime ? data?.runtime : "")}
            </div>
            <div className="flex flex-row items-center p-2 gap-2">
              <Rating />
              {data?.vote_average}
            </div>
          </div>
        </div>
        <p>{data?.overview}</p>
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
                  return `${genre.name}${
                    index < data?.genres?.length - 1 ? ", " : ""
                  }`;
                })}
              </td>
            </tr>
            <tr>
              <th className="font-normal text-end">Release date: </th>
              <td className="text-start">
                {data?.release_date ? data?.release_date : data?.first_air_date}
              </td>
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
              <td>
                <p
                  className={`text-start ${!isExpanded ? "line-clamp-5" : ""}`}
                >
                  {cast?.map((person, index) => {
                    return `${person.name}${
                      index < cast?.length - 1 ? ", " : ""
                    }`;
                  })}
                </p>
                <button
                  className="transition text-left font-semibold hover:text-primary active:text-primaryActive"
                  onClick={() => changeStateExpand()}
                >
                  {!isExpanded ? "Show more" : "Show less"}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

function calculateRuntime(duration_minutes) {
  var hours = Math.floor(duration_minutes / 60);
  var minutes = duration_minutes % 60;
  return `${hours > 0 ? hours : ""}${hours > 0 ? ":" : ""}${
    minutes < 10 ? "0" : ""
  }${minutes}:00`;
}

export default CurrentInfo;
