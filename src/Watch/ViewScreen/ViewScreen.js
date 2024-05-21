import { BASE_IMG_URL } from "../../AppConsts";
import "./ViewScreen.css";

export default function ViewScreen({ background }) {
  return (
    <div className="relative">
      <img alt="" className="w-full view_screen" src={BASE_IMG_URL + background} />
    </div>
  );
}
