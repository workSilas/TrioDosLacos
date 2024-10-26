import './index.scss';
import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="Home">
      <Nav
        titulo="Bem-Vindo(a)!"
      />

      <div className="sessaoInicialCarrossel">

      </div>

      <div className="sessaoDescubra">
        <h1>CONHEÇA NOSSAS COLEÇÕES</h1>

        <div className="colecoesDisplay">
          <div className="alinharPropiedades">
            <img src="/assets/images/LaçoDecorado.png" alt="Laço Decorado" />
            <p>Laços Decorados</p>
          </div>
          <div className="alinharPropiedades">
            <p> Coleção de laços <br />
              decorados com enfeites diversos </p>
            <Link to={'/'}>VER</Link>
          </div>
        </div>
        <div id='trocaDePopriedades' className="colecoesDisplay">
          <div className="alinharPropiedades">
            <img src="/assets/images/FaixaBebe.png" alt="Faixas de Bêbe" />
            <p>Faixas de Bebê</p>
          </div>
          <div className="alinharPropiedades">
            <p> Faixas estilizadas e <br />
              adoráveis  </p>
            <Link to={'/'}>VER</Link>
          </div>
        </div>
        <div className="colecoesDisplay">
          <div className="alinharPropiedades">
            <img src="/assets/images/LaçoEstampado.png" alt="Laço Estampado" />
            <p>Laços Estampados</p>
          </div>
          <div className="alinharPropiedades">
            <p> Laços  com inumeas estampas, <br />
              coloridas e leves </p>
            <Link to={'/'}>VER</Link>
          </div>
        </div>
        <div id='trocaDePopriedades' className="colecoesDisplay">
          <div className="alinharPropiedades">
            <img src="/assets/images/Kits.png" alt="Kits de Laços" />
            <p>Kits de Laços</p>
          </div>
          <div className="alinharPropiedades">
            <p> Kits com os mais variados <br />
              conjuntos de laços s </p>
            <Link to={'/'}>VER</Link>
          </div>
        </div>
      </div>

      <div className="sessaoEncomendas">
        <p>Não encontrou nada que te agrade? <br />
          Faça sua <b style={{ color: "#FFB099" }}>própria configuração! Use da <br />
            sua imaginação para vestir seu bebê.</b></p>
        <Link to={'/'}>ENCOMENDAR</Link>
      </div>

      <div className="sessoDeVoltaAoCatalogo">
        <div className="alinharComponentes">
          <p>Ainda não viu nossos produtos? <br />
            Explore nosso catálogo recheado <br />
            de acessórios que darão brilho <br />
            ao seu bebê!</p>
          <Link to={'/'}>CATÁLOGO</Link>
        </div>
        <img src="/assets/images/laçoVetorzado.png" alt="Laço" />
      </div>

      <Rodape />
    </div>
  );
}
