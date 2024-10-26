import './index.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Cadastrar() {
    const [token, setToken] = useState(null)
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()

    async function cadastrarUsuario() {
        const url = `http://localhost:3030/tdl/usuarios/consulta?x-acess-token=${token}`
        const paramCorpo = {
            "nome": nome,
            "senha": senha
        }

        let resp = await axios.get(url, paramCorpo)

        if (resp.data.erro !== undefined) {
            alert(resp.data.erro)
        } else {
            alert(`${resp.data}`)
        }
    }

    useEffect(() => {
        let user = localStorage.getItem('USUARIO')
        setToken(user)

        if (user === undefined) {
            navigate('/')
        }
    }, [])

    return (
        <div className="cadastrar">
            <img src="/assets/images/LogoOficial.png" alt="Logo Trio dos Laços" />

            <div className='inputCadastrar'>
                <label>NOME DE USUÁRIO</label>
                <input type="text" value={nome} onChange={a => setNome(a.target.value)}/>
            </div>

            <div className='inputCadastrar'>
                <label>SENHA</label>
                <input type="password" value={senha} onChange={a => setSenha(a.target.value)}/>
            </div>

            <div className='botaoCadastrarInsert'>
                <p onClick={cadastrarUsuario}>CADASTRAR</p>
            </div>

            <div className='botaoEntrarSelect'>
                <p>Já possui uma conta? 
                <Link to="/entrar" className='link'>Conectar-se</Link>
                </p>
            </div>
        </div>
    )
}
