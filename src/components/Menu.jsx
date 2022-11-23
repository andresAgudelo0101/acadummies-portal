function Menu() {
  return (
    <div className=" flex justify-center  bg-black text-2xl  p-3 h-auto w-full  md:text-3xl ">
      <div>
      <div className=" flex justify-center w-full">
        <img src="./logo.png" className=" w-20 md:w-24" />
      </div>

      <ul className="flex justify-center h-auto gap-2 text-slate-400  flex-wrap">
        <li>
          <a className="hover:text-slate-50">Inicio</a>
        </li>
        <li>
          <a className="hover:text-slate-50">Acerca</a>
        </li>
        <li>
          <a className="hover:text-slate-50">Plan Estudios</a>
        </li>
        <li>
          <a className="hover:text-slate-50">Contacto</a>
        </li>
      </ul>
      </div>
    </div>
  );
}

export default Menu;
