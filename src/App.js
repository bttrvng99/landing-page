import "./App.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import { Outlet } from "react-router-dom";
import { getContacts } from "./routes/contacts";
import { getContent } from "./Watch/Watch";

export async function loader() {
  const content = await getContent();
  return { content };
}

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
