import { ReactComponent as Dash } from "../../assets/line-1-dash.svg";
import { ReactComponent as Dot } from "../../assets/ellipse-3-dot.svg";

export default function HeroPagination() {
  return (
    <div className="flex flex-row items-center justify-center gap-4 absolute left-40 right-40 bottom-5">
      <button>
        <Dash />
      </button>
      <button>
        <Dot className="transition hover:stroke-red-600 hover:fill-red-600" />
      </button>
      <button>
        <Dot className="transition hover:stroke-red-600 hover:fill-red-600" />
      </button>
      <button>
        <Dot className="transition hover:stroke-red-600 hover:fill-red-600" />
      </button>
    </div>
  );
}
