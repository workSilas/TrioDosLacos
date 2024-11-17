import './index.scss';

export default function Popup(props) {
    return (
        <div className='Popup'>
            <div className='popup-fundo'>
                <div className='popup-conteudo'>
                    <p> {props.mensagem} </p>
                    <button onClick={props.funcao}>Fechar</button>
                </div>
            </div>
        </div>
    )
}
