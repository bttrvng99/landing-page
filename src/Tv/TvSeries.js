import "./TvSeries.css";
import { useEffect, useState } from "react";
import {
  API_OPTIONS,
  MOVIE,
  REGION,
  URL_MOVIE_DETAIL,
  URL_SERIE_DETAIL,
} from "../AppConsts";
import CommentSection from "../Watch/CommentSection/CommentSection";
import CurrentInfo from "../Watch/CurrentInfo/CurrentInfo";
import Suggestions from "../Watch/Suggestions/Suggestions";
import ViewScreen from "../Watch/ViewScreen/ViewScreen";

let CONTENT_ID = 0;

function TvSeries() {
  var [data, setData] = useState({});
  console.log(CONTENT_ID);
  const fetchInfo = async () => {
    try {
      console.log("url", URL_SERIE_DETAIL + CONTENT_ID + REGION);
      const response = await fetch(
        URL_SERIE_DETAIL + CONTENT_ID + REGION,
        API_OPTIONS
      );
      const response_1 = await response.json();
      response_1.release_Year = response_1?.release_date.split("-")[0];
      response_1.vote_average = response_1?.vote_average.toFixed(1);
      console.log("response_1: ", response_1);
      setData(response_1);
    } catch (err) {
      return console.error(err);
    }
  };

  useEffect(() => fetchInfo, []);

  return (
    <div className="flex flex-col mx-40 mt-12 mb-40 gap-20">
      <ViewScreen
        background={data?.backdrop_path}
        key={`player${CONTENT_ID}`}
      />
      <CurrentInfo data={data} id={CONTENT_ID} key={`movieInfo${CONTENT_ID}`} />
      <Suggestions key={`suggestions${CONTENT_ID}`} id={CONTENT_ID} />
      <CommentSection id={CONTENT_ID} />
    </div>
  );
}

export async function loader({ params }) {
  CONTENT_ID = params?.id;
  console.log("params", CONTENT_ID);
  window.scrollTo({ behavior: "smooth", top: 0 });
  return null;
}

export default TvSeries;
