import "./App.css";
import Navbar from "./Navbar/Navbar";
import RecentlyUpdated from "./RecentlyUpdated/RecentlyUpdated";
import Trending from "./Trending/Trending";
import NewRelease from "./NewRelease/NewRelease";
import Recommended from "./Recommended/Recommended";
import Hero from "./Hero/Hero";

const MOVIE = 0;
const SERIES = 1;

function App() {
  return (
    <div className="flex flex-col">
      <Navbar key={1}/>
      <main className="text-white bg-black">
        <Hero key={2}/>
        <div className="flex flex-col mx-40 mt-20 mb-40 gap-20">
          <RecentlyUpdated key={3}/>
          <Trending key={4}/>
          <NewRelease releaseType={MOVIE} key={5}/>
          <NewRelease releaseType={SERIES} key={6}/>
          <Recommended />
        </div>
      </main>
    </div>
  );
}

export default App;
