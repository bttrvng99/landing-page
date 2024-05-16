import "./RecentlyUpdated.css";
import UpdatedTitle from "./UpdatedTitles/UpdatedTitle";

export default function RecentlyUpdated() {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="font-semibold">Recently Updated</div>
      <div className="flex flex-row gap-x-10">
        <UpdatedTitle
          key={1}
        />
        <UpdatedTitle
          key={2}
        />
        <UpdatedTitle
          key={3}
        />
        <UpdatedTitle
          key={4}
        />
      </div>
    </div>
  );
}
