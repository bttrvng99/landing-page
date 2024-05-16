import "./Trending";
import TrendingTitles from "./TrendingTitles/TrendingTitles";

export default function Trending() {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex flex-row justify-between">
        <div className="font-bold text-2xl">Trending</div>
        <button className="flex flex-row items-center gap-2 font-semibold opacity-50">
          View All
          <img alt="" src="../../assets/vector-arrow.svg"></img>
        </button>
      </div>
      <div className="grid grid-cols-3 gap-x-8">
        <TrendingTitles
          title={"abc"}
          eopisode={1}
          season={1}
          year={"2018"}
          key={1}
        />
        <TrendingTitles
          title={"abc"}
          eopisode={2}
          season={2}
          year={"2018"}
          key={2}
        />
        <TrendingTitles
          title={"abc"}
          eopisode={3}
          season={3}
          year={"2018"}
          key={3}
        />
      </div>
    </div>
  );
}
