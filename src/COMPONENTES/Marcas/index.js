import React from 'react';
import Produto from './Produto';
import './Marcas.css';

const Marca = ({ nome, corPrimaria, corSecundaria, produtos, aoDeletar, mudarCor }) => {
    const cssCorPrimaria = { borderColor: corPrimaria };
    const cssCorSecundaria = { backgroundColor: corSecundaria };

    return (
        produtos.length > 0 ? (
            <section className='marca' style={cssCorSecundaria}>
                <input
                    type='color'
                    className='input-cor'
                    value={corPrimaria}
                    onChange={evento => mudarCor(evento.target.value, nome)}
                />
                <h3 style={cssCorPrimaria}>{nome}</h3>
                <div className='produtos'>
                    {produtos.map(produto => (
                        <Produto
                            key={produto.id}
                            id={produto.id}
                            corDeFundo={corPrimaria}
                            nome={produto.nome}
                            categoria={produto.categoria}
                            imagem={produto.imagem}
                            marca={produto.marca}
                            aoDeletar={aoDeletar}
                        />
                    ))}
                </div>
            </section>
        ) : ''
    );
};

export default Marca;
