import './index.scss'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Entrar() {
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate()

    async function inserirUsuario() {
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
            alert(`Login finalizado! Token do Usuário: ${resp.data.token}`)
            navigate('/cadastro')
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

            <div className='botaoEntrarSelect'>
                <p onClick={inserirUsuario}>ENTRAR</p>
            </div>
<<<<<<< HEAD
=======

            <div className='botaoCadastrarInsert'>
                <p>Já possui uma conta?
                <Link to="/cadastrar" className='link'>Conectar-se</Link>
                </p>
            </div>
>>>>>>> 00088981646511d55d151e0575b060ffc4d3cb2c
        </div>
    )
}
