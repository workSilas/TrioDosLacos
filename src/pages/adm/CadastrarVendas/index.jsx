import './index.scss';
import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';
import { Link } from 'react-router-dom';

export default function CadastrarVendas() {
  return (
    <div className="CadastrarVendas">
      <Nav
        titulo="Cadastrar Vendas"
      />


      <Rodape />
    </div>
  );
}