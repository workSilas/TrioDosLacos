import './index.scss';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function CardProduto(props) {

  const [produtos, setProdutos] = useState([])

  async function buscarProdutos() {
    let url = `http://localhost:3030/tdl/produtos/consulta/${props.sessao}`
    let produtosEncontrados = await axios.post(url)
    setProdutos(produtosEncontrados.data)
  }

  useEffect(() => {
    buscarProdutos()
  },[])

  const navigate = useNavigate()

  return (
    <div className="CardProduto">
      {produtos.map(item =>
        <div className="card">
          <div id='imagem' className="separacaoInfo" >
            <img src={item.imagem} alt="produto" />
          </div>

          <div className="separacaoInfo">
            <p>#{item.id}</p>
            <h5>{item.nome.length > 25 ? item.nome.substr(0, 9) + "." : item.nome}</h5>
            <h5>R${item.valor.toFixed(2)}</h5>
            <button >VER</button>
          </div>
        </div>
      )}

    </div>
  );
}