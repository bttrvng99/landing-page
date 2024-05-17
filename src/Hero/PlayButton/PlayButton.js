import "./PlayButton.css";

function PlayButton() {
  return (
    <div className="playButton flex flex-row gap-11 absolute top-1/2 left-1/2 text-center items-center m-auto">
      <button className="flex flex-row gap-2 bg-red-600 border-0 rounded-md p-5 text-2xl font-bold hover:bg-red-500">
        Watch now
        <img src="../../assets/Vector-play.svg" alt=""></img>
      </button>
      <button className="flex flex-row gap-2 items-center bg-none border-red-600 border-2 rounded-md p-5  text-2xl font-bold hover:border-red-500">
        Watch later
        <img src="../../assets/Vector-later.svg" alt=""></img>
      </button>
    </div>
  );
}

export default PlayButton;
