import "./App.css";
import Navbar from "./Navbar/Navbar";
import RecentlyUpdated from "./RecentlyUpdated/RecentlyUpdated";
import Trending from "./Trending/Trending";
import NewRelease from "./NewRelease/NewRelease";
import Recommended from "./Recommended/Recommended";
import Hero from "./Hero/Hero";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="text-white bg-black">
        <Hero />
        <div className="flex flex-col mx-40 mt-20 mb-40 gap-20">
          <RecentlyUpdated />
          <Trending />
          <NewRelease releaseType={0} />
          <NewRelease releaseType={1} />
          <Recommended />
        </div>
      </main>
    </div>
  );
}

export default App;
