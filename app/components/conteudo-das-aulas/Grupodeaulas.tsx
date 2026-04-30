import Link from "next/link";
import { MdKeyboardArrowDown, MdPlayCircleOutline } from "react-icons/md";
import Aulas from "./Aulas";

interface AulasProps{
    title:string;
    cursoId:string;
    classes:{
        id:string;
        title:string;
    }[];
}

export default function Grupodeaulas({title, classes, cursoId}:AulasProps){
    return(
        <>
        <button className="flex items-center gap-2 bg-olive-200 p-3 rounded">
            <MdKeyboardArrowDown size={24}/>
            {title}
        </button>
        {classes.map(({id, title}) =>(
            <Aulas
            key={id}
            title={title}
            playerUrl={`/player/${cursoId}/${id}`}/>
        ))}
        </>
    )
}