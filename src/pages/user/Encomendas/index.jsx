import './index.scss';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { urlApi } from '../../../config/urlApi';
import { enterKeyUp } from '../../../config/enter';
import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';
import Popup from '../../../components/Popup';


export default function Encomendas() {

  useEffect(() => {
    document.title = 'Trio Dos Laços | Encomendas';
  }, []);

  const keyUp = (event) => {
    enterKeyUp(event, enviarEncomenda)
  }

  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [mensagem, setMensagem] = useState("")

  const popup = () => {
    setMostrarPopup(!mostrarPopup)
  }

  const [encomenda, setEncomenda] = useState("");
  const [obrigatorio, setObrigatorio] = useState("")

  async function enviarEncomenda() {
    const url = `${urlApi}/tdl/encomendas/inserir/`;
    const valores = {
      "descricao": encomenda,
      "imagem": null
    };

    if (encomenda.length > 250) {
      setMensagem('Texto contém caracteres demais (máx.: 250)')
      popup()
      setObrigatorio("")
      return
    }
    if (encomenda.length <= 0) {
      setMensagem('Insira uma descrição')
      popup()
      setObrigatorio("*Obrigatório")
      return
    }
    if (encomenda.length <= 20) {
      setMensagem('O mínimo de caracteres para fazer uma encomenda é 20')
      popup()
      setObrigatorio("")
      return
    }

    try {
      let resp = await axios.post(url, valores);

      if (resp.data.erro !== undefined && resp.data.erro !== null) {
        setMensagem('Erro ao tentar enviar a encomenda', resp.data.erro)
        popup()
      }
      else {
        toast.success(`Encomenda enviada!`, {
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#713200',
          },
          iconTheme: {
            primary: '#1EFF00',
            secondary: '#FFFAEE',
          },
        });
        setObrigatorio("")
      }
    }
    catch (error) {
      setMensagem('ERRO')
      popup()
      return
    }
    setEncomenda("");
  }


  return (
    <div className="Encomendas">
      <Nav titulo="Encomendas" />

      <div className="sessaoInicialEncomendas">
        <h2>Encomende aqui o seu laço, use da sua <br />
          criatividade e imaginação, para vestir seu <br />
          bebe com conforto e estilo! </h2>
      </div>

      <div className="sessaoExemplos">
        <h1>Exemplos de pedidos</h1>

        <div className="alinharExemplos">
          <div className="cardsExemplos">
            <img src="assets/images/Pelucia.png" alt="Pelúcia" />
          </div>
          <div className="cardsExemplos">
            <img src="assets/images/LaçoPreto.png" alt="laço Preto" />
          </div>
          <div className="cardsExemplos">
            <img src="assets/images/LaçoAzul.png" alt="Laço Azul" />
          </div>
        </div>
      </div>

      <div className="sessaoIncentivo">
        <p>Agora é com você use da sua <br />
          imaginação para criar um laço <br />
          perfeito para você</p>
        <img src="/assets/images/laçoVetorzado.png" alt="Laço" />
      </div>

      <div className="sessaoInpuntsEncomenda">
        <div className="alinhamento">
          <div className="alinharInputs">
            <p>Descreva brevemente o que deseja:</p>
            <textarea
              type="text"
              placeholder='Descrição'
              value={encomenda}
              onKeyUp={keyUp}
              onChange={e => setEncomenda(e.target.value)}
            />
            <p className='obrigatorio' >{obrigatorio}</p>
          </div>
        </div>
        {encomenda.length < 20 ?
          <button onClick={enviarEncomenda} >ENVIAR</button>
          : <Link onClick={enviarEncomenda} target='_blank'
            to={`https://wa.me/5511977798407?text=
${encomenda}`}>ENVIAR</Link>}
      </div>

      {mostrarPopup && (
        <Popup mensagem={mensagem} funcao={popup} />
      )}

      <Rodape />
    </div>
  );
}
