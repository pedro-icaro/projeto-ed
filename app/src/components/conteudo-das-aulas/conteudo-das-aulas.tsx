import Grupodeaulas, { AulasProps } from "./Grupodeaulas";

interface Grupoaulas {
  classgroups: AulasProps[];
}

export default function ConteudoDasAulas({ classgroups }: Grupoaulas) {
  return (
    <>
      {classgroups.map((classgroup) => {
        <Grupodeaulas
          key={classgroup.title}
          {...classgroup}
        />;
      })}
    </>
  );
}
