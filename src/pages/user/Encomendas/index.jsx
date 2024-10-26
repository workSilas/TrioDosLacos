import './index.scss';
import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';
import { useState } from 'react';

export default function Encomendas() {


  return (
    <div className="Encomendas">
      <Nav
        titulo="Encomendas"
      />

      <div className="sessaoInicialEncomendas">
        <h2>Encomende aqui o seu laço, use da sua  <br />
          criatividade e imaginação, para vestir seu <br />
          bebe com conforto e estilo! </h2>
      </div>

      <div className="sessaoExemplos">
        <h1>Exemplos de pedididos</h1>

        <div className="alinharExemplos">
          <div className="cardsExemplos">
            <img src="assets/images/Pelucia.png" alt="Pelúcia" />
          </div>
          <div className="cardsExemplos">
            <img src="assets/images/LaçoPreto.png" alt="laço Preto" />
          </div>
          <div className="cardsExemplos">
            <img src="assets/images/LaçoAzul.png" alt="Laço Azul" />
          </div>
        </div>

      </div>

      <div className="sessaoIncentivo">
        <p>Agora é com você use da sua <br />
          imaginação para criar um laço <br />
          perfeito para você</p>
        <img src="/assets/images/laçoVetorzado.png" alt="Laço" />
      </div>

      <div className="sessaoInpuntsEncomenda">
        <div className="alinhamento">
          <div className="alinharInputs">
            <p>Descreva brevemente o que deseja:</p>
            <input type="text" placeholder='Ex: Laço com listras rosas.'/>
          </div>
          <div className="alinharInputs">
            <p>Imagens de  referência(Opicional)</p>
            <input type="file" accept='image/*' value="" />
          </div>
        </div>
        <button>Enviar</button>
      </div>

      <Rodape />
    </div>
  );
}