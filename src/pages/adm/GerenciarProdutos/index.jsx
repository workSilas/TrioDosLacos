import './index.scss';
import NavAdm from '../../../components/NavAdm';
import Rodape from '../../../components/Rodape';
import CardProdutoTemplate from '../../../components/CardProdutoTemplate';
import CardProdutoId from '../../../components/CardProdutoId';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { withMask } from 'use-mask-input';


export default function GerenciarProdutos() {

  // Validação ADM

  const [token, setToken] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    let token = localStorage.getItem('USUARIO')
    setToken(token)

    if (token == null) {
      navigate("/")
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

    if (nome.length > 30) {
      toast.error("Defina um nome menor ao produto.")
      return
    }
    if (quantidade > 999) {
      toast.error("O limite de estoque é de 999 produtos.")
      return
    }
    if (descricao.length > 250) {
      toast.error("Descrição muit longa.")
      return
    }
    if (sessaoSelecionada == undefined || sessaoSelecionada == null) {
      toast.error("Defina a sessão.")
      return
    }
    if (imagem == undefined || imagem == null) {
      toast.error("Defina uma imagem.")
      return
    }


    try {
      let valores = {
        "nome": nome,
        "valor": valor.replace(",", "."),
        "quantidade": quantidade,
        "descricao": descricao,
        "sessao": sessaoSelecionada,
        "imagem": imagem
      }

      let url = "http://localhost:3030/tdl/produtos/inserir/"
      let prod = await axios.post(url, valores)
      toast.success(`Novo produto adicionado ao catálogo com sucesso! ID${prod.data.novod}`)

      setSessaoSelecionada("")
      setImagem("")
      setNome("")
      setValor()
      setQuantidade(0)
      setDescricao("")
    }
    catch (error) {
      toast.error("Erro ao adicionar o produto! Verifique as informações.")
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

    if (alterarNome > 30) {
      toast.error("Defina um nome menor ao produto.")
      return
    }
    if (alterarQuantidade > 999) {
      toast.error("O limite de estoque é de 999 produtos.")
      return
    }
    if (alterarDescricao > 250) {
      toast.error("Descrição muit longa.")
      return
    }
    if (sessaoSelecionadaAlterar == undefined || sessaoSelecionadaAlterar == null) {
      toast.error("Defina a sessão.")
      return
    }
    if (alterarImagem == undefined || alterarImagem == null) {
      toast.error("Defina uma imagem.")
      return
    }


    try {
      let valores = {
        "nome": alterarNome,
        "valor": alterarValor.replace(",", "."),
        "quantidade": alterarQuantidade,
        "descricao": alterarDescricao,
        "sessao": sessaoSelecionadaAlterar,
        "imagem": alterarImagem
      }

      let url = `http://localhost:3030/tdl/produtos/alterar/${idProduto}`
      let prod = await axios.put(url, valores)
      toast.success(`Novo produto alterar no catálogo com sucesso!`)

      setSessaoSelecionadaAlterar("")
      setImagem("")
      setNome("")
      setValor(null)
      setQuantidade(0)
      setDescricao("")
    }
    catch (error) {
      toast.error("Erro ao alterar o produto! Verifique as informações.")
    }
  }

  // Deletar Produto

  async function deletarProduto() {
    try {
      let url = `http://localhost:3030/tdl/produtos/delete/${idProduto}`
      let resp = await axios.delete(url)
      setIdProduto(0)
      toast.success("Produto Deletado com sucesso!")
    }
    catch (error) {
      toast.error("Produto não encotnrado.")
    }
  }


  return (
    <div className="GerenciarProdutos">
      <NavAdm
        titulo="Gerenciar Produtos"
      />

      <div className="sessaoCompleta">
        <div className="sessaoQuadrado">
          <div className="conversao">
            <div className="alinhamento">
              <h1>Cadastre um produto</h1>
              <select name="sessoes" id="sessoes" onChange={e => setSessaoSelecionada(e.target.value)}>
                <option value="Faixas de Bebê">Faixas de bebe</option>
                <option value="Laços Estampados">Laços estampados</option>
                <option value="Kits de Laços">Kits de laços</option>
                <option value="Laços Decorados">Laços decorados</option>
              </select>
              <p>Nome</p>
              <input type="text" placeholder='Nome' value={nome} onChange={e => setNome(e.target.value)} />
              <p>Valor</p>
              <input type="text" placeholder='99,99' ref={withMask("99,99")} value={valor} onChange={e => setValor(e.target.value)} />
              <p>Quantidade</p>
              <input type="text" value={quantidade} onChange={e => setQuantidade(e.target.value)} />
              <p>Imagem</p>
              <input type="file" accept='image/*' onChange={enviarImagem} />
              <p>Descrição</p>
              <textarea type="text" placeholder='Laço Elegante...' value={descricao} onChange={e => setDescricao(e.target.value)} />
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

      <Rodape />
    </div>
  );
}