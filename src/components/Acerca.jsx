import styles from "./Acerca.module.css";
function Acerca() {
  return (
    <div
      className="flex justify-center items-center bg-black h-auto p-14  "
      /*style={{
        backgroundImage:
          "linear-gradient(to right, #B2FEFA 0%, #0ED2F7  51%, #B2FEFA  100%)",
      }}*/
      id="acerca"
    >
      <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-1 gap-4 p-3 md:h-full">
        <div className=" p-6 rounded-xl h-96 md:h-full overflow-auto text-center ">
          <h1 className={styles.title}>¿Que es Acadummies?</h1>
          <p className=" text-xl font-light leading-normal tracking-tight text-slate-50 font-sans ">
            Acadumies nace al ver el descontento de muchos estudiantes de
            Programación, ya sean cursos donde ven una serie de videos o clases
            Sincrónicas. Cada una de estas modalidades tienen sus ventajas y
            desventajas mencionadas por los propios estudiantes. Pues bien,
            Acadummies fusiona estas dos modalidades para ofrecerte la mejor
            experiencia de aprendizaje al precio más bajo.
          </p>
        </div>
        <div className="  p-6 rounded-xl h-96 md:h-full overflow-auto text-center">
          <h1 className={styles.title}>Metodología </h1>
          <p className=" text-xl font-light leading-normal tracking-tight text-slate-50 font-sans ">
            Este curso está diseñado para durar 3 meses, pero cada estudiante
            puede ir a su ritmo. Trabajaremos de la siguiente forma, accederás a
            una plataforma la cual contiene videos con diferentes temáticas
            divididos por semana en total 12 semanas. Cuando finalices los
            videos de una semana tú puedes agendar una clase sincrónica en el
            horario que mejor se adapte a ti. Este encuentro sincrónico lo
            llamaremos Tutoría. En esta tutoría resolverás tus dudas, además
            también Obtendrás conocimiento adicional al de los videos.
          </p>
        </div>
        <div className="p-6 rounded-xl h-96 md:h-auto overflow-auto text-center">
          <h1 className={styles.title}>¿Por qué Acadummies? </h1>
          <div className=" text-left text-xl font-light leading-normal tracking-tight text-slate-50 font-sans ">
            <b className="text-amber-400">{"1)."}</b> Acadummies solo cuesta{" "}
            <b className=" text-2xl text-amber-400">$80.000</b> pesos si estás
            en Colombia o <b className=" text-2xl text-amber-400">$19 </b>
            dólares si estás en otro país de latino América, puedes negociar ese
            precio como todo buen latino.<br></br>
            <b className="text-amber-400">{"2)."}</b> El tiempo es tuyo, ya
            mencionado anteriormente este curso está planeado para finalizarlo
            en 3 meses, si te excedes más allá de este tiempo no importa no
            habrá recargos.<br></br>
            <b className="text-amber-400">{"3)."}</b> Puedes agendar las
            tutorías cuantas veces quieras cuanto tiempo necesites, lo
            importante es garantizar tu conocimiento.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Acerca;
