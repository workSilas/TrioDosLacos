import './index.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function CardProduto(props) {
  const [produtos, setProdutos] = useState([]);

  async function buscarProdutos() {
    let url = `http://localhost:3030/tdl/produtos/consulta/${props.sessao}`;
    try {
      let produtosEncontrados = await axios.post(url);
      const produtosComImagens = produtosEncontrados.data.map(produto => {
        if (produto.imagem) {
          produto.imagem = `data:image/png;base64,${produto.imagem}`; 
        }
        return produto;
      });
      setProdutos(produtosComImagens);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, [props.sessao]);

  return (
    <div className="CardProduto">
      {produtos.map(item => (
        <div className="card" key={item.id}>
          <div id='imagem' className="separacaoInfo">
            <img src={item.imagem} alt="produto" />
          </div>
          <div className="separacaoInfo">
            <p>#{item.id}</p>
            <h5>{item.nome.length > 25 ? item.nome.substr(0, 9) + "." : item.nome}</h5>
            <h5>R${item.valor.toFixed(2)}</h5>
            <Link to="/PaginaProduto" state={{ id: item.id, name: item.nome }}>VER</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
