import './index.scss';
import NavAdm from '../../../components/NavAdm';
import Rodape from '../../../components/Rodape';
import CardProdutoId from '../../../components/CardProdutoId';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function GerenciarProdutos() {

    // Validação ADM

    const [ token, setToken] = useState(null)
    const navigate = useNavigate()
    
    useEffect(() => {
      let token = localStorage.getItem('USUARIO')
      setToken(token)
  
      if ( token == null) {
        navigate("/")
      }
    }, [])

  const [idProduto, setIdProduto] = useState(0)

  return (
    <div className="GerenciarProdutos">
      <NavAdm
        titulo="Gerenciar Produtos"
      />


      <Rodape />
    </div>
  );
}