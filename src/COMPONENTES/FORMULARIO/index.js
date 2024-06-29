import { useState } from 'react';
import Botao from './Botao';
import CampoTexto from './CampoTexto';
import CampoLista from './CampoLista';
import './Formulario.css';

const Formulario = (props) => {
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagem, setImagem] = useState('');
    const [marca, setMarca] = useState('');

    const categorias = ['Tênis', 'Camiseta', 'Blusa', 'Calça', 'Jaqueta', 'Acessórios'];


    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoProdutoAdicionado({
            nome,
            categoria,
            imagem,
            marca
        });
        //limpando quando cadastrar card
        setNome('');
        setCategoria('');
        setImagem('');
        setMarca('');
    };

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criação dos cards</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome do produto"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
               
               <CampoLista
                    obrigatorio={true}
                    label="Categoria"
                    itens={categorias}
                    valor={categoria}
                    aoAlterado={valor => setCategoria(valor)}
                />

                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço do produto"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                {props.marcas && (
                    <CampoLista
                        obrigatorio={true}
                        label="Escolha a marca"
                        itens={props.marcas}
                        valor={marca}
                        aoAlterado={valor => setMarca(valor)}
                    />
                )}
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );
};

export default Formulario;
