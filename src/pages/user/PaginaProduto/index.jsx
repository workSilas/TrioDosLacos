import './index.scss';
import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function PaginaProduto() {

  const location = useLocation();
  const data = location.state;

  const [produtoEncontrado, setProdutoEncontrado] = useState([]);

  async function buscar() {
    let url = `http://localhost:3030/tdl/produtos/consultaId/${data.id}`;
    let produtos = await axios.post(url);
    setProdutoEncontrado(produtos.data);
  }

  useEffect(() => {
    if (data && data.id) {
      buscar();
    }
  }, [data]);

  return (
    <div className="PaginaProduto">
      <Nav titulo="Produto" />

      {produtoEncontrado.map(item => (
        <div className="informacoesDoproduto" key={item.id}>
          <Link to={'/CatalogoLacosDecorados'}>VOLTAR</Link>
          <div className="alinharInfo">
            <img src={item.imagem} alt="produto" />
            <div className="infoDeCompra">
              <h1>{item.nome}</h1>
              <h2>R${item.valor.toFixed(2)}</h2>
              <div>
                <Link target='_blank' to={`https://wa.me/5511977798407?text=Quero saber mais sobre o produto: ID ${item.id} Nome ${item.nome} Valor: R$${item.valor.toFixed(2)}`}>SOLICITAR</Link>
              </div>
            </div>
          </div>
          <p>Quantidade disponível({item.quantidade})</p>
          <h1>Descrição</h1>
          <p>{item.descricao}</p>
        </div>
      ))}
      <Rodape />
    </div>
  );
}
