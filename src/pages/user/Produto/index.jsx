import './index.scss';
import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Produto() {

  const [produtoEncontrado, setProdutoEncontrado] = useState([])

  async function buscar() {
    let url = `http://localhost:3030/tdl/produtos/consultaId/2`
    let produtos = await axios.post(url)
    setProdutoEncontrado(produtos.data)
  }

  return (
    <div className="Produto">
      <Nav
        titulo="Produto"
      />

      {produtoEncontrado.map(item =>
        <div className="informacoesDoproduto">
          <Link to={'/'}>VOLTAR</Link>
          <div className="alinharInfo">
            <img src={item.imagem} alt="produto" />
            <div className="infoDeCompra">
              <h1>{item.nome}</h1>
              <h2>R${item.valor.toFixed(2)}</h2>
              <div><Link to={`https://wa.me/5511977798407?text=Olá! Quero fazer um pedido.  Produto: Nome ${item.id} Valor: R$${item.valor.toFixed(2)}`}>SOLICITAR</Link></div>
            </div>
          </div>
          <p>Quantidade disponível({item.quantidade})</p>
          <h1>Descrição</h1>
          <p>{item.descricao}</p>
        </div>
      )}

      <Rodape />
    </div>
  );
}