import './index.scss';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { urlApi } from '../../config/urlApi';
import Popup from '../Popup';


export default function NavAdm(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [mensagem, setMensagem] = useState("")

  const popup = () => {
    setMostrarPopup(!mostrarPopup)

    if (mostrarPopup === true) {
      navigate('/')
    }
  }

  const navigate = useNavigate()

  useEffect(() => {
    let token = localStorage.getItem('ADM')

    if (token === null && token === undefined) {
      navigate('/')
    } 
    else {
      autenticarUsuário(token)
    }
  }, [])

  async function autenticarUsuário(token) {
    let url = `${urlApi}/tdl/adm/autenticar?x-access-token=${token}`

    try {
      let resp = await axios.get(url)

      if (resp.data.erro !== undefined && resp.data.erro !== null) {
        setMensagem('Erro ao autenticar Usuário')
        popup()
        localStorage.removeItem('ADM')
      } 
      else {
        return
      }
    }
    catch (error) {
      setMensagem('Erro ao autenticar Usuário')
      popup()
      localStorage.removeItem('ADM')
    }
  }

  return (
    <header className='Nav'>
      <div className='itens'>
        <img src="/assets/images/LogoOficial.png" alt="logo" className='logo' />

        <div className="divisaoComponentesNav">
          <h1>{props.titulo}</h1>
        </div>

        <nav className={`menu ${window.innerWidth > 912 ? 'visible' : 'hidden'}`}>
          <div className='links'>
            <Link to="/">Inicio</Link>
            <Link to="/Ferramentas">Ferramentas</Link>
            <Link to="/CadastrarVendas">Cadastrar Vendas</Link>
            <Link to="/GerenciarProdutos">Gerenciar Produtos</Link>
          </div>
        </nav>

        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
      </div>

      {isMenuOpen && window.innerWidth <= 912 && (
        <nav className="menu-mobile">
          <div className='links-mobile'>
            <Link to="/">Inicio</Link>
            <Link to="/Ferramentas">Ferramentas</Link>
            <Link to="/CadastrarVendas">Cadastrar Vendas</Link>
            <Link to="/GerenciarProdutos">Gerenciar Produtos</Link>
          </div>

        </nav>
      )}

      {mostrarPopup && (
        <Popup mensagem={mensagem} funcao={popup} />
      )}
    </header>
  );
}
