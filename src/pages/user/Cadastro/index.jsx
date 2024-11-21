import './index.scss'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { urlApi } from '../../../config/urlApi'
import Popup from '../../../components/Popup'
import { enterKeyUp } from '../../../config/enter'


export default function Cadastro() {

    useEffect(() => {
        document.title = 'Trio Dos Laços | Cadastro'
    }, [])

    const keyUp = (event) => {
        enterKeyUp(event, inserirUsuario)
    }

    const navigate = useNavigate()

    const [nomeObrigatorio, setNomeObrigatorio] = useState("")
    const [emailObrigatorio, setEmailObrigatorio] = useState("")
    const [senhaObrigatorio, setSenhaObrigatorio] = useState("")

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function inserirUsuario() {
        const paramCorpo = {
            nome: nome,
            email: email,
            senha: senha
        }

        try {
            if (nome === "") {
                setNomeObrigatorio("*Campo Obrigatório")
                return
            }
            if (email === "") {
                setEmailObrigatorio("*Campo Obrigatório")
                return
            }
            if (senha === "") {
                setSenhaObrigatorio("*Campo Obrigatório")
                return
            }
            if (nome !== "") {
                setNomeObrigatorio("")
                return
            }
            if (email !== "") {
                setEmailObrigatorio("")
                return
            }
            if (senha !== "") {
                setSenhaObrigatorio("")
                return
            }

            const url = `${urlApi}/tdl/usuarios/inserir`
            let resp = await axios.post(url, paramCorpo)

            if (resp.data.erro !== undefined || resp.data.erro !== null) {
                setMensagem('Usuário cadastrado com sucesso!')
                popup()
            }
            else {
                setMensagem(resp.data.erro)
                popup()
            }
        }
        catch (error) {
            setMensagem('ERRO. Tente novamente')
            popup()
        }
    }

    const [mostrarPopup, setMostrarPopup] = useState(false);
    const [mensagem, setMensagem] = useState("")

    const popup = () => {
        setMostrarPopup(!mostrarPopup)

        if (mostrarPopup && mensagem === 'Usuário cadastrado com sucesso!') {
            navigate('/Login')
        }
    }

    
    return (
        <div className="Cadastro">

            <Link className='absolute' to={"/"}>VOLTAR</Link>

            <img src="/assets/images/LogoOficial.png" alt="Logo Trio dos Laços" />

            <div className='inputEntrar'>
                <label>NOME<p>{nomeObrigatorio}</p></label>
                <input placeholder='usuário' type="text" onKeyUp={keyUp} value={nome} onChange={a => setNome(a.target.value)} />
            </div>

            <div className='inputEntrar'>
                <label>EMAIL<p>{emailObrigatorio}</p></label>
                <input placeholder='endereço' type="text" onKeyUp={keyUp} value={email} onChange={a => setEmail(a.target.value)} />
            </div>

            <div className='inputEntrar'>
                <label>SENHA <p>{senhaObrigatorio}</p></label>
                <input placeholder='senha' type="password" onKeyUp={keyUp} value={senha} onChange={a => setSenha(a.target.value)} />
            </div>

            <div className='botaoEntrarSelect'>
                <p onClick={inserirUsuario}>CADASTRAR</p>
            </div>

            {mostrarPopup && (
                <Popup mensagem={mensagem} funcao={popup} />
            )}
        </div>
    )
}
