import './index.scss'
import { Link } from 'react-router-dom';

export default function Rodape() {

  return (
    <div className='Rodape'>

      <div className="separacaoComponentesRodape">
        <Link to={"/Entrar"}><img src="/assets/images/LogoOficial.png" alt="logo" /></Link>
      </div>

      <div className="separacaoComponentesRodape">
        <h1>SUPORTE</h1>
        <Link target='_blank' to={"https://wa.me/5511977798407?text=Olá! Gostaria de saber mais sobre seus serviços."}>Contato</Link>
      </div>

      <div className="separacaoComponentesRodape">
        <h1>POLÍTICAS</h1>
        <Link to={"/"}>Termos de Uso</Link>
      </div>

      <div className="separacaoComponentesRodape">
        <h1>SIGA-NOS</h1>
        <div className="alinhamentoImagens">
          <Link to={"https://www.instagram.com/trio_dos_lacos/"}><img src="/assets/images/Instagram.png" alt="instagam" /></Link>
          <Link to={"https://www.facebook.com/profile.php?id=100087909888766"}><img src="/assets/images/Facebook.png" alt="facebook" /></Link>
        </div>
      </div>
    </div>
  )
}