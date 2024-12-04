import './CampoLista.css'


const CampoLista = (props) => {


    return (
        <fildeset className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </fildeset>
    )

}

export default CampoLista; 