import { Metadata } from "next";
import { title } from "process";
import Headercurso from "../../header-curso/page";
import Iniciarcurso from "../../iniciarcurso/page";
import Aulas from "../../conteudo-das-aulas/Aulas";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  return {
    title: `Curso de ${id}`,
  };
}

export default async function Detalhescursos({ params }: Props) {
  const { id } = await params;

  return (
    <>
      <div className="flex flex-col md:flex-row-reverse gap-5 md:gap-5 md:w-auto left-0">
        <div className="flex-1">
          <Iniciarcurso
            title="Curso de HTML5 Completo e GRÁTIS"
            idClass="1"
            idCurso="1"
            imagemUrl="https://i.ytimg.com/vi/epDCjksKMok/hqdefault.jpg"
          />
        </div>
        <div className="flex-1">
          <Headercurso />
          <Aulas 
          title="Curso de HTML5 - 00 - Site Completo - by Gustavo Guanabara"
          playerUrl="/player/{cursoId}/{classId}"
          />
        </div>
      </div>
    </>
  );
}
