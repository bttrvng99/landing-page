import "./FormatToggle.css";

export default function FormatToggle({ id, text }) {
  return (
    <div className="flex flex-row">
      <input type="radio" name="format" id={id} value={id}></input>
      <label
        className="text-base border-primary border-2 p-2 rounded-xl text-normal font-normal cursor-pointer transition-colors"
        htmlFor={id}
      >
        {text}
      </label>
    </div>
  );
}
