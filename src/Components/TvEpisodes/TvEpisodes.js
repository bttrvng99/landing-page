import "./TvEpisodes.css";
import { ReactComponent as Dropdown } from "../../assets/Vector-dropdown.svg";
import { useEffect, useState } from "react";
import { API_OPTIONS, REGION } from "../../AppConsts";
import EpisodeButton from "./EpisodeButton/EpisodeButton";

function TvEpisodes({ id }) {
  var [data, setData] = useState([]);

  const fetchInfo = async () => {
    return fetch(
      `https://api.themoviedb.org/3/tv/${id}/season/1${REGION}`,
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => setData(response.episodes))
      .catch((err) => console.error(err));
  };

  useEffect(() => {fetchInfo()}, []);

  return (
    <section className="flex flex-col gap-y-8 mt-14">
      <h1 className="text-2xl font-semibold flex flex-row gap-4 items-center">
        Season 1
        <button>
          <Dropdown />
        </button>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {data?.map((episode) => {
            return <EpisodeButton key={episode.id} data={episode} />
        })}
      </div>
    </section>
  );
}

export default TvEpisodes;
