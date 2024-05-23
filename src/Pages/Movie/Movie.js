import "./Movie.css";
import { useEffect, useState } from "react";
import { API_OPTIONS, MOVIE, REGION, URL_MOVIE_DETAIL } from "../../AppConsts";
import CommentSection from "../../Components/CommentSection/CommentSection";
import CurrentInfo from "../../Components/CurrentInfo/CurrentInfo";
import Suggestions from "../../Components/Suggestions/Suggestions";
import ViewScreen from "../../Components/ViewScreen/ViewScreen";

let CONTENT_ID = 0;

function Movie() {
  var [data, setData] = useState({});
  const fetchInfo = async () => {
    try {
      const response = await fetch(
        `${URL_MOVIE_DETAIL}${CONTENT_ID}${REGION}`,
        API_OPTIONS
      );
      const response_data = await response.json();
      response_data.release_Year = response_data?.release_date.split("-")[0];
      response_data.vote_average = response_data?.vote_average.toFixed(1);
      setData(response_data);
    } catch (err) {
      return console.error(err);
    }
  };

  useEffect(() => {fetchInfo()}, []);

  return (
    <main className="container mx-auto">
      <ViewScreen background={data?.backdrop_path} />
      <CurrentInfo data={data} id={CONTENT_ID} mediaType={MOVIE} />
      <Suggestions id={CONTENT_ID} mediaType={MOVIE} />
      <CommentSection id={CONTENT_ID} mediaType={MOVIE} />
    </main>
  );
}

export async function loader({ params }) {
  CONTENT_ID = params?.id;
  window.scrollTo({ behavior: "smooth", top: 0 });
  return null;
}

export default Movie;
