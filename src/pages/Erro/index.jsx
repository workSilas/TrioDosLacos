import './index.scss'
import { Link } from 'react-router-dom'


export default function Erro() {

    return (
        <div className="Erro">
            <div className="blocos">
                <h2>Erro</h2>
                <h1>404</h1>
                <h2>{"Não encontrada:("}</h2>
            </div>
            <div id='quadrado' className="blocos">
                <h3>Vamos voltar?</h3>
                <div><Link to={"/"}>INÍCIO</Link></div>
            </div>
        </div>
    )
}
