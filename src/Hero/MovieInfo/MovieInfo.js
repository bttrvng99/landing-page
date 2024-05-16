import GenreTag from "../GenreTag/GenreTag";

function MovieInfo() {
  return (
    <div className="flex flex-row gap-2">
      <GenreTag genre={"abc"} />
      <div className="p-2">year</div>
      <div className="p-2">duration</div>
      <div className="p-2">rating</div>
    </div>
  );
}

export default MovieInfo;
