import "./DurationLabel.css";

const MOVIE = 0;
const SERIES = 1;

export default function DurationLabel({
  type = 0,
  //   duration = '1',
  //   season = 1,
}) {
  return (
    <div className="flex flex-row gap-2">
      <div className="flex flex-row gap-1 items-center rounded-lg bg-red-600 text-white p-1">
        HD
      </div>
      <div className="flex flex-row gap-1 items-center rounded-lg border-2 border-red-600 bg-black text-white p-1 whitespace-nowrap">
        {type === MOVIE && (
          <img src="../../assets/Vector-time.svg" alt=""></img>
        )}
        {type === MOVIE ? "1:00:00" : "Season " + 1}
      </div>
    </div>
  );
}
