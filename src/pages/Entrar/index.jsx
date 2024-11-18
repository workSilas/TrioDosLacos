import './index.scss'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { urlApi } from '../../config/urlApi'


export default function Entrar() {

    const [emailObrigatorio, setEmailObrigatorio] = useState("")
    const [senhaObrigatorio, setSenhaObrigatorio] = useState("")

    useEffect(() => {
        document.title = 'Trio Dos Laços | Login Administrativo';
    }, []);

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate()

    async function validarUsuario() {
        const paramCorpo = {
            email: email,
            senha: senha
        }

        try {
            if (email == "") {
                setEmailObrigatorio("*Campo Obrigatório")
            }

            if (senha == "") {
                setSenhaObrigatorio("*Campo Obrigatório")
            }

            if (email != "") {
                setEmailObrigatorio("")
            }

            if (senha != "") {
                setSenhaObrigatorio("")
            }

            const url = `${urlApi}/tdl/adm/entrar`
            let resp = await axios.post(url, paramCorpo)
            
            if (resp.data.erro !== undefined && resp.data.erro !== null) {
                toast.error(resp.data.erro)
            }
            else {
                localStorage.setItem('ADM', resp.data.token)
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

            <Link className='absolute' to={"/"}>VOLTAR</Link>

            <img src="/assets/images/LogoOficial.png" alt="Logo Trio dos Laços" />

            <div className='inputEntrar'>
                <label>EMAIL<p>{emailObrigatorio}</p></label>
                <input placeholder='usuário' type="text" value={email} onChange={a =>  setEmail(a.target.value)} />
            </div>

            <div className='inputEntrar'>
                <label>SENHA <p>{senhaObrigatorio}</p></label>
                <input placeholder='senha' type="password" value={senha} onChange={a => setSenha(a.target.value)} />
            </div>

            <div className='botaoEntrarSelect'>
                <p onClick={validarUsuario}>ENTRAR</p>
            </div>
        </div>
    )
}
