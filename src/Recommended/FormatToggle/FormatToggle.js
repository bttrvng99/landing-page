import "./FormatToggle.css";

export default function FormatToggle({ id, text }) {
  return (
    <div className="flex flex-row">
      <input type="radio" name="format" id={id} value={id}></input>
      <label
        className="text-base border-red-500 border-2 p-2 rounded-xl text-normal font-normal cursor-pointer"
        htmlFor={id}
      >
        {text}
      </label>
    </div>
  );
}
