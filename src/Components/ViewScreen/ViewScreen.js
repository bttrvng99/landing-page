import { BASE_IMG_URL } from "../../AppConsts";
import "./ViewScreen.css";

export default function ViewScreen({ background }) {
  return (
    <section className="relative view_screen">
      <img
        alt=""
        className="w-full h-auto view_screen"
        src={`${BASE_IMG_URL}${background}`}
      />
    </section>
  );
}
