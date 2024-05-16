// import { faFont } from "@fortawesome/free-solid-svg-icons";
import "./NavbarSearch.css";

export default function NavbarSearch() {
  console.log("Enter text");
  return (
    <div className="flex flex-row justify-center items-center rounded-full bg-white overflow-hidden">
      <form>
        <input
          placeholder="Search movie..."
          className="placeholder-black p-1 max-w-md h-12 bg-none px-6 py-3 overflow-hidden"
        ></input>
        <button className="p-3 px-6">
          {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
          {/* Search */}
          <img alt="" src="../../../assets/Vector-search.svg"></img>
        </button>
      </form>
      {/* <svg className="w-6 h-6" viewBox="0 0 24 24">
        <path
          fill="#666666"
          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
        />
      </svg> */}
    </div>
  );
}
