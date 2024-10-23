import './index.scss'
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Entrar() {
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate()

    async function inserir() {
        const paramCorpo = {
            nome: nome,
            senha: senha
        }
        
        const url = 'http://localhost:3030/tdl/usuarios/inserir/'
        let resp = await axios.post(url, paramCorpo)

        if (resp.data.erro !== undefined) {
            alert(resp.data.erro)
        } else {
            localStorage.setItem('USUARIO', resp.data.token)
            navigate('/')
        }
    }

    return (
        <div className="entrar">
            <img src="/assets/images/LogoOficial.png" alt="Logo Trio dos Laços" />

            <div className='inputEntrar'>
                <label>NOME DE USUÁRIO</label>
                <input type="text" value={nome} onChange={a => setNome(a.target.value)}/>
            </div>

            <div className='inputEntrar'>
                <label>SENHA</label>
                <input type="password" value={senha} onChange={a => setSenha(a.target.value)}/>
            </div>

            <div className='botaoEntrarInsert'>
                <p onClick={inserir}>ENTRAR</p>
            </div>

            <div className='botaoCadastrarSelect'>
                <p>Já possui uma conta? 
                <Link to="/cadastro" className='link'>Conectar-se</Link>
                </p>
            </div>
        </div>
    )
}
