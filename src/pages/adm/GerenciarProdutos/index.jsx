import './index.scss';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { withMask } from 'use-mask-input';
import { urlApi } from '../../../config/urlApi';
import { enterKeyUp } from '../../../config/enter';
import CardProdutoTemplate from '../../../components/CardProdutoTemplate';
import CardProdutoId from '../../../components/CardProdutoId';
import BotaoCatalogo from '../../../components/BotaoCatalogo';
import NavAdm from '../../../components/NavAdm';
import Rodape from '../../../components/Rodape';
import Popup from '../../../components/Popup';


export default function GerenciarProdutos() {

  useEffect(() => {
    document.title = 'Trio Dos Laços | Gerenciar Produtos';
  }, []);

  const keyUp = (event) => {
    enterKeyUp(event, inserirProduto)
  }

  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [mensagem, setMensagem] = useState("")

  const popup = () => {
    setMostrarPopup(!mostrarPopup)
  }

  // Validação ADM
  const [token, setToken] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    let token = localStorage.getItem('ADM')

    if (token === null || token === undefined) {
      navigate("/")
    }
    else {
      setToken(token)
    }
  }, [])

  const [sessaoSelecionada, setSessaoSelecionada] = useState("")
  const [imagem, setImagem] = useState("")
  const [nome, setNome] = useState("")
  const [valor, setValor] = useState(null)
  const [quantidade, setQuantidade] = useState(0)
  const [descricao, setDescricao] = useState("")

  function enviarImagem(e) {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagem(reader.result);
      };

      reader.readAsDataURL(file);
    }
  }

  async function inserirProduto() {
    if (sessaoSelecionada === "" || sessaoSelecionada === "SELECIONAR") {
      setMensagem('Selecione uma sessão')
      popup()
      return
    }
    if (nome.length > 30) {
      setMensagem('Defina um nome menor ao produto.')
      popup()
      return
    }
    if (quantidade > 999) {
      setMensagem('O limite de estoque é de 999 produtos')
      popup()
      return
    }
    if (descricao.length > 250) {
      setMensagem('Descrição muito longa')
      popup()
      return
    }
    if (sessaoSelecionada === undefined || sessaoSelecionada === null) {
      setMensagem('Defina a sessão')
      popup()
      return
    }
    if (imagem === undefined || imagem === null) {
      setMensagem('Defina uma imagem')
      popup()
      return
    }

    const url = `${urlApi}/tdl/produtos/inserir`

    try {
      let valores = {
        "nome": nome,
        "valor": valor.replace(",", "."),
        "quantidade": quantidade,
        "descricao": descricao,
        "sessao": sessaoSelecionada,
        "imagem": imagem
      }

      let prod = await axios.post(url, valores)

      if (prod.data.erro !== undefined && prod.data.erro !== null) {
        setMensagem('Erro: ', prod.data.erro)
        popup()
      }
      else {
        toast.success(`Novo produto adicionado ao catálogo com sucesso! ID${prod.data.novoId}`, {
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#713200',
          },
          iconTheme: {
            primary: '#1EFF00',
            secondary: '#FFFAEE',
          },
        })

        setSessaoSelecionada("")
        setImagem("")
        setNome("")
        setValor()
        setQuantidade(0)
        setDescricao("")
      }
    }
    catch (error) {
      setMensagem('Erro ao adicionar o produto! Verifique as informações')
      popup()
      return
    }
  }

  // Alterar
  const [idProduto, setIdProduto] = useState("")
  const [sessaoSelecionadaAlterar, setSessaoSelecionadaAlterar] = useState("")
  const [alterarImagem, setAlterarImagem] = useState("")
  const [alterarNome, setAlterarNome] = useState("")
  const [alterarValor, setAlterarValor] = useState(null)
  const [alterarQuantidade, setAlterarQuantidade] = useState(0)
  const [alterarDescricao, setAlterarDescricao] = useState("")

  function alterarImagemBase(e) {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAlterarImagem(reader.result);
      };

      reader.readAsDataURL(file);
    }
  }

  async function alterarProduto() {
    if (sessaoSelecionadaAlterar === "" || sessaoSelecionadaAlterar === "SELECIONAR") {
      setMensagem('Selecione uma sessão')
      popup()
      return
    }
    if (alterarNome > 30) {
      setMensagem('Defina um nome menor ao produto')
      popup()
      return
    }
    if (alterarQuantidade > 999) {
      setMensagem('O limite de estoque é de 999 produtos')
      popup()
      return
    }
    if (alterarDescricao > 250) {
      setMensagem('Descrição muito longa')
      popup()
      return
    }
    if (sessaoSelecionadaAlterar === undefined || sessaoSelecionadaAlterar === null) {
      setMensagem('Defina a sessão')
      popup()
      return
    }
    if (alterarImagem === undefined || alterarImagem === null) {
      setMensagem('Defina uma imagem')
      popup()
      return
    }

    let url = `${urlApi}/tdl/produtos/alterar/${idProduto}`

    try {
      let valores = {
        "nome": alterarNome,
        "valor": alterarValor.replace(",", "."),
        "quantidade": alterarQuantidade,
        "descricao": alterarDescricao,
        "sessao": sessaoSelecionadaAlterar,
        "imagem": alterarImagem
      }

      let prod = await axios.put(url, valores)

      if (prod.data.erro !== null && prod.data.erro !== undefined) {
        setMensagem('Erro: ', prod.data.erro)
        popup()
      }
      else {
        toast.success(`Novo produto alterado no catálogo com sucesso!`, {
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#713200',
          },
          iconTheme: {
            primary: '#1EFF00',
            secondary: '#FFFAEE',
          },
        })

        setSessaoSelecionadaAlterar("")
        setImagem("")
        setNome("")
        setValor(null)
        setQuantidade(0)
        setDescricao("")
        setImagem("")
      }
    }
    catch (error) {
      setMensagem('Erro ao alterar o produto! Verifique as informações')
      popup()
      return
    }
  }

  // Deletar Produto
  async function deletarProduto() {
    let url = `${urlApi}/tdl/produtos/delete/${idProduto}`

    try {
      let resp = await axios.delete(url)

      if (resp.data.erro !== undefined && resp.data.erro !== null) {
        setMensagem('Erro: ', resp.data.erro)
        popup()
      }
      else {
        setIdProduto(0)
        toast.success("Produto Deletado com sucesso!", {
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#713200',
          },
          iconTheme: {
            primary: '#1EFF00',
            secondary: '#FFFAEE',
          },
        })
      }
    }
    catch (error) {
      setMensagem('Produto não encontrado')
      popup()
      return
    }
  }


  return (
    <div className="GerenciarProdutos">
      <NavAdm
        titulo="Gerenciar Produtos"
      />
      <BotaoCatalogo />

      <div className="sessaoCompleta">
        <div className="sessaoQuadrado">
          <div className="conversao">
            <div className="alinhamento">
              <h1>Cadastre um produto</h1>
              <select name="sessoes" id="sessoes" onChange={e => setSessaoSelecionada(e.target.value)}>
                <option>SELECIONAR</option>
                <option value="Faixas de Bebê">Faixas de bebe</option>
                <option value="Laços Estampados">Laços estampados</option>
                <option value="Kits de Laços">Kits de laços</option>
                <option value="Laços Decorados">Laços decorados</option>
              </select>
              <p>Nome</p>
              <input type="text" placeholder='Nome' onKeyUp={keyUp} value={nome} onChange={e => setNome(e.target.value)} />
              <p>Valor</p>
              <input type="text" placeholder='99,99' onKeyUp={keyUp} ref={withMask("99,99")} value={valor} onChange={e => setValor(e.target.value)} />
              <p>Quantidade</p>
              <input type="text" value={quantidade} onKeyUp={keyUp} onChange={e => setQuantidade(e.target.value)} />
              <p>Imagem</p>
              <input type="file" accept='image/*' onChange={enviarImagem} />
              <p>Descrição</p>
              <textarea type="text" placeholder='Laço Elegante...' onKeyUp={keyUp} value={descricao} onChange={e => setDescricao(e.target.value)} />
            </div>
            <div className="alinhamento">
              <CardProdutoTemplate
                imagem={imagem}
                nome={nome}
                valor={valor}
              />
            </div>
          </div>

          <button onClick={inserirProduto}>INSERIR</button>
        </div>
      </div>

      <div id='invertido' className="sessaoCompleta">
        <div className="sessaoQuadrado">

          <div className="conversao">
            <div className="alinhamento">
              <h1>Altere um produto</h1>
              <select name="sessoes" id="sessoes" onChange={e => setSessaoSelecionadaAlterar(e.target.value)}>
                <option>SELECIONAR</option>
                <option value="Faixas de bebe">Faixas de bebe</option>
                <option value="Laços estampados">Laços estampados</option>
                <option value="Kits de laços">Kits de laços</option>
                <option value="Laços decorados">Laços decorados</option>
              </select>
              <p>Nome</p>
              <input type="text" placeholder='Produto' value={alterarNome} onChange={e => setAlterarNome(e.target.value)} />
              <p>Valor</p>
              <input type="text" placeholder='99,99' ref={withMask("99,99")} value={alterarValor} onChange={e => setAlterarValor(e.target.value)} />
              <p>Quantidade</p>
              <input type="text" value={alterarQuantidade} onChange={e => setAlterarQuantidade(e.target.value)} />
              <p>Imagem</p>
              <input type="file" accept='image/*' onChange={alterarImagemBase} />
              <p>Descrição</p>
              <textarea type="text" placeholder='Laço Elegante...' value={alterarDescricao} onChange={e => setAlterarDescricao(e.target.value)} />
            </div>
            <div className="alinhamento">
              <p>ID do produto</p>
              <input type="text" placeholder='0' value={idProduto} onChange={e => setIdProduto(e.target.value)} />
              <CardProdutoId
                id={idProduto}
              />
            </div>
          </div>

          <div className="alinharBotoes">
            <button onClick={alterarProduto}>ALTERAR</button>
            <button onClick={deletarProduto}>DELETAR</button>
          </div>
        </div>
      </div>

      {mostrarPopup && (
        <Popup mensagem={mensagem} funcao={popup} />
      )}

      <Rodape />
    </div>
  );
}
