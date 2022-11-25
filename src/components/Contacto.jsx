import styles from "./Contacto.module.css";
function Contacto() {
  return (
    <div
      className="h-5/6 bg-black w-full flex justify-center items-center"
      id="contacto"
    >
      <div className="flex flex-col gap-3 w-5/6 md:w-2/5 ">
        <h1 className={styles.title}>Contáctanos</h1>
        <p className="text-xl font-light leading-normal tracking-tight text-slate-400 font-sans">
          Si estás interesado en adquirir el curso no dudes en contactarnos allí
          te explicaremos los pasos a seguir.
        </p>
        <div className="flex flex-col md:flex-row justify-center w-full h-auto  gap-7">
          <div className="flex flex-col w-full bg-zinc-800 rounded-md p-5">
            <img src="./logos/cel.png" className="w-8" />
            <p className="text-xl font-bold text-slate-50">Llámanos</p>
            <p className="text-normal font-light leading-normal tracking-tight text-slate-400 font-sans">
              Llámanos o contáctanos a nuestro WhatsApp.
            </p>
            <p className="text-normal font-semibold leading-normal tracking-tight text-slate-100 font-sans">
              +57 3108415549
            </p>
          </div>

          <div className="w-full bg-zinc-800 rounded-md p-4">
            <img src="./logos/correo.png" className="w-8" />
            <p className="text-xl font-bold text-slate-50">Escríbenos</p>
            <p className="text-normal font-light leading-normal tracking-tight text-slate-400 font-sans">
              Escríbenos a nuestro correo sobre cualquier inquietud que tengas.{" "}
            </p>
            <p className="text-normal font-semibold leading-normal tracking-tight text-slate-100 font-sans">
              acadummiesbootcamp@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
