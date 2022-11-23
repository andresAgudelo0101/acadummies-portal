function Menu() {
  return (
    <div className="flex items-center justify-between bg-black text-xl  p-3 h-16 w-full  fixed ">
      <div>
        <img src="./logo.png" className=" w-32"/>
      </div>

      <ul className=" flex flex-row justify-center gap-2 text-slate-400 text-2xl">
        <li>
          <a className="hover:text-slate-50">Inicio</a>
        </li>
        <li>
          <a className="hover:text-slate-50">Acerca</a>
        </li>
        <li>
          <a className="hover:text-slate-50">Tematicas</a>
        </li>
        <li>
          <a className="hover:text-slate-50">Contacto</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
