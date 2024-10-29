import './index.scss';
import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';
import { Link } from 'react-router-dom';
import CardProduto from '../../../components/CardProduto';

export default function CatalogoLacosEstampados() {

  return (
    <div className="CatalogoLacosEstampados">
      <Nav
        titulo="Laços Estampados"
      />

      <div className="sessaoInicialCatalogo">
        <h2>Não encontrou nada que te agrade?<br />
          Faça sua <b style={{ color: "#FFB099" }}>própria configuração!</b></h2>
        <div><Link to={'/Encomendas'}>ENCOMENDAR</Link></div>
      </div>

      <div className="sessaoCardsPaginas">
        <div id='um' className="cardsPaginas">
          <h4>Laços <br /> Decorados </h4>
          <Link to={'/CatalogoLacosDecorados'}>VER</Link>
        </div>
        <div id='dois' className="cardsPaginas">
          <h4>Faixas de <br /> Bebê</h4>
          <Link to={'/CatalogoFaixasDeBebe'}>VER</Link>
        </div>
        <div id='tres' className="cardsPaginas">
          <h4>Kits de <br /> Laços</h4>
          <Link to={'/CatalogoKitsDeLacos'}>VER</Link>
        </div>
      </div>

      <div className="tituloDaPagina"><h1>Faixas de Bebê</h1></div>

      <div className="sessaoVitrine">

        <CardProduto
          sessao="Laços Estampados"
        />

      </div>
      <Rodape />
    </div>
  );
}