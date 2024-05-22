import RecentlyUpdated from "../RecentlyUpdated/RecentlyUpdated";
import Trending from "../Trending/Trending";
import NewRelease from "../NewRelease/NewRelease";
import Recommended from "../Recommended/Recommended";
import Hero from "../Hero/Hero";
import { MOVIE, SERIES } from "../AppConsts";

function Home() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto">
        <RecentlyUpdated />
        <Trending />
        <NewRelease releaseType={MOVIE} />
        <NewRelease releaseType={SERIES} />
        <Recommended />
      </div>
    </div>
  );
}

export default Home;
