import './index.scss';
import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';
import { Link } from 'react-router-dom';

export default function GerenciarProdutos() {
  return (
    <div className="GerenciarProdutos">
      <Nav
        titulo="Gerenciar Produtos"
      />


      <Rodape />
    </div>
  );
}