import './index.scss';
import NavAdm from '../../../components/NavAdm';
import Rodape from '../../../components/Rodape';
import GraficoVendas from '../../../components/GraficoTeste/vendas.js';


export default function CadastrarVendas() {
  return (
    <div className="CadastrarVendas">

      <NavAdm
        titulo="Cadastrar Vendas"
      />


      <section className='cadastrar'>

        <div className='container'>
          <div className='info'>
            <h2>Cadastre uma Venda</h2>

            <div className='inputs'>
              <div>
                <label>Data</label>
                <input type="text" placeholder='00/00/00' />
              </div>

              <div>
                <label>Endereço</label>
                <input type="text" placeholder='Ex.: Parque Cocaia' />
              </div>
            </div>

            <div className='inputs'>
              <div>
                <label>Id do atendente</label>
                <input type="number" placeholder='Ex.: 1' />
              </div>

              <div>
                <label>Quantidade</label>
                <input type="number" placeholder='Ex.: 1' />
              </div>
            </div>

            <p>CADASTRAR</p>
          </div>

          <div className='produto'>
            <div className='inputs'>
              <label>Id do Produto</label>
              <input type="number" placeholder='Ex.: 1' />
            </div>

            <div className='componente-laco'>
            //trocar pelo Componente do Laço
            </div>
          </div>
        </div>

      </section>


      <section className='grafico-vendas'>
        {/* Adicionar os Gráficos */}
        <GraficoVendas />
      </section>


      <section className='grafico-encomendas'>
        {/* Adicionar os Gráficos */}
      </section>


      <Rodape />

    </div>
  );
}
