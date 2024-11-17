import './index.scss';
import { useEffect } from 'react';
import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';

export default function TermosUso() {
    useEffect(() => {
        document.title = `Trio Dos Laços | Termos`;
    }, []);

    return (
        <div className='TermosUso'>
            <Nav titulo='Termos de Uso' />

            <h3>Bem-vindo(a) ao site Trio dos Laços. Ao acessar ou utilizar este site, você concorda com os termos e condições descritos abaixo. Caso não concorde com algum dos itens, solicitamos que não utilize nossos serviços.</h3>

            <div className='info'>
                <h2>Aceitação dos Termos</h2>

                <p>Ao navegar no site, realizar cadastros ou compras, o usuário concorda integralmente com os presentes Termos de Uso.</p>
            </div>


            <div className='info'>
                <h2>Uso Permitido</h2>

                <p>O usuário compromete-se a:</p>

                <ul>
                    <li>Utilizar o site apenas para fins pessoais e não comerciais.</li>
                    <li>Não praticar atividades ilícitas, como fraudes ou envio de conteúdo ofensivo.</li>
                    <li>Respeitar os direitos de propriedade intelectual descritos neste documento.</li>
                </ul>
            </div>


            <div className='info'>
                <h2>Cadastro e Segurança</h2>

                <ul>
                    <li>Para utilizar algumas funcionalidades, pode ser necessário criar uma conta. O usuário deve fornecer informações verdadeiras e completas.</li>
                    <li>É responsabilidade do usuário manter a confidencialidade de suas credenciais de acesso.</li>
                    <li>O site não se responsabiliza por acessos não autorizados decorrentes de negligência no uso das credenciais.</li>
                </ul>
            </div>


            <div className='info'>
                <h2>Propriedade Intelectual</h2>

                <p>Todo o conteúdo do site, incluindo textos, imagens, gráficos, logotipos, design e código, é de propriedade exclusiva da Trio dos Laços ou de seus licenciantes e está protegido pelas leis de propriedade intelectual. É proibida a reprodução, distribuição ou modificação sem autorização prévia.</p>
            </div>


            <div className='info'>
                <h2>Política de Compras</h2>

                <ul>
                    <li><b>Produtos Disponíveis:</b> Os produtos apresentados no site estão sujeitos à disponibilidade em estoque.</li>
                    <li><b>Preços:</b> Reservamo-nos o direito de corrigir eventuais erros de preços exibidos no site sem aviso prévio.</li>
                    <li><b>Pedidos:</b> Um pedido será confirmado somente após a aprovação do pagamento.</li>
                </ul>
            </div>


            <div className='info'>
                <h2>Limitação de Responsabilidade</h2>

                <ul>
                    <li>Não garantimos que o site estará sempre disponível ou livre de erros.</li>
                    <li>Não nos responsabilizamos por danos causados pelo uso indevido do site ou por problemas técnicos de terceiros.</li>
                </ul>
            </div>


            <div className='info'>
                <h2>Alterações nos Termos</h2>

                <p>Estes Termos de Uso podem ser alterados a qualquer momento. As mudanças serão publicadas nesta página com a data de atualização indicada no final do documento. É responsabilidade do usuário revisar os termos regularmente.</p>
            </div>


            <div className='info'>
                <h2>Contato</h2>

                <p>Caso tenha dúvidas ou solicitações relacionadas sobre estes Termos de Uso, entre em contato:</p>

                <ul>
                    <li><b>Email:</b> triodoslacos@gmail.com</li>
                    <li><b>Telefone:</b> (11) 95901-2302</li>
                </ul>
            </div>

            <h3><b>Última atualização:</b> 17/11/2024</h3>

            <Rodape />
        </div>
    )
}
