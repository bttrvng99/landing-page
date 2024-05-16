import "./UpdatedTitle.css";

function UpdatedTitle({
  title = "Title",
  season = 1,
  eopisode = 1,
  year = 2018,
  src = "https://upload.wikimedia.org/wikipedia/commons/a/a5/Flower_poster_2.jpg",
}) {
  return (
    <div className="flex flex-row max-w-52 h-28 gap-6">
      <img className="object-cover h-82 w-73 rounded-md" alt="" src={src}></img>

      <div className="flex flex-col justify-center">
        <div className="font-semibold">{title}</div>
        <div className="font-normal">
          Series/S {season}/E {eopisode}
        </div>
        <div className="font-normal">{year}</div>
      </div>
    </div>
  );
}

export default UpdatedTitle;
