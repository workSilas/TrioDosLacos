import './index.scss';

export default function CardProdutoTemplate(props) {

  return (
    <div className="CardProdutoTemplate">
      <div className="card">
        <div id='imagem' className="separacaoInfo">
          <img src={props.imagem} alt="produto" />
        </div>
        <div className="separacaoInfo">
          <p>#x</p>
          <h5>{props.nome.length > 25 ? props.nome.substr(0, 9) + "." : props.nome}</h5>
          <h5>R${props.valor}</h5>
        </div>
      </div>
    </div>
  );
}