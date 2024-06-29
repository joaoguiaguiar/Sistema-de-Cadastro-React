import './Botao.css'

const Botao = (props) =>{

    return(
        <div className='container__botao'>
        <button className='botao'>
        {props.children}
        </button>
        </div>
    )

}

export default Botao