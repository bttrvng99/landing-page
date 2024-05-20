import RecentlyUpdated from "../RecentlyUpdated/RecentlyUpdated";
import Trending from "../Trending/Trending";
import NewRelease from "../NewRelease/NewRelease";
import Recommended from "../Recommended/Recommended";
import Hero from "../Hero/Hero";
import { MOVIE, SERIES } from "../AppConsts";

function Home() {
  return (
    <div>
      <Hero key={2} />
      <div className="flex flex-col mx-40 mt-20 mb-40 gap-20">
        <RecentlyUpdated key={3} />
        <Trending key={4} />
        <NewRelease releaseType={MOVIE} key={5} />
        <NewRelease releaseType={SERIES} key={6} />
        <Recommended />
      </div>
    </div>
  );
}

export default Home;
