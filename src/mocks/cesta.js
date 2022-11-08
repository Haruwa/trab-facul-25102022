import logo from '../../assets/logo.png';
import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brocolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abobora.png';

const cesta = {
    topo: {
        titulo: "Detalhe da cesta",
    },
    detalhes: {
        nome: "Cesta Frutas - pelo menos devia ser",
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
        preco: "R$ 40,00",
    },
    itens:{
      titulo: "Itens da cesta",
    lista: [
      {
        id: "01",
        nome: "Tomate",
        imagem: tomate,
      },
      {
        id: "02",
        nome: "Brócolis",
        imagem: brocolis,
      },
      {
        id: "03",
        nome: "Batata",
        imagem: batata,
      },
      {
        id: "04",
        nome: "Pepino",
        imagem: pepino,
      },
      {
        id: "05",
        nome: "Abóbora",
        imagem: abobora,
      }
    ]
    }
}

export default cesta;