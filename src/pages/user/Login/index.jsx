import './index.scss'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { urlApi } from '../../../config/urlApi'
import { enterKeyUp } from '../../../config/enter'
import Popup from '../../../components/Popup'


export default function Login() {

    useEffect(() => {
        document.title = 'Trio Dos Laços | Login';
    }, []);

    const keyUp = (event) => {
        enterKeyUp(event, validarUsuario)
    }

    const navigate = useNavigate()

    const [emailObrigatorio, setEmailObrigatorio] = useState("")
    const [senhaObrigatorio, setSenhaObrigatorio] = useState("")

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function validarUsuario() {
        const paramCorpo = {
            email: email,
            senha: senha
        }

        try {
            if (email === "") {
                setEmailObrigatorio("*Campo Obrigatório")
            }

            if (senha === "") {
                setSenhaObrigatorio("*Campo Obrigatório")
            }

            if (email !== "") {
                setEmailObrigatorio("")
            }

            if (senha !== "") {
                setSenhaObrigatorio("")
            }

            const url = `${urlApi}/tdl/usuarios/entrar`
            let resp = await axios.post(url, paramCorpo)

            if (resp.data.erro !== undefined || resp.data.erro !== null) {
                localStorage.setItem('USUARIO', resp.data.token)
                setMensagem('Login feito com sucesso!')
                popup()
            }
            else {
                setMensagem('Erro: ', resp.data.erro)
                popup()
            }
        }
        catch (error) {
            setMensagem('ERRO: ' + error)
            popup()
        }
    }

    const [mostrarPopup, setMostrarPopup] = useState(false);
    const [mensagem, setMensagem] = useState("")

    const popup = () => {
        setMostrarPopup(!mostrarPopup)

        if (mostrarPopup === true  && mensagem === 'Login feito com sucesso!') {
            navigate('/')
        }
    }


    return (
        <div className="Login">

            <Link className='absolute' to={"/"}>VOLTAR</Link>

            <img src="/assets/images/LogoOficial.png" alt="Logo Trio dos Laços" />

            <div className='inputEntrar'>
                <label>EMAIL<p>{emailObrigatorio}</p></label>
                <input placeholder='usuário' type="text" onKeyUp={keyUp} value={email} onChange={a => setEmail(a.target.value)} />
            </div>

            <div className='inputEntrar'>
                <label>SENHA <p>{senhaObrigatorio}</p></label>
                <input placeholder='senha' type="password" onKeyUp={keyUp} value={senha} onChange={a => setSenha(a.target.value)} />
            </div>

            <div className='botaoEntrarSelect'>
                <p onClick={validarUsuario}>ENTRAR</p>
            </div>

            {mostrarPopup && (
                <Popup mensagem={mensagem} funcao={popup}/>
            )}
        </div>
    )
}
