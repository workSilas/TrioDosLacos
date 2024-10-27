import './index.scss';
import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';
import { Link } from 'react-router-dom';

export default function Ferramentas() {
  return (
    <div className="Ferramentas">
      <Nav
        titulo="Ferramentas"
      />


      <Rodape />
    </div>
  );
}