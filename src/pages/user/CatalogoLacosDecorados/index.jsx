import './index.scss';
import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';
import { Link } from 'react-router-dom';
import CardProduto from '../../../components/CardProduto';

export default function CatalogoLacosDecorados() {

  return (
    <div className="CatalogoLacosDecorados">
      <Nav
        titulo="Laços Decorados"
      />

      <div className="sessaoInicialCatalogo">
        <h2>Não encontrou nada que te agrade?<br />
          Faça sua <b style={{ color: "#FFB099" }}>própria configuração!</b></h2>
        <div><Link to={'/Encomendas'}>ENCOMENDAR</Link></div>
      </div>

      <div className="sessaoCardsPaginas">
        <div id='Faixas' className="cardsPaginas">
          <h4>Faixas de <br /> Bebê </h4>
          <Link to={'/'}>VER</Link>
        </div>
        <div id='Estampados' className="cardsPaginas">
          <h4>Laços <br /> Estampados</h4>
          <Link to={'/'}>VER</Link>
        </div>
        <div id='Kits' className="cardsPaginas">
          <h4>Kits de <br /> Laços</h4>
          <Link to={'/'}>VER</Link>
        </div>
      </div>

      <div className="tituloDaPagina"><h1>Laços Decorados</h1></div>

      <div className="sessaoVitrine">

        <CardProduto />

      </div>
      <Rodape />
    </div>
  );
}