import "./DurationLabel.css";
import { MOVIE } from "../../../AppConsts";
import { ReactComponent as Time } from "../../../assets/Vector-time.svg";

export default function DurationLabel({ type = 0, duration, season }) {
  return (
    <div className="flex flex-row gap-2">
      <div className="flex flex-row gap-1 h-8 w-8 items-center rounded-lg bg-red-600 text-white p-1">
        HD
      </div>
      {type === MOVIE ? (
        <div className=" flex flex-row h-8 items-center rounded-lg border-2 border-red-600 bg-black text-white p-1 gap-1 whitespace-nowrap">
          <Time />
          {calculateRuntime(duration)}
        </div>
      ) : (
        <div className="h-8 items-center rounded-lg border-2 border-red-600 bg-black text-white p-1 whitespace-nowrap">
          Season {season}
        </div>
      )}
    </div>
  );
}

function calculateRuntime(duration_minutes) {
  var hours = Math.floor(duration_minutes / 60);
  var minutes = duration_minutes % 60;
  return `${hours}:${(minutes < 10 ? "0" : "")}${minutes}:00`
}
