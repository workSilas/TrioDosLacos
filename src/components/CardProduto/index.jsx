import './index.scss';
import { useNavigate } from 'react-router-dom';

export default function CardProduto(props) {

  const navigate = useNavigate()

  return (
    <div className="CardProduto">
      <div className="card">
        <div id='imagem' className="separacaoInfo" >
          <img src="/assets/images/kitsDeLacos.png" alt="produto" />
        </div>

        <div className="separacaoInfo">
          <p>#1</p>
          <h5>Laço de Fita Azul Feminino</h5>
          <h5>R$ 25,00</h5>
          <button>VER</button>
        </div>
      </div>
    </div>
  );
}


/*
{props.background}
{props.id}
{props.nome}
{props.valor}
{props.link}

  background:
  id:
  nome:
  valor:
  link:
*/
