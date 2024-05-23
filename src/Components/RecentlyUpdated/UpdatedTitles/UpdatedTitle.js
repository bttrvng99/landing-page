import "./UpdatedTitle.css";
import { useState, useEffect } from "react";
import {
  BASE_IMG_URL,
  REGION,
  URL_SERIE_DETAIL,
  API_OPTIONS,
} from "../../../AppConsts";

function UpdatedTitle({ id }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${URL_SERIE_DETAIL}${id}${REGION}`, API_OPTIONS)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <a
      href={`/tv/${data?.id}`}
      className="flex flex-row gap-6  justify-center text-left items-center"
    >
      <div className=" rounded-md overflow-hidden w-16">
        <img
          className="object-cover h-28  self-center transition hover:scale-105"
          alt=""
          src={`${BASE_IMG_URL}${data?.poster_path}`}
        ></img>
      </div>

      <div className="flex flex-col justify-center update_info">
        <h1
          href={`/tv/${data?.id}`}
          className="font-semibold transition line-clamp-2 hover:text-primary"
        >
          {data?.name}
        </h1>
        <div className="font-normal whitespace-nowrap">
          Series/S {data?.number_of_seasons}/E{" "}
          {data?.last_episode_to_air?.episode_number}
        </div>
        <div className="font-normal">
          {data?.last_episode_to_air?.air_date?.split("-")[0]}
        </div>
      </div>
    </a>
  );
}

export default UpdatedTitle;
