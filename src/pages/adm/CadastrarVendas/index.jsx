import './index.scss';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { withMask } from 'use-mask-input';
import { urlApi } from '../../../config/urlApi';
import { enterKeyUp } from '../../../config/enter';
import Popup from '../../../components/Popup';
import NavAdm from '../../../components/NavAdm';
import Rodape from '../../../components/Rodape';
import CardProdutoId from '../../../components/CardProdutoId';


export default function CadastrarVendas() {

  useEffect(() => {
    document.title = 'Trio Dos Laços | Cadastrar Vendas';
  }, []);

  const keyUpCadastrar = (event) => {
    enterKeyUp(event, cadastrarVenda)
  }

  const keyUpFinalizar = (event) => {
    enterKeyUp(event, finalizarVenda)
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


  //Cadastrar uma Venda
  const [idUsuario, setIdUsuario] = useState(0)
  const [idProduto, setIdProduto] = useState(0)
  const [quantidade, setQuantidade] = useState(0)
  const [data, setData] = useState('')
  const [endereco, setEndereco] = useState('')
  const [total, setTotal] = useState(0)
  const [qtdEstoque, setQtdEstoque] = useState(0)

  // setta o total

  async function buscar() {
    let url = `${urlApi}/tdl/produtos/consultaId/${idProduto}`;

    try {
      let produtos = await axios.post(url);
      setTotal(produtos.data[0].valor * quantidade);
      setQtdEstoque(produtos.data[0].quantidade);
      console.log(qtdEstoque);
    }
    catch (error) {
      setMensagem('Erro: ', error)
      popup()
      return
    }
  }

  useEffect(() => {
    if (idProduto > 0 && quantidade > 0) {
      buscar();
    }
  }, [idProduto, quantidade]);

  async function cadastrarVenda() {
    let dataFormatada = data.replace(/\//g, "-").split('-').reverse().join('-')
    const url = `${urlApi}/tdl/vendas/inserir`
    
    if (endereco.length > 50) {
      setMensagem('Endereço contém caracteres demais')
      popup()
      return
    }
    if (quantidade > qtdEstoque) {
      setMensagem('Estoque insuficiente')
      popup()
      return
    }
    
    try {
      const paramCorpo = {
        "idProduto": idProduto,
        "idUsuario": idUsuario,
        "quantidade": quantidade,
        "total": total,
        "data": dataFormatada,
        "endereco": endereco
      }
      let resp = await axios.post(url, paramCorpo)

      if (resp.data.erro !== undefined && resp.data.erro !== null) {
        setMensagem('Erro: ', resp.data.erro)
        popup()
      }
      else {
        toast.success("Venda adicionada com sucesso!", {
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

        setIdProduto(0)
        setIdUsuario(0)
        setQuantidade(0)
        setTotal(0)
        setData('')
        setEndereco('')
        conferirTodasAsVendas()
      }
    }
    catch (error) {
      setMensagem('Erro ao adicionar venda. Verifique as informações')
      popup()
      return
    }
  }

  //Exibir Tabela com TODAS as Vendas
  const [venda, setVenda] = useState([])

  useEffect(() => {
    conferirTodasAsVendas()
  }, [])

  async function recarregar() {
    await finalizarVenda()
  }

  async function conferirTodasAsVendas() {
    const url = `${urlApi}/tdl/vendas/consultaTodas`

    try {
      let resp = await axios.get(url)
  
      if (resp.data.erro !== null && resp.data.erro !== undefined) {
        setMensagem('Erro: ', resp.data.erro)
        popup()
      }
      else {
        setVenda(resp.data)
      }
    } 
    catch (error) {
      setMensagem('Erro: ', error)
      popup()
      return
    }
  }

  //Finalizar Venda (Marcar como Enviada)
  const [idVenda, setIdVenda] = useState(0)

  async function finalizarVenda() {
    const url = `${urlApi}/tdl/vendas/alterar/${idVenda}`

    try {
      let resp = await axios.put(url)

      if (resp.data.erro !== null && resp.data.erro !== undefined){
        setMensagem("Erro: ", resp.data.erro)
        popup()
      }
      else {
        setIdVenda(0)
        toast.success("Venda finalizada!.", {
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
      }
    }
    catch (error) {
      setMensagem('ID inexistente')
      popup()
      return
    }
  }

  // Encomendas
  const [encomenda, setEncomenda] = useState([])

  async function buscarEncomendas() {
    let url = `${urlApi}/tdl/encomendas/consulta`

    try {
      let resp = await axios.get(url)

      if (resp.data.erro !== null && resp.data.errro !== undefined) {
        setMensagem('Erro: ', resp.data.erro)
        popup()
      }
      else {
        setEncomenda(resp.data)
      }
    } 
    catch (error) {
      setMensagem('Erro: ', error)
      popup()
      return
    }
  }

  useEffect(() => {
    buscarEncomendas()
  }, [])


  return (
    <div className="CadastrarVendas">
      <NavAdm
        titulo="Cadastrar Vendas"
      />

      <div className="sessaoCompleta">
        <div className="sessaoQuadrado">

          <div className="conversao">
            <div className="alinhamento">
              <h1>Cadastre uma venda</h1>
              <p>Data</p>
              <input type="text" placeholder='00/00/0000' onKeyUp={keyUpCadastrar} ref={withMask("99/99/9999")} value={data} onChange={a => setData(a.target.value)} />
              <p>Endereço</p>
              <input type="text" placeholder='Ex: Parque Cocaia' onKeyUp={keyUpCadastrar} value={endereco} onChange={a => setEndereco(a.target.value)} />
              <p>Quantidade</p>
              <input type="text" placeholder='Ex: 1' onKeyUp={keyUpCadastrar} value={quantidade} onChange={a => setQuantidade(a.target.value)} />
              <p>Id do atendente</p>
              <input type="text" placeholder='Ex: 1' onKeyUp={keyUpCadastrar} value={idUsuario} onChange={a => setIdUsuario(a.target.value)} />
            </div>
            <div className="alinhamento">
              <p>ID do produto</p>
              <input type="text" placeholder='0' onKeyUp={keyUpCadastrar} value={idProduto} onChange={e => setIdProduto(e.target.value)} />
              <p>Total: R${total}</p>
              <CardProdutoId
                id={idProduto} token={token}
              />
            </div>
          </div>
          <button onClick={cadastrarVenda}>CADASTRAR</button>
        </div>
      </div>

      <div id='invertido' className="sessaoTabela">
        <h2>Vendas Feitas</h2>

        <div className="tabelaScroll">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Vendedor</th>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Data</th>
                <th>Endereço</th>
                <th>Enviado</th>
              </tr>
            </thead>

            <tbody>
              {venda.map(item => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.usuario_nome.length > 9 ? item.usuario_nome.substr(0, 9) + "." : item.usuario_nome}</td>
                  <td>{item.produto_nome}</td>
                  <td>{item.quantidade}</td>
                  <td>{new Date(item.data).toLocaleDateString()}</td>
                  <td>{item.endereco.length > 20 ? item.endereco.substr(0, 9) + "." : item.endereco}</td>
                  <td>{item.enviado ? 'Sim' : 'Não'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="alinharBotoes">
          <div className="textoInput">
            <p>Id da venda finalizada</p>
            <input type="text" placeholder='ID da venda finalizada' onKeyUp={keyUpFinalizar} value={idVenda} onChange={a => setIdVenda(a.target.value)} />
          </div>
          <button onClick={recarregar}>FINALIZAR</button>
        </div>
      </div>

      <div className="sessaoTabela">
        <h2>Encomendas</h2>

        <div className="tabelaScroll">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Descrião</th>
              </tr>
            </thead>

            <tbody>
              {encomenda.map(item => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.descricao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {mostrarPopup && (
        <Popup mensagem={mensagem} funcao={popup} />
      )}

      <Rodape />
    </div>
  );
}
