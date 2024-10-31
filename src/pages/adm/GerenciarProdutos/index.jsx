import './index.scss';
import NavAdm from '../../../components/NavAdm';
import Rodape from '../../../components/Rodape';
import CardProdutoId from '../../../components/CardProdutoId';
import { useState } from 'react';

export default function GerenciarProdutos() {

  const [idProduto, setIdProduto] = useState(0)

  return (
    <div className="GerenciarProdutos">
      <NavAdm
        titulo="Gerenciar Produtos"
      />


      <Rodape />
    </div>
  );
}