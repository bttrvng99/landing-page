import "./DurationLabel.css";

export default function DurationLabel({
  type = 0,
  //   duration = '1',
  //   season = 1,
}) {
  return (
    <div className="flex flex-row gap-2">
      <div className="rounded-lg bg-red-500 text-white p-1">HD</div>
      <div className="rounded-lg border-2 border-red-600 bg-black text-white p-1 whitespace-nowrap">
        {type === 0 ? "1:00:00" : "Season " + 1}
      </div>
    </div>
  );
}
