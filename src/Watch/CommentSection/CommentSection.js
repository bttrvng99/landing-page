import "./CommentSection.css";
import { useState, useEffect } from "react";
import { API_OPTIONS, BASE_IMG_URL, URL_MOVIE_DETAIL } from "../../AppConsts";
import Comment from "./Comment/Comment";
import tmp from "../../assets/tmp.jpg";

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
    <div className="flex flex-col gap-y-10">
      <div className="font-bold text-2xl">Comments</div>
      <div className="flex flex-row gap-x-8">
        <img
          alt={data?.author}
          src={
            data?.author_details?.avatar_path
              ? BASE_IMG_URL + data?.author_details?.avatar_path
              : tmp
          }
          className="rounded-full w-32 h-32"
        />
        <input
          type="text"
          className="w-full bg-white text-black rounded-xl indent-1"
          placeholder="Write your comments here"
        />
      </div>
      {data?.map((comment) => {
        // console.log(comment);
        return <Comment key={comment.id} data={comment} />;
      })}
    </div>
  );
}
