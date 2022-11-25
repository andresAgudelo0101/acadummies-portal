function Menu() {
  return (
    <div className=" flex justify-center  bg-black text-xl  p-3 h-auto w-full   fixed md:p-1">
      <div>
      <div className=" flex justify-center w-full">
        <img src="./logo.png" className=" w-20" />
      </div>

      <ul className="flex justify-center h-auto gap-2 text-slate-400  flex-wrap">
        <li>
          <a className="hover:text-slate-50" href="#home">Inicio</a>
        </li>
        <li>
          <a className="hover:text-slate-50" href="#acerca">Acerca</a>
        </li>
        <li>
          <a className="hover:text-slate-50" href="#plan">Plan Estudios</a>
        </li>
        <li>
          <a className="hover:text-slate-50" href="#contacto">Contacto</a>
        </li>
      </ul>
      </div>
    </div>
  );
}

export default Menu;
