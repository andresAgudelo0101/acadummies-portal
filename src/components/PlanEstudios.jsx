import CardWeek from "./CardWeek";
import styles from "./PlanEstudios.module.css";
import WeekLogo from "./WeekLogo";
import { weeks } from "./data";
function PlanEstudios() {
  return (
    <div
      className=" h-auto md:min-h-screen md:h-auto  flex flex-col justify-center items-center bg-black text-slate-50"
      id="plan"
    >
      <div className=" h-full w-5/6 md:w-4/5 ">
        <h2 className={styles.title}>Plan de estudios</h2>
        <p className=" text-xl font-light leading-normal tracking-tight text-slate-400 font-sans">
          Estas son todas las tecnologías que verás cada semana.
        </p>
        <div className=" flex flex-col md:flex-row md:flex-wrap md:justify-start h-96 md:h-auto gap-4 overflow-auto pt-2">
          {weeks.map((week) => (
            <CardWeek number={week.semana} key={week.semana}>
              {week.temas.map((tema) => (
                <WeekLogo
                  icon={tema.icono}
                  titulo={tema.titulo}
                  key={tema.icono}
                />
              ))}
            </CardWeek>
          ))}
        </div>
        <div className="mt-4">
          <h2 className=" text-2xl font-semibold text-center text-slate-400">
            Recuerda que puedes acceder a los videos de la semana 1 totalmente
            gratis solo da clic.
          </h2>
          <div className="flex w-full justify-center">
            <a href="#" className={styles.btn}>
              Aquí
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanEstudios;
