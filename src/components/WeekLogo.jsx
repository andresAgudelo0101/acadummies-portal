function WeekLogo(props) {
    return (
        <div className="flex flex-col justify-center">
            <div className="flex justify-center">
              <img src={`./logos/${props.icon}`} width="44" />
            </div>
            <p className="text-lg text-slate-100 font-medium">{props.titulo}</p>
        </div>
    )
}

export default WeekLogo;
