import "./Comment.css";
import { ReactComponent as Like } from "../../../assets/Vector-like.svg";
import { ReactComponent as Dislike } from "../../../assets/Vector-dislike.svg";
import { BASE_IMG_URL } from "../../../AppConsts";
import tmp from "../../../assets/tmp.jpg";
import { useState } from "react";

function Comment({ data }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const changeStateExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <img
        alt={data?.author}
        src={
          data?.author_details?.avatar_path
            ? `${BASE_IMG_URL}${data?.author_details?.avatar_path}`
            : tmp
        }
        className="rounded-full max-w-32 max-h-32 size-20 min-w-20 min-h-20"
      />
      <div className="flex flex-col gap-2">
        <h1>{data?.author}</h1>
        <p>{data?.created_at}</p>
        <p className={`break-words ${!isExpanded ? "line-clamp-5" : ""}`}>
          {data?.content}
        </p>
        <button
          className="transition text-left font-semibold hover:text-primary active:text-primaryActive"
          onClick={() => changeStateExpand()}
        >
          {!isExpanded ? "Show more" : "Show less"}
        </button>
        <div className="flex flex-row gap-x-8">
          <button>
            <Like />
          </button>
          <button>
            <Dislike />
          </button>
          <button>Reply</button>
        </div>
      </div>
    </div>
  );
}

export default Comment;
