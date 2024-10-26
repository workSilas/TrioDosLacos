import './index.scss';
import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';
import { Link } from 'react-router-dom';

export default function Produto() {

  return (
    <div className="Produto">
      <Nav
        titulo="Produto"
      />

      <div className="informacoesDoproduto">
      <Link to={'/'}>VOLTAR</Link>
        <div className="alinharInfo">
        <img src="/assets/images/cardLacosDecorados.png" alt="produto" />
        <div className="infoDeCompra">
          <h1>Laço de Fita Vermelho 
          Feminino</h1>
          <h2>R$25,00</h2>
          <div><Link to={`https://wa.me/5511977798407?text=Olá! Quero fazer um pedido.  Produto: Nome (id) Valor: Valor`}>SOLICITAR</Link></div>
        </div>
        </div>
        <p>Quantidade disponível(0)</p>
        <h1>Descrição</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga earum mollitia, vitae modi, hic soluta molestiae a consectetur dicta enim vel minima nihil. Fugit fuga veritatis quam laudantium, perferendis earum.</p>
      </div>
      
      <Rodape />
    </div>
  );
}