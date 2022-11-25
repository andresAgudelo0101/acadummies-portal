function WeekLogo(props) {
    return (
        <div className="flex flex-col justify-center">
            <div className="flex justify-center">
              <img src={`./logos/${props.icon}`} width="44" className=" hover:scale-125 hover:opacity-80"/>
            </div>
            <p className="text-xl font-light leading-normal tracking-tight text-slate-50">{props.titulo}</p>
        </div>
    )
}

export default WeekLogo;
