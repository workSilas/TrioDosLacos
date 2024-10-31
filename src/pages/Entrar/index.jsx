import './index.scss'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'


export default function Entrar() {
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate()

    async function validarUsuario() {
        const paramCorpo = {
            nome: nome,
            senha: senha
        }

        try {
            const url = 'http://localhost:3030/tdl/usuarios/entrar'
            let resp = await axios.post(url, paramCorpo)
            if (resp.data.erro !== undefined && resp.data.erro !== null) {
                toast.error(resp.data.erro)
            }
            else {
                localStorage.setItem('USUARIO', resp.data.token)
                toast.success("Login feito com sucesso!")
                navigate('/Ferramentas')
            }
        }
        catch (error) {
            toast.error("ERRO")
            return
        }


    }

    return (
        <div className="entrar">
            <img src="/assets/images/LogoOficial.png" alt="Logo Trio dos Laços" />

            <div className='inputEntrar'>
                <label>NOME DE USUÁRIO</label>
                <input type="text" value={nome} onChange={a => setNome(a.target.value)} />
            </div>

            <div className='inputEntrar'>
                <label>SENHA</label>
                <input type="password" value={senha} onChange={a => setSenha(a.target.value)} />
            </div>

            <div className='botaoEntrarSelect'>
                <p onClick={validarUsuario}>ENTRAR</p>
            </div>
        </div>
    )
}
