import GenreTag from "../GenreTag/GenreTag";

function MovieInfo({ release_date, vote_average }) {
  return (
    <div className="flex flex-row gap-2">
      <GenreTag genre={"abc"} />
      <div className="flex flex-row items-center p-2 gap-2">
        <img src="../../assets/Group-calendar.svg" alt=""></img> {release_date}
      </div>
      {/* <div className="flex flex-row items-center p-2 gap-2">
        <img src="../../assets/Vector-time.svg" alt=""></img> duration
      </div> */}
      <div className="flex flex-row items-center p-2 gap-2">
        <img src="../../assets/Vector-rating.svg" alt=""></img> {vote_average}
      </div>
    </div>
  );
}

export default MovieInfo;
