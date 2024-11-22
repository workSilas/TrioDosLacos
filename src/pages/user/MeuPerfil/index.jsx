import './index.scss';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';
import Popup from '../../../components/Popup';
import { urlApi } from '../../../config/urlApi';


export default function MeuPerfil() {

    useEffect(() => {
        document.title = 'Trio Dos Laços | Meu Perfil';

        let token = localStorage.getItem('USUARIO')
        if (token === null || token === undefined) {
            navigate('/')
        }
        else {
        }
    }, []);

    const navigate = useNavigate()

    const [mostrarPopup, setMostrarPopup] = useState(false);
    const [mensagem, setMensagem] = useState("")

    const popup = () => {
        setMostrarPopup(!mostrarPopup)
    }

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [confirmarEmail, setConfirmarEmail] = useState('')
    const [senha, setSenha] = useState('')

    function sair() {
        localStorage.removeItem('USUARIO')
        navigate('/')
    }


    return (
        <div className="MeuPerfil">
            <Nav titulo='Meu Perfil' />

            <div className='perfil'>
                <div className='container'>
                    <div className='titulo'>
                        <h1>Perfil</h1>
                    </div>

                    <div className='info'>
                        <h3>Nome</h3>
                        <h3 className='valor'>{nome}</h3>
                    </div>

                    <div className='info'>
                        <h3>Email</h3>
                        <h3 className='valor'>{email}</h3>
                    </div>

                    <div className='botao' onClick={sair}>Sair</div>
                </div>

                <div className='container'>
                    <div className='titulo'>
                        <h1>Senha</h1>
                    </div>

                    <div className='info'>
                        <h3>Senha</h3>
                        <h3 className='valor'>******</h3>
                    </div>

                    <div className='botao'>Deletar conta</div>
                </div>
            </div>

            <div className='edicoes'>
                <div className='editar'>
                    <h1>Editar Perfil</h1>

                    <div className='info'>
                        <label>Nome</label>
                        <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
                    </div>

                    <div className='info'>
                        <label>E-mail</label>
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div className='info'>
                        <label>Confirmar E-mail</label>
                        <input type="text" value={confirmarEmail} onChange={e => setConfirmarEmail(e.target.value)} />
                    </div>

                    <div className='info'>
                        <label>Informe sua senha</label>
                        <input type="text" value={senha} onChange={e => setSenha(e.target.value)} />
                    </div>

                    <div className='botoes'>
                    <div className='cancelar'>Cancelar</div>
                    <div className='salvar'>Salvar</div>
                    </div>
                </div>

                <div className='editar'>
                    <h1>Alterar senha</h1>

                    <div className='info'>
                        <label>Senha atual</label>
                        <input type="text" />
                    </div>

                    <div className='info'>
                        <label>Nova Senha</label>
                        <input type="text" />
                    </div>

                    <div className='info'>
                        <label>Confirmar nova senha</label>
                        <input type="text" />
                    </div>

                    <div className='botoes'>
                        <div className='cancelar'>Cancelar</div>
                        <div className='salvar'>Salvar</div>
                    </div>
                </div>
            </div>

            {mostrarPopup && (
                <Popup mensagem={mensagem} funcao={popup} />
            )}

            <Rodape />
        </div>
    )
}
