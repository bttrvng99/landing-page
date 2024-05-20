import "./App.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar key={1}/>
      <main className="text-white bg-black">
        <Home />
      </main>
    </div>
  );
}

export default App;
