import React, { useState } from 'react';
import Card from "./COMPONENTES/Cards";
import Formulario from "./COMPONENTES/FORMULARIO";
import Header from "./COMPONENTES/Header";
import Marca from './COMPONENTES/Marcas';
import { v4 as uuidv4 } from 'uuid';
import Footer from './COMPONENTES/Footer';

function App() {
  
  const [marcas, setMarcas] = useState([
    { id: uuidv4(),nome: 'Nike', corPrimaria: '#31363F', corSecundaria: '#787A91' },
    { id: uuidv4(),nome: 'Lacoste', corPrimaria: '#66CC99', corSecundaria: '#729762' },
    { id: uuidv4(),nome: 'Adidas', corPrimaria: '#0057B8', corSecundaria: '#FFD700' },
    {id: uuidv4(), nome: 'Puma', corPrimaria: '#FFD700', corSecundaria: '#686D76' }
  ]);

  const inicial = [
    {
      favorito:false,
      id: uuidv4(),
      nome: 'Camisa Nike PSG III 2023/24 Torcedor Pro Masculina',
      categoria: 'Camiseta',
      imagem: 'https://imgnike-a.akamaihd.net/250x250/0270917T.jpg',
      marca: marcas[0].nome
    },
    {
      favorito:false,
      id: uuidv4(),
      nome: 'Camisa Nike Barcelona II 2023/24 Jogador Masculina',
      categoria: 'camiseta',
      imagem: 'https://imgnike-a.akamaihd.net/768x768/02664051.jpg',
      marca: marcas[0].nome
    },
    {
      favorito:false,
      id: uuidv4(),
      nome: 'Jaqueta Nike Sportswear Tech Fleece Windrunner Masculina',
      categoria: 'Blusa',
      imagem: 'https://imgnike-a.akamaihd.net/250x250/026942NX.jpg',
      marca: marcas[0].nome
    },
    {
      favorito:false,
      id: uuidv4(),
      nome: 'Tênis Nike Air VaporMax Flyknit Masculino',
      categoria: 'Tênis',
      imagem: 'https://imgnike-a.akamaihd.net/768x768/0275237T.jpg',
      marca: marcas[0].nome
    },

    {
      favorito:false,
      id: uuidv4(),
      nome: 'CAMISA POLO LACOSTE NOVAK DJOKOVIC',
      categoria: 'Camiseta',
      imagem: 'https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw8d2c9660/DH7311_IXU_24.jpg?imwidth=915&impolicy=product',
      marca: marcas[1].nome
    },
    {
      favorito:false,
      id: uuidv4(),
      nome: 'CAMISA POLO LACOSTE',
      categoria: 'Camiseta',
      imagem: 'https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw848659fb/PH7398_031_24.jpg?imwidth=915&impolicy=product',
      marca: marcas[1].nome
    },
    {
      favorito:false,
      id: uuidv4(),
      nome: 'RELÓGIO NEOCROC VERDE SILICONE',
      categoria: 'Acessórios',
      imagem: 'https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw4b3a076d/2011309_000_24.jpg?imwidth=915&impolicy=product',
      marca: marcas[1].nome
    },
    {
      favorito:false,
      id: uuidv4(),
      nome: 'CAMISETA LACOSTE X NOVAK DJOKOVIC',
      categoria: 'Camiseta',
      imagem: 'https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dwa30ed177/TH7539_001_24.jpg?imwidth=915&impolicy=product',
      marca: marcas[1].nome
    }
,

    {
      favorito:false,
      id: uuidv4(),
      nome: 'CAMISA FLAMENGO I 24/25',
      categoria: 'Camiseta',
      imagem: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5e367970a920455db510eacdaafbb7ef_9366/Camisa_Flamengo_I_24-25_Vermelho_IP8199_01_laydown.jpg',
      marca: marcas[2].nome
    },
    {
      favorito:false,
      id: uuidv4(),
      nome: 'CAMISA 1 REAL MADRID 24/25 AUTHENTIC',
      categoria: 'Camiseta',
      imagem: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/78b62417f1e042aeb25e3353d278de3b_9366/Camisa_1_Real_Madrid_24-25_Authentic_Branco_IX8095_HM1.jpg',
      marca: marcas[2].nome
    },
    {
      favorito:false,
      id: uuidv4(),
      nome: 'CALÇA TREINO TIRO 24',
      categoria: 'Calça',
      imagem: 'https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/717d09f5b271468db7ac9120e8f69306_9366/calca-treino-tiro-24.jpg',
      marca: marcas[2].nome
    },
    {
      favorito:false,
      id: uuidv4(),
      nome: 'BONÉ SPORTSWEAR DAD',
      categoria: 'Acessórios',
      imagem: 'https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/245f00c9c3f547a1aa55066ed48421f7_9366/bone-sportswear-dad.jpg',
      marca: marcas[2].nome
    },
    {
      favorito:false,
      id: uuidv4(),
      nome: 'TÊNIS SUEDE CLASSIC XXI',
      categoria: 'Tênis',
      imagem: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/385378/01/sv01/fnd/BRA/w/1000/h/1000/fmt/png',
      marca: marcas[3].nome
    },
    {
      favorito:false,
      id: uuidv4(),
      nome: 'JAQUETA BOMBER SCUDERIA FERRARI TEAM MASCULINA',
      categoria: 'Jaqueta',
      imagem: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/763598/01/fnd/BRA/w/1000/h/1000/fmt/png',
      marca: marcas[3].nome
    },
    {
      favorito:false,
      id: uuidv4(),
      nome: 'BONÉ ABA CURVA SCUDERIA FERRARI RACE JUVENIL',
      categoria: 'Acessórios',
      imagem: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/025174/01/fnd/BRA/w/1000/h/1000/fmt/png',
      marca: marcas[3].nome
    },
    {
      favorito:false,
      id: uuidv4(),
      nome: 'CHUTEIRA DE CAMPO FUTURE 7 ULTIMATE PUMA X NEYMAR JR',
      categoria: 'CHUTEIRA',
      imagem: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/107839/01/sv01/fnd/BRA/w/1000/h/1000/fmt/png',
      marca: marcas[3].nome
    },

  ];

  const [produtos, setProdutos] = useState(inicial);

  const aoNovoProdutoAdicionado = (produto) => {
    setProdutos([...produtos, produto]);
  };

  function mudarCor(cor, nome) {
    setMarcas(marcas.map(marca => {
      if(marca.nome === nome) {
        return { ...marca, corPrimaria: cor };
      }
      return marca;
    }));
  }

  function deletarProduto(id) {
    setProdutos(produtos.filter(produto => produto.id !== id))
  }



  return (
    <div className="App">
      <Header />
      <Card />
      <Formulario marcas={marcas.map(marca => marca.nome)} aoProdutoAdicionado={produto => aoNovoProdutoAdicionado(produto)} />
      {marcas.map(marca =>
        <Marca
          key={marca.nome}
          nome={marca.nome}
          corPrimaria={marca.corPrimaria}
          corSecundaria={marca.corSecundaria}
          produtos={produtos.filter(produto => produto.marca === marca.nome)}
          aoDeletar={deletarProduto}
          mudarCor={mudarCor} // Passar a função mudarCor para o componente Marca
        />
      )}

     <Footer/>
    </div>
  );
}

export default App;
