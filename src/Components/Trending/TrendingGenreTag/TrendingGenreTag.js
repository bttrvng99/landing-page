import "./TrendingGenreTag.css"

export default function TrendingGenreTag({text}) {
    return (
        <div className="rounded-lg bg-primary text-white p-1 whitespace-nowrap transition hover:scale-105">{text}</div>
    );
}