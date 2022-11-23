import styles from "./Acerca.module.css";
function Acerca() {
  return (
    <div
      className={`${"flex justify-center items-center min-h-screen h-auto  text-slate-50 p-4 pt-4"} `}
      id="about"
    >
      <div className=" w-4/5">
        <h1 className={styles.title}>¿Que es Acadummies?</h1>
        <p className=" text-2xl font-semibold leading-normal text-gray-900 font-sans ">
          Acadumies nace al ver el descontento de muchos estudiantes de
          Programación, ya sean cursos donde ven una serie de videos o clases
          Sincrónicas. Cada una de estas modalidades tienen sus ventajas y
          desventajas mencionadas por los propios estudiantes, pues bien
          acadummies te ofrece la mejor experiencia de aprendizaje, combinando
          estas dos modalidades. Donde accederás a una plataforma con los videos
          de cada temática de se llevara a cabo junto a clases sincrónicas donde
          podrás aclarar tus dudas de los videos, además aprenderás conceptos
          adicionales que no están en los videos, también en las clases
          sincrónicas habrá talleres, exámenes y retos donde pondrás a prueba
          todo lo aprendido.
        </p>
        <div className=" w-full flex justify-center">
          <a className={styles.btn} href="#about">
            Ver mas
          </a>
        </div>
      </div>
    </div>
  );
}

export default Acerca;
