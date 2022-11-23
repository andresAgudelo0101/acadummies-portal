import CardWeek from "./CardWeek";
import styles from "./PlanEstudios.module.css";
import WeekLogo from "./WeekLogo";
import { weeks } from "./data";
function PlanEstudios() {
  return (
    <div className=" h-screen md:min-h-screen md:h-auto flex flex-col justify-center items-center bg-black text-slate-50">
      <div className=" h-full w-full p-3">
        <h2 className={styles.title}>Plan de estudios</h2>
        <div className=" flex flex-col md:grid md:grid-cols-4  h-auto  auto-rows-auto gap-3 overflow-auto pt-2">
          {weeks.map((week) => (
            <CardWeek number={week.semana}>
                {week.temas.map((tema)=>(
                    <WeekLogo icon={tema.icono} titulo={tema.titulo} />
                ))}
            </CardWeek>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlanEstudios;
