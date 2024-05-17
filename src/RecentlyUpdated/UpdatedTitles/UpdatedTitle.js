import "./UpdatedTitle.css";
import { useState, useEffect } from "react";
import { BASE_IMG_URL, REGION, URL_SERIE_DETAIL, API_OPTIONS } from "../../AppConsts";

function UpdatedTitle({
  id,
  title = "Title",
  season = 1,
  eopisode = 1,
  year = 2018,
  src = "https://upload.wikimedia.org/wikipedia/commons/a/a5/Flower_poster_2.jpg",
}) {
  const [data, setData] = useState([]);

  const fetchInfo = async () => {
    return fetch(URL_SERIE_DETAIL + id + REGION, API_OPTIONS)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  };

  useEffect(() => fetchInfo, []);
  
  return (
    <div className="flex flex-row gap-6  justify-center">
      <img
        className="object-cover h-28 rounded-md overflow-hidden self-center"
        alt=""
        src={BASE_IMG_URL+data?.poster_path}
      ></img>

      <div className="flex flex-col justify-center update_info">
        <div className="font-semibold">{data?.name}</div>
        <div className="font-normal whitespace-nowrap">
          Series/S {data?.number_of_seasons}/E {data?.last_episode_to_air?.episode_number}
        </div>
        <div className="font-normal">{data?.last_episode_to_air?.air_date?.split("-")[0]}</div>
      </div>
    </div>
  );
}

export default UpdatedTitle;
