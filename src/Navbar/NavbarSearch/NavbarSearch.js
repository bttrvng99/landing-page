import {ReactComponent as Search} from '../../assets/Vector-search.svg'
import "./NavbarSearch.css";

export default function NavbarSearch() {
  return (
    <div className="flex flex-row items-center rounded-full bg-white">
      <form className="flex flex-row items-center">
        <input
          placeholder="Search movie..."
          className="placeholder-black p-1 h-12 bg-none px-6 py-3 overflow-hidden rounded-s-full"
        ></input>
        <button className="p-3 px-6">
          <Search />
        </button>
      </form>
    </div>
  );
}
