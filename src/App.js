import "./App.css";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar key={1}/>
      <main className="text-white">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
