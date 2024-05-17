import "./PlayButton.css";
import {ReactComponent as Play} from '../../assets/Vector-play.svg'
import {ReactComponent as Later} from '../../assets/Vector-later.svg'

function PlayButton() {
  return (
    <div className="playButton flex flex-row gap-11 absolute top-1/2 left-1/2 text-center items-center m-auto">
      <button className="flex flex-row gap-2 items-center bg-red-600 border-0 rounded-md p-5 text-2xl font-bold hover:bg-red-500 active:bg-red-700">
        Watch now
        <Play />
      </button>
      <button className="flex flex-row gap-2 items-center bg-none border-red-600 border-2 rounded-md p-5  text-2xl font-bold hover:border-red-500 active:border-red-700">
        Watch later
        <Later />
      </button>
    </div>
  );
}

export default PlayButton;
