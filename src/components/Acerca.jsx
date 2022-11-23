import styles from "./Acerca.module.css";
function Acerca() {
  return (
    <div
      className="flex justify-center items-center bg-blue-300 h-auto md:h-4/6 p-4 "
      style={{
        backgroundImage:
          "linear-gradient(to right, #B2FEFA 0%, #0ED2F7  51%, #B2FEFA  100%)",
      }}
      id="about"
    >
      <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-1 gap-4 p-3 md:h-full">
        <div className=" bg-slate-50 p-6 rounded-xl h-96 md:h-full overflow-auto text-center">
          <h1 className={styles.title}>¿Que es Acadummies?</h1>
          <p className=" text-2xl font-semibold leading-normal tracking-tight text-gray-900 font-sans ">
            Acadumies nace al ver el descontento de muchos estudiantes de
            Programación, ya sean cursos donde ven una serie de videos o clases
            Sincrónicas. Cada una de estas modalidades tienen sus ventajas y
            desventajas mencionadas por los propios estudiantes. Pues bien,
            Acadummies fusiona estas dos modalidades para ofrecerte la mejor
            experiencia de aprendizaje al precio mas bajo.
          </p>
        </div>
        <div className="  bg-slate-50 p-6 rounded-xl h-96 md:h-full overflow-auto text-center">
          <h1 className={styles.title}>Metodología </h1>
          <p className=" text-2xl font-semibold leading-normal tracking-tight text-gray-900 font-sans ">
            Acadummies se adapta a cualquier estudiante, el curso está diseñado
            para durar 3 meses, pero cada estudiante puede ir a su ritmo. La
            forma en la que trabajaremos será la siguiente, tenemos una
            plataforma la cual contiene videos con diferentes temáticas
            divididos por semana en total 12 semanas. Cuando finalices los
            videos de una semana tú puedes agendar una clase sincrónica en él
            horario que mejor se adapte a ti. Este encuentro sincrónico lo
            llamaremos Tutoría. Puedes ingresar a esta tutoría tú solo o un
            grupo de personas. En esta tutoría resolverás tus dudas además
            también Obtendrás conocimiento adicional al de los videos, además en
            estas Tutorías realizaremos ejercicios, retos y exámenes que pondrán
            a prueba tus conocimientos adquiridos.
          </p>
        </div>
        <div className="  bg-slate-50 p-6 rounded-xl h-96 md:h-full overflow-auto text-center">
          <h1 className={styles.title}>¿Por qué Acadummies? </h1>
          <p className=" text-2xl font-semibold leading-normal tracking-tight text-gray-900 font-sans ">
            Por experiencia propia he intentado seguir ampliando mis
            conocimientos. ya sean cursos o bootcamps o alternaticas como platzi
            las cuales la opcion mas economica son los cursos, pero hacia falta
            algo lo cual era la interaccion humana. estas alternativas son
            excesivamenmte costosas algunas te cobran cuando consigues un empleo
            suena bien verdad, pues haciendo calculos te cobran aproximadamente
            $2000 dolares un 12% de tu salario durante 3 años, es una barbaridad
            esos precios en los cuales siempre en la mayoria te enseñan lo
            mismo.
          </p>
          <p className=" text-3xl font-bold">Ahora si ¿Por qué Acadummies?</p>
          <div className=" text-left text-2xl font-normal leading-normal tracking-tight text-gray-900 font-sans p-2">
            <b>{"1)."}</b> Acadummies solo cuesta{" "}
            <b className=" text-2xl">$80.000</b> pesos si estas en colombia o{" "}
            <b className=" text-2xl">$19 </b>
            dolares si estas en otro pais de latino america, puedes negociar ese
            precio como todo buen latino que busca una rebaja y estamos
            dispuestos a negociar.<br></br>
            <b>{"2)."}</b> El tiempo es tuyo, ya mencionado anteriormente este
            curso esta planeado para finalizarlo en 3 meses si te excedes mas
            alla de este tiempo no importa no habran recargos.<br></br>
            <b>{"3)."}</b> Puedes agendar las tutorias cuantas veces quieras
            cuanto tiempo necesites lo importante es garantizar tu conocimiento.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Acerca;
