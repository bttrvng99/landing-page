import "./Comment.css";
import {ReactComponent as Like} from '../../../assets/Vector-like.svg'
import {ReactComponent as Dislike} from '../../../assets/Vector-dislike.svg'

function Comment({ data }) {
    // console.log('comment', data);
  return (
    <div className="flex flex-row gap-x-8">
        <img alt={data?.author} src={data?.author_details?.avatar_path} className="rounded-full w-32 h-32"/>
        <div className="flex flex-col gap-2">
            <h1>{data?.author}</h1>
            <p>{data?.created_at}</p>
            <p>{data?.content}</p>
            <div className="flex flex-row gap-x-8">
                <div><Like /></div>
                <Dislike />
                <button>Reply</button>
            </div>
        </div>
    </div>
  );
}

export default Comment;