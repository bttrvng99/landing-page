import "./CommentSection.css";
import { useState, useEffect } from "react";
import { API_OPTIONS, MOVIE, URL_MOVIE_DETAIL } from "../../AppConsts";
import Comment from "./Comment/Comment";

export default function CommentSection({ id }) {
  const [data, setData] = useState([]);

  const fetchInfo = async () => {
    return fetch(URL_MOVIE_DETAIL + id + "/reviews", API_OPTIONS)
      .then((response) => response.json())
      .then((response) => setData(response.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => fetchInfo, []);
  console.log(data);

  return (
    <div className="flex flex-col gap-y-2">
      <div className="font-bold text-2xl">Comments</div>
      {data?.map((comment) => {
        console.log(comment);
        return <Comment key={comment.id} data={comment} />;
      })}
    </div>
  );
}
