import { Metadata } from "next"

interface Props {
    params: Promise<{id:string}>
}

export const  metadata: Metadata = {
    title:"Html 5",
}

export default async function Detalhescursos({params}: Props){
    const {id} = await params;
    return(
        <>
        <h1>Detalhe do curso {id} </h1>
        </>
    )
}