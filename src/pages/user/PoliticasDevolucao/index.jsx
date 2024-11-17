import './index.scss';
import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';

export default function PoliticasDevolucao() {
    return(
        <div className='PoliticasDevolucao'>
            <Nav titulo='Políticas de Devolução'/>

            <h3>Nós, do Trio dos Laços, queremos garantir sua satisfação com os produtos adquiridos. Por isso, disponibilizamos uma política de devolução que assegura os seus direitos e respeita o Código de Defesa do Consumidor. Leia com atenção os termos abaixo.</h3>

            <div className='info'>
                <h2>Prazo para Devolução</h2>

                <p>Você pode solicitar a devolução de um produto em até <b>7 dias corridos</b> após o recebimento, conforme previsto no artigo 49 do Código de Defesa do Consumidor.</p>
            </div>

            
            <div className='info'>
                <h2>Condições para Devolução</h2>

                <p>Para que a devolução seja aceita, os produtos devem atender às seguintes condições:</p>

                <ul>
                    <li>Estar na <b>embalagem original</b>, sem sinais de uso ou lavagem.</li>
                    <li>Conter todas as etiquetas e acessórios, se aplicável.</li>
                    <li>Estar acompanhado da nota fiscal ou comprovante de compra.</li>
                </ul>

                <p><b>Observação:</b> Produtos personalizados ou feitos sob encomenda, como laços exclusivos para apresentações, <b>não são elegíveis para devolução</b>, exceto em caso de defeito.</p>
            </div>


            <div className='info'>
                <h2>Motivos Aceitos para Devolução</h2>

                <p>Aceitamos devoluções nos seguintes casos:</p>

                <ul>
                    <li><b>Defeitos de fabricação:</b> Caso o produto apresente qualquer defeito.</li>
                    <li><b>Danos no transporte:</b> Produtos danificados durante o envio.</li>
                    <li><b>Insatisfação ou arrependimento:</b> Dentro do prazo de 7 dias corridos, para produtos em perfeito estado.</li>
                </ul>
            </div>


            <div className='info'>
                <h2>Como Solicitar uma Devolução</h2>

                <ol>
                    <li>Envie um e-mail para triodoslacos@gmail.com ou entre em contato pelo telefone (11) 95901-2302.</li>

                    <li>Informe:
                        <ul>
                            <li>Nome completo;</li>
                            <li>Motivo da devolução</li>
                            <li>Fotos do Produto</li>
                        </ul>
                    </li>

                    <li>Aguarde nossa resposta com as instruções para o envio.</li>
                </ol>
            </div>


            <div className='info'>
                <h2>Custos de Envio</h2>

                <ul>
                    <li><b>Frete pago pela empresa:</b> Em caso de devolução por defeitos ou problemas causados pela entrega.</li>
                    <li><b>Frete pago pelo cliente:</b> Para devoluções por arrependimento ou outros motivos não relacionados a defeitos.</li>
                </ul>
            </div>


            <div className='info'>
                <h2>Reembolsos</h2>

                <ul>
                    <li>Após o recebimento e análise do produto devolvido, efetuaremos o reembolso em até <b>7 dias úteis.</b></li>
                    <li>O reembolso será realizado pelo mesmo método de pagamento utilizado na compra.</li>
                </ul>
            </div>


            <div className='info'>
                <h2>Produtos Não Elegíveis para Devolução</h2>

                <ul>
                    <li>Produtos personalizados ou feitos sob medida.</li>
                    <li>Produtos danificados por mau uso.</li>
                </ul>
            </div>


            <div className='info'>
                <h2>Alterações na Política de Devolução</h2>

                <p>Esta política pode ser alterada sem aviso prévio. Recomenda-se que o cliente revise-a regularmente.</p>
            </div>


            <div className='info'>
                <h2>Contato</h2>

                <p>Caso tenha dúvidas ou precise de mais informações, entre em contato conosco:</p>

                <ul>
                    <li><b>Email:</b> triodoslacos@gmail.com</li>
                    <li><b>Telefone:</b> (11) 95901-2302</li>
                </ul>
            </div>

            <h3><b>Última atualização:</b> 17/11/2024</h3>

            <Rodape/>
        </div>
    )
}
