export default function GenreTag({ genre }) {
  return (
    <div className="bg-white text-black rounded-2xl p-2 font-semibold whitespace-nowrap transition hover:text-white hover:bg-primary cursor-pointer">
      {genre}
    </div>
  );
}
