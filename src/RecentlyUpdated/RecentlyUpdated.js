import "./RecentlyUpdated.css";
import UpdatedButton from "./UpdatedButton/UpdatedButton";
import UpdatedTitle from "./UpdatedTitles/UpdatedTitle";
import { useState, useEffect } from "react";
import { API_OPTIONS } from "../AppConsts";

const URL_UPDATED_TV = "https://api.themoviedb.org/3/tv/changes?page=1";

export default function RecentlyUpdated() {
  const [data, setData] = useState([]);

  const fetchInfo = async () => {
    return fetch(URL_UPDATED_TV, API_OPTIONS)
      .then((response) => response.json())
      .then((response) => setData(response.results.slice(0, 4)))
      .catch((err) => console.error(err));
  };

  useEffect(() => fetchInfo, []);

  return (
    <div className="flex flex-col gap-y-2">
      <div className="text-2xl">Recently Updated</div>
      <div className="relative">
        <div className="flex flex-row gap-x-10 overflow-hidden">
          {data?.map((serie) => {
            return (
              <button className="text-left">
                <UpdatedTitle key={serie.id} id={serie.id} />
              </button>
            );
          })}
        </div>
        <UpdatedButton/>
      </div>
    </div>
  );
}
