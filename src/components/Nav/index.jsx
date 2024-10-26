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
<<<<<<< HEAD
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
          <Link to={'/'}>ENCOMENDAS</Link>
          <Link to={'/'}>CATÁLOGO</Link>
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
              <li><Link to={'/'}>ENCOMENDAS</Link></li>
              <li><Link to={'/'}>CATÁLOGO</Link></li>
            </ul>
          </div>
        }
    </div >
  )
}
=======
      
    </div>
  );
}
>>>>>>> 00088981646511d55d151e0575b060ffc4d3cb2c
