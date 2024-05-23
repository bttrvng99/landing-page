import "./CommentSection.css";
import { useState, useEffect } from "react";
import {
  API_OPTIONS,
  BASE_IMG_URL,
  MOVIE,
  URL_MOVIE_DETAIL,
  URL_SERIE_DETAIL,
} from "../../AppConsts";
import Comment from "./Comment/Comment";
import tmp from "../../assets/tmp.jpg";

export default function CommentSection({ id, mediaType }) {
  const [data, setData] = useState([]);

  const fetchInfo = async () => {
    return fetch(
      `${
        mediaType === MOVIE ? URL_MOVIE_DETAIL : URL_SERIE_DETAIL
      }${id}/reviews`,
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => setData(response.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <section className="flex flex-col gap-y-10 my-20">
      <h1 className="font-bold text-2xl">Comments</h1>
      <div className="flex flex-row gap-8 items-center">
        <img
          alt={data?.author}
          src={
            data?.author_details?.avatar_path
              ? `${BASE_IMG_URL}${data?.author_details?.avatar_path}`
              : tmp
          }
          className="rounded-full size-20 min-w-20 min-h-20"
        />
        <textarea
          rows="3"
          className="w-full bg-white text-black rounded-xl indent-1 p-2"
          placeholder="Write your comments here..."
        ></textarea>
      </div>
      {data?.map((comment) => {
        return <Comment key={comment.id} data={comment} />;
      })}
    </section>
  );
}
