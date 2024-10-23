import './index.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Cadastro() {
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <div className="cadastro">
            <img src="/assets/images/LogoOficial.png" alt="Logo Trio dos Laços" />

            <div className='inputCadastro'>
                <label>NOME DE USUÁRIO</label>
                <input type="text" value={nome} onChange={a => setNome(a.target.value)}/>
            </div>

            <div className='inputCadastro'>
                <label>SENHA</label>
                <input type="password" value={senha} onChange={a => setSenha(a.target.value)}/>
            </div>

            <div className='botaoCadastrarSelect'>
                <p>CADASTRAR</p>
            </div>

            <div className='botaoEntrarInsert'>
                <p>Não tem uma conta?
                <Link to="/entrar" className='link'>Criar uma</Link>
                </p>
            </div>
        </div>
    )
}
