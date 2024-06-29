import { AiFillCloseCircle } from 'react-icons/ai';
import './Produtos.css';

const Produto = ({ id, nome, categoria, imagem, marca, corDeFundo, aoDeletar, aoFavoritar, favorito }) => {

    function favoritar() {
        aoFavoritar(id);
    }

    return (
        <div className='produto'>
            <AiFillCloseCircle 
                size={30} 
                className="deletar"
                onClick={() => aoDeletar(id)} 
            />
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }} >
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h4>{categoria}</h4>
                <p className='marca__p'>{marca}</p>
            </div>
        </div>
    );
}

export default Produto;
