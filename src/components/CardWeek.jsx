
function CardWeek({children,number}) {
  return (
    <div className="flex flex-col bg-slate-900  text-center p-1 rounded-lg w-full md:w-64">
      <h2 className=" text-2xl font-bold text-slate-50 ">Semana {number}</h2>
      <div className="flex flex-row justify-center gap-3 p-3">{children}</div>
    </div>
  );
}

export default CardWeek;
