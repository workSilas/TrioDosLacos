import './index.scss';
import { useEffect } from 'react';
import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';

export default function PoliticasPrivacidade() {
    useEffect(() => {
        document.title = `Trio Dos Laços | Políticas`;
    }, []);

    return (
        <div className='PoliticasPrivacidade'>
            <Nav titulo='Políticas de Privacidade' />

            <h3>Nós, da Trio dos Laços, valorizamos a privacidade de nossos clientes e estamos comprometidos em proteger as informações pessoais coletadas. Esta política de privacidade descreve como suas informações são coletadas, usadas e protegidas ao utilizar nossos serviços.</h3>

            <div className='info'>
                <h2>Informações Coletadas</h2>

                <p>Coletamos informações fornecidas por você ao interagir com nosso site, como:</p>

                <ul>
                    <li><b>Dados Pessoais:</b> Nome, e-mail, telefone (quando necessário).</li>
                    <li><b>Dados de Navegação:</b> Endereço IP, tipo de navegador, páginas visitadas, tempo de permanência e cookies.</li>
                </ul>
            </div>


            <div className='info'>
                <h2>Uso das Informações</h2>

                <p>Utilizamos as informações coletadas para:</p>

                <ul>
                    <li>Processar e entregar pedidos realizados em nosso site.</li>
                    <li>Melhorar sua experiência de navegação e personalizar o conteúdo.</li>
                    <li>Enviar comunicações relevantes, como promoções, novidades e atualizações.</li>
                    <li>Cumprir obrigações legais e regulatórias.</li>
                </ul>
            </div>


            <div className='info'>
                <h2>Compartilhamento de Informações</h2>

                <p>Seus dados pessoais poderão ser compartilhados apenas com:</p>

                <ul>
                    <li><b>Parceiros e Fornecedores:</b> Para processar pagamentos, realizar entregas ou enviar comunicações.</li>
                    <li><b>Autoridades Legais:</b> Quando exigido por lei ou para proteger nossos direitos.</li>
                </ul>

                <p><b>Importante:</b> Nunca vendemos ou compartilhamos suas informações com terceiros para fins comerciais.</p>
            </div>


            <div className='info'>
                <h2>Segurança de Dados</h2>

                <p>Adotamos medidas técnicas e organizacionais para proteger seus dados contra acessos não autorizados, perda, destruição ou alteração. Entretanto, ressaltamos que nenhum sistema é completamente seguro, e recomendamos que você proteja suas informações de acesso.</p>
            </div>


            <div className='info'>
                <h2>Direitos do Usuário</h2>

                <p>Você tem o direito de:</p>

                <ul>
                    <li>Acessar, corrigir ou excluir seus dados pessoais.</li>
                    <li>Revogar o consentimento para o uso dos dados a qualquer momento.</li>
                    <li>Solicitar informações sobre como seus dados são tratados.</li>
                </ul>

                <p>Para exercer seus direitos, entre em contato conosco por meio do e-mail triodoslacos@gmail.com.</p>
            </div>


            <div className='info'>
                <h2>Alterações na Política de Privacidade</h2>

                <p>Reservamo-nos o direito de alterar esta política a qualquer momento. Quaisquer alterações serão publicadas nesta página com a data de atualização indicada no final do documento.</p>
            </div>


            <div className='info'>
                <h2>Contato</h2>

                <p>Caso tenha dúvidas ou solicitações relacionadas à nossa política de privacidade, entre em contato:</p>

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
