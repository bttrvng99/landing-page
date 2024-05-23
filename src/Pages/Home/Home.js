import RecentlyUpdated from "../../Components/RecentlyUpdated/RecentlyUpdated";
import Trending from "../../Components/Trending/Trending";
import NewRelease from "../../Components/NewRelease/NewRelease";
import Recommended from "../../Components/Recommended/Recommended";
import Hero from "../../Components/Hero/Hero";
import { MOVIE, SERIES } from "../../AppConsts";

function Home() {
  return (
    <main className="text-white">
      <Hero />
      <section className="container mx-auto">
        <RecentlyUpdated />
        <Trending />
        <NewRelease releaseType={MOVIE} />
        <NewRelease releaseType={SERIES} />
        <Recommended />
      </section>
    </main>
  );
}

export default Home;
