import './index.scss';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function CardProdutoId(props) {

  const [produtoEncontrado, setProdutoEncontrado] = useState([])

  async function buscar() {

    if(props.id <= 0){
      return  
    }
    let url = `http://localhost:3030/tdl/produtos/consultaId/${props.id}`
    let produtos = await axios.post(url)
    setProdutoEncontrado(produtos.data)
  }


  return (
    <div className="CardProdutoId">
      {produtoEncontrado.map(item =>
        <div className="card">
          <div id='imagem' className="separacaoInfo" >
            <img src={item.imagem} alt="produto" />
          </div>

          <div className="separacaoInfo">
            <p>#{item.id}</p>
            <h5>{item.nome.length > 25 ? item.nome.substr(0, 9) + "." : item.nome}</h5>
            <h5>R${item.valor.toFixed(2)}</h5>
          </div>
        </div>
      )}
    </div>
  );
}