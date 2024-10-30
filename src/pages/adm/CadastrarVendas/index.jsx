import './index.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import NavAdm from '../../../components/NavAdm';
import Rodape from '../../../components/Rodape';


export default function CadastrarVendas() {

  //Cadastrar uma Venda
  const [idUsuario, setIdUsuario] = useState(0)
  const [idProduto, setIdProduto] = useState(0)
  const [quantidade, setQuantidade] = useState(0)
  const [data, setData] = useState('')
  const [endereco, setEndereco] = useState('')
  const [total, setTotal] = useState(0)
  const [nomeUsuario, setNomeUsuario] = useState('')
  const [vendaId, setVendaId] = useState(0)
  const [cadastroFinalizado, setCadastroFinalizado] = useState(false)

  useEffect(() => {
    descobrirNome()
  }, [nomeUsuario])

  async function descobrirNome() {
    const url = `http://localhost:3030/tdl/vendas/consultaTodas/`
    let resp = await axios.get(url)

    if (resp.data.erro !== undefined) {
      alert(resp.data.erro)
    }
    else {
      setNomeUsuario(resp.data.usuario_nome)
    } 
  }

  useEffect(() => {
    descobrirTotal()
  }, [total, idProduto, quantidade])

  async function descobrirTotal() {

    if (idProduto !== 0 && idProduto > 0) {
      const url = `http://localhost:3030/tdl/produtos/consulta/${idProduto}`
      let resp = await axios.get(url)

      if (resp.data.erro !== undefined) {
        alert(resp.data.erro)
      }
      else {
        let valorTotal = resp.data.valor * quantidade
        setTotal(valorTotal.toFixed(2))
      }
    }

  }

  async function cadastrarVenda() {
    const url = `http://localhost:3030/tdl/vendas/inserir/`
    const paramCorpo = {
      "idProduto": idProduto,
      "idUsuario": idUsuario,
      "quantidade": quantidade,
      "total": total,
      "data": data,
      "endereco": endereco
    }

    let resp = await axios.post(url, paramCorpo)

    if (resp.data.erro !== undefined) {
      alert(resp.data.erro)
    }
    else {
      setVendaId(resp.data.novoId)
      cadastroRealizado()

      setIdProduto(0)
      setIdUsuario(0)
      setQuantidade(0)
      setTotal(0)
      setData('')
      setEndereco('')
    }
  }

  const cadastroRealizado = () => {
    setCadastroFinalizado(!cadastroFinalizado)
  }


  //Exibir Tabela com TODAS as Vendas
  const [venda, setVenda] = useState([])

  useEffect(() => {
    conferirTodasAsVendas()
  }, [venda])

  async function conferirTodasAsVendas() {
    const url = `http://localhost:3030/tdl/vendas/consultaTodas/`
    let resp = await axios.get(url)

    if (resp.data.erro !== undefined) {
      alert(resp.data.erro)
    }
    else {
      setVenda(resp.data)
    }
  }


  //Finalizar Venda (Marcar como Enviada)
  const [idVenda, setIdVenda] = useState(0)
  const [finalizada, setFinalizada] = useState(false)

  async function finalizarVenda() {
    const url = `http://localhost:3030/tdl/vendas/alterar/${idVenda}`
    let resp = await axios.put(url)

    if (resp.data.erro !== undefined) {
      alert(resp.data.erro)
    }
    else {
      vendaFinalizada()
    }
  }

  const vendaFinalizada = () => {
    setFinalizada(!finalizada)
  }


  return (
    <div className="CadastrarVendas">

      <NavAdm
        titulo="Cadastrar Vendas"
      />


      <section className='VendaCadastro'>

        <div className='container'>
          <div className='info'>
            <h2>Cadastre uma Venda</h2>

            <div className='inputs'>
              <div>
                <label>Data</label>
                <input type="text" placeholder='00/00/00' value={data} onChange={a => setData(a.target.value)} />
              </div>

              <div>
                <label>Endereço</label>
                <input type="text" placeholder='Ex.: Parque Cocaia' value={endereco} onChange={a => setEndereco(a.target.value)} />
              </div>
            </div>

            <div className='inputs'>
              <div>
                <label>Id do atendente</label>
                <input type="number" placeholder='Ex.: 1' value={idUsuario} onChange={a => setIdUsuario(a.target.value)} />
                <label className='labels'>Nome: {nomeUsuario} (usuário)</label>
              </div>

              <div>
                <label>Quantidade</label>
                <input type="number" placeholder='Ex.: 1' value={quantidade} onChange={a => setQuantidade(a.target.value)} />
                <label className='labels'>Total: R$ {total} </label>
              </div>
            </div>

            <p onClick={cadastrarVenda}>CADASTRAR</p>
          </div>

          {cadastroFinalizado && (
            <div className='pop-up'>
              <p className='mensagem'>Venda adicionada! ID: {vendaId}</p>
              <p className='botao' onClick={cadastroRealizado}>FECHAR</p>
            </div>
          )}

          <div className='produto'>
            <div className='inputs'>
              <label>Id do Produto</label>
              <input type="number" placeholder='Ex.: 1' value={idProduto} onChange={a => setIdProduto(a.target.value)} />
            </div>

            <div className='componente-laco'>
            //trocar pelo Componente do Laço
            </div>
          </div>
        </div>

      </section>


      <section className='VendaTabela'>

        <h2>Vendas Feitas</h2>

        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Comprador</th>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Total</th>
              <th>Data</th>
              <th>Endereço</th>
              <th>Enviado</th>
            </tr>
          </thead>

          <tbody>
            {venda.map(item => (
              <tr>
                <td>{item.id}</td>
                <td>{item.usuario_nome}</td>
                <td>{item.produto_nome}</td>
                <td>{item.quantidade}</td>
                <td>{item.total}</td>
                <td>{item.data}</td>
                <td>{item.endereco}</td>
                <td>{item.enviado ? 'Sim' : 'Não'}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className='finalizar-venda'>
          <div className='id-venda'>
            <label>Id da venda finalizada</label>
            <input type="number" placeholder='Ex.: 1' value={idVenda} onChange={a => setIdVenda(a.target.value)} />
          </div>

          <div className='botao' onClick={finalizarVenda}>
            Finalizar
          </div>
        </div>

        {finalizada && (
          <div className='pop-up'>
            <p className='mensagem'>Venda finalizada com sucesso!</p>
            <p className='botao' onClick={vendaFinalizada}>FECHAR</p>
          </div>
        )}

      </section>


      <Rodape />

    </div>
  );

}
