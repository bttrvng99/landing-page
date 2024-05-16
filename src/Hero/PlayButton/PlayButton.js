import './PlayButton.css'

function PlayButton(){
    return(
        <div className="playButton flex flex-row gap-11 absolute top-1/2 left-1/2 text-center items-center m-auto">
            <button className="bg-red-500 border-0 rounded-md p-5 text-2xl font-bold hover:bg-red-600">
                Watch now
            </button>
            <button className="bg-none border-red-500 border-2 rounded-md p-5  text-2xl font-bold hover:border-red-600">
                Watch later
            </button>
        </div>
    );
}

export default PlayButton;