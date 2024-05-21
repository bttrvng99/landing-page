import "./Watch.css";
import ViewScreen from "./ViewScreen/ViewScreen";
import CurrentMovieInfo from "./CurrentMovieInfo/CurrentMovieInfo";
import { useEffect, useState } from "react";
import { API_OPTIONS, REGION, URL_MOVIE_DETAIL } from "../AppConsts";
import Suggestions from "./Suggestions/Suggestions";
import CommentSection from "./CommentSection/CommentSection";

let CONTENT_ID = 0;

function Watch() {
  var [data, setData] = useState({});
  console.log(CONTENT_ID);
  const fetchInfo = async () => {
    try {
      const response = await fetch(
        URL_MOVIE_DETAIL + CONTENT_ID + REGION,
        API_OPTIONS
      );
      const response_1 = await response.json();
      response_1.release_Year = response_1?.release_date.split("-")[0];
      response_1.vote_average = response_1?.vote_average.toFixed(1);
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
        key={"player" + CONTENT_ID}
      />
      <CurrentMovieInfo
        data={data}
        id={CONTENT_ID}
        key={"movieInfo" + CONTENT_ID}
      />
      <Suggestions key={"suggestions" + CONTENT_ID} id={CONTENT_ID} />
      <CommentSection id={CONTENT_ID} />
    </div>
  );
}

export async function loader({ params }) {
  CONTENT_ID = params?.id;
  window.scrollTo({behavior:"smooth", top: 0})
  return null;
}

export async function getContent(id) {}

export default Watch;
