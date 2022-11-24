
function CardWeek({children,number}) {
  return (
    <div className="flex flex-col border-blue-400 border-2 text-center p-1 rounded-md w-full md:w-64">
      <h2 className=" text-2xl font-bold">Semana {number}</h2>
      <div className="flex flex-row justify-center gap-3 p-3">{children}</div>
    </div>
  );
}

export default CardWeek;
