import './index.scss'
import { Link } from 'react-router-dom';

export default function Rodape() {

  return (
    <div className='Rodape'>

      <div className="separacaoComponentesRodape">
        <img src="/assets/images/LogoOficial.png" alt="logo" />
      </div>

      <div className='cartaoDOIS'>
        <h2>SUPORTE</h2>

        <div className='sob-titulo'>
          <Link to={"https://wa.me/5511977798407?text=Olá! Gostaria de saber mais sobre seus serviços."}>Contato</Link>
        </div>

      </div>

      <div className='cartaoTRES'>
        <h2>POLÍTICAS</h2>

        <div className='sob-titulo'>
          <p>Termos de Uso</p>
          <p>Políticas de Privacidade</p>
          <p>Políticas de Devolução</p>

        </div>
      </div>


      <div className='cartaoQUATRO'>
        <h2>Siga-nos</h2>
        <div className='redes-sociais'>
          <Link to={"https://www.instagram.com/trio_dos_lacos/"}><img className='insta' src="/assets/images/Instagram.png" alt="instagram" /></Link>
          <Link to={"https://www.facebook.com/profile.php?id=100087909888766"}><img className='face' src="/assets/images/Facebook.png" alt="facebook" /></Link>
        </div>
      </div>



    </div>

  )
}