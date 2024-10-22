import './index.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function PaginaCadastro() {
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <div className="pagina-cadastro">
            <img src="/assets/images/LogoOficial.png" alt="" />

            <div className='cadastro'>
                <label>NOME DE USUÁRIO</label>
                <input type="text" value={nome} onChange={a => setNome(a.target.value)}/>
            </div>

            <div className='cadastro'>
                <label>SENHA</label>
                <input type="password" value={senha} onChange={a => setSenha(a.target.value)}/>
            </div>

            <div className='cadastrar'>
                <p>CADASTRAR</p>
            </div>

            <div className='novoCadastro'>
                <p>Não tem uma conta?
                <Link to="/entrar" className='link'>Criar uma</Link>
                </p>
            </div>
        </div>
    )
}
