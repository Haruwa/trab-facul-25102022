import logo from '../../assets/logo.png';
import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brocolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abobora.png';

const legumes = {
    topo: {
        titulo: "Detalhe da cesta",
    },
    detalhes: {
        nome: "Cesta de Frutas que, em tese, não são frutas",
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
        preco: "R$ 40,00",
    },
    itens:{
      titulo: "Itens da cesta",
    lista: [
      {
        nome: "Tomate",
        imagem: tomate,
        link: 'https://pt.wikipedia.org/wiki/Tomate#:~:text=O%20tomate%20%C3%A9%20o%20fruto,n%C3%A1uatle%20(l%C3%ADngua%20asteca)%20tomatl.'
      },
      {
        nome: "Brócolis",
        imagem: brocolis,
        link: 'https://pt.wikipedia.org/wiki/Br%C3%B3colis',
      },
      {
        nome: "Batata",
        imagem: batata,
        link: 'https://pt.wikipedia.org/wiki/Batata',
      },
      {
        nome: "Pepino",
        imagem: pepino,
        link: 'https://pt.wikipedia.org/wiki/Pepino',
      },
      {
        nome: "Abóbora",
        imagem: abobora,
        link: 'https://pt.wikipedia.org/wiki/Ab%C3%B3bora',
      }
    ]
    }
}

export default cesta;