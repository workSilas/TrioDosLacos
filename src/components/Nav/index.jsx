import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Nav(props) {

  const [nav, setNav] = useState(false)

  function click() {
    setNav(!nav)
  }

  return (
    <div className="Nav">
      

      <div className="separacao">
      <div className="divisaoComponentesNav">
        <img src="/assets/images/LogoOficial.png" alt="Logo" />
      </div>
      <div className="divisaoComponentesNav">
        <h1>{props.titulo}</h1>
      </div>
      <div className="divisaoComponentesNav">
        <div className="divisaoComponentesNavLinks">
          <Link to={'/'}>INÍCIO</Link>
          <Link to={'/Encomendas'}>ENCOMENDAS</Link>
          <Link to={'/CatalogoLacosDecorados'}>CATÁLOGO</Link>
        </div>
      </div>
      </div>

        {nav === false &&
          <button onClick={click}><img src="/assets/images/mais.png" alt="menu" /></button>
        }

        {nav === true &&
          <div className='sessaoNavMob'>
            <button onClick={click}><img src="/assets/images/fechar.png" alt="fechar" /></button>
            <ul>
              <li><Link to={'/'}>INÍCIO</Link></li>
              <li><Link to={'/Encomendas'}>ENCOMENDAS</Link></li>
              <li><Link to={'/CatalogoLacosDecorados'}>CATÁLOGO</Link></li>
            </ul>
          </div>
        }
    </div >
  )
}

