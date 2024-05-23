import { ReactComponent as Play } from '../../../assets/Vector-play-inactive.svg'

export default function EpisodeButton({data}){
    return (
        <button className="transition bg-neutral-300 text-black p-4 rounded-md text-start hover:bg-slate-200 active:bg-red-600 active:text-white flex flex-row items-center gap-x-4"><Play />Episode {data.episode_number}: {data.name}</button>
    );
}