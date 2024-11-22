import './index.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from '../Popup';
import { urlApi } from '../../config/urlApi';

export default function Nav(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [mensagem, setMensagem] = useState("")

  const popup = () => {
    setMostrarPopup(!mostrarPopup)
  }

  const [cadastrado, setCadastrado] = useState(false)

  useEffect(() => {
    let token = localStorage.getItem('USUARIO')

    if (token === null || token === undefined) {
      setCadastrado(false)
    } 
    else {
      autenticarUsuário(token)
    }
  }, [])

  async function autenticarUsuário(token) {
    let url = `${urlApi}/tdl/usuarios/autenticar?x-access-token=${token}`

    try {
      let resp = await axios.get(url)

      if (resp.data.erro !== undefined && resp.data.erro !== null) {
        setCadastrado(true)
      } else {
        setMensagem('Erro ao autenticar Usuário: ', resp.data.erro)
        popup()
        setCadastrado(false)
      }
    }
    catch (error) {
      setMensagem('Erro ao autenticar Usuário: ', error)
      popup()
      setCadastrado(false)
    }
  }


  return (
    <header className='Nav'>
      <div className='itens'>
        <img src="/assets/images/LogoOficial.png" alt="logo" className='logo' />

        <div className="divisaoComponentesNav">
          <h1>{props.titulo}</h1>
        </div>

        <nav className={`menu ${window.innerWidth > 768 ? 'visible' : 'hidden'}`}>
        {cadastrado ?
            <div className='links'>
              <Link to="/">Início</Link>
              <Link to="/Encomendas">Encomendas</Link>
              <Link to="/CatalogoLacosDecorados">Catálogo</Link>
              <Link to="/Favoritos">Favoritos</Link>
              <Link to="/Login">Login</Link>

                <div className='botao-perfil'>
                  <img src="/assets/images/freepik-export-20241119171750qjuk.png" alt="Perfil do Usuário" />
                  <p>Meu Perfil</p>
                </div>
            </div>
            :
            <div className='links'>
              <Link to="/">Início</Link>
              <Link to="/Encomendas">Encomendas</Link>
              <Link to="/CatalogoLacosDecorados">Catálogo</Link>
              <Link to="/Login">Login</Link>

              <Link to="/Cadastro">
                <div className='botao-perfil'>
                  <img src="/assets/images/freepik-export-20241119171750qjuk.png" alt="Perfil do Usuário" />
                  <p>ENTRAR</p>
                </div>
              </Link>
            </div>
          }
        </nav>

        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
      </div>

      {isMenuOpen && window.innerWidth <= 768 && (
        <nav className="menu-mobile">
          {cadastrado ?
            <div className='links-mobile'>
              <Link to="/">Início</Link>
              <Link to="/Encomendas">Encomendas</Link>
              <Link to="/CatalogoLacosDecorados">Catálogo</Link>
              <Link to="/Favoritos">Favoritos</Link>

              <Link to="/MeuPerfil">
                <div className='botao-perfil'>
                  <img src="/assets/images/freepik-export-20241119171750qjuk.png" alt="Perfil do Usuário" />
                  <p>Meu Perfil</p>
                </div>
              </Link>
            </div>
            :
            <div className='links-mobile'>
              <Link to="/">Início</Link>
              <Link to="/Encomendas">Encomendas</Link>
              <Link to="/CatalogoLacosDecorados">Catálogo</Link>
              <Link to="/Login">Login</Link>

              <Link to="/Cadastro">
                <div className='botao-perfil'>
                  <img src="/assets/images/freepik-export-20241119171750qjuk.png" alt="Perfil do Usuário" />
                  <p>ENTRAR</p>
                </div>
              </Link>
            </div>
          }
        </nav>
      )}

      {mostrarPopup && (
        <Popup mensagem={mensagem} funcao={popup} />
      )}
    </header >
  );
}
