import "./TrendingGenreTag.css"

export default function TrendingGenreTag({text}) {
    return (
        <div className="rounded-lg bg-red-600 text-white p-1 whitespace-nowrap lg:whitespace-normal 2xl:whitespace-nowrap transition hover:scale-105">{text}</div>
    );
}