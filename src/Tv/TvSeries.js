import "./TvSeries.css";
import { useEffect, useState } from "react";
import { API_OPTIONS, REGION, SERIES, URL_SERIE_DETAIL } from "../AppConsts";
import CommentSection from "../Watch/CommentSection/CommentSection";
import CurrentInfo from "../Watch/CurrentInfo/CurrentInfo";
import Suggestions from "../Watch/Suggestions/Suggestions";
import ViewScreen from "../Watch/ViewScreen/ViewScreen";
import TvEpisodes from "./TvEpisodes/TvEpisodes";

let CONTENT_ID = 0;

function TvSeries() {
  var [data, setData] = useState({});
  const fetchInfo = async () => {
    try {
      const response = await fetch(
        URL_SERIE_DETAIL + CONTENT_ID + REGION,
        API_OPTIONS
      );
      const response_1 = await response.json();
      response_1.release_Year = response_1?.first_air_date.split("-")[0];
      response_1.vote_average = response_1?.vote_average.toFixed(1);
      setData(response_1);
    } catch (err) {
      return console.error(err);
    }
  };

  useEffect(() => {fetchInfo()}, []);

  return (
    <div className="flex flex-col mx-40 mt-12 mb-40 gap-20">
      <ViewScreen background={data?.backdrop_path} />
      <CurrentInfo data={data} id={CONTENT_ID} mediaType={SERIES} />
      <TvEpisodes id={CONTENT_ID} />
      <Suggestions id={CONTENT_ID} mediaType={SERIES} />
      <CommentSection id={CONTENT_ID} mediaType={SERIES} />
    </div>
  );
}

export async function loader({ params }) {
  CONTENT_ID = params?.id;
  window.scrollTo({ behavior: "smooth", top: 0 });
  return null;
}

export default TvSeries;
