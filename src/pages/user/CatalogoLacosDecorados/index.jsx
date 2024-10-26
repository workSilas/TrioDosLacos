import './index.scss';
import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';
import { Link } from 'react-router-dom';

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

      <h1>Laços Decorados</h1>
    <div className="sessaoVitrine">

      <div className="cardsExpositivos">
        <div className="cardProduto">
          <div className="imagem" style={{backgroundImage: `url(/assets/images/kitsDeLacos.png)`}} />
          <div className="informacoes">
            <p>#1</p>
            <h2>Laço de Fita Azul Feminino</h2>
            <h2>R$ 25,00</h2> 
            <button>VER</button>
          </div>
        </div>
      </div>
    </div>

      <Rodape />
    </div>
  );
}