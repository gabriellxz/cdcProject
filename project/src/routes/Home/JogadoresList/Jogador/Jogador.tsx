import { useParams } from "react-router-dom"
import { jogadorDados } from "../../../../services/data"
import './Jogador.css'


export default function Jogador() {

    const params = useParams()
    const jogador = jogadorDados(Number(params.jogadorId))

    return (
        <div className="container-jogador">
            <div>
                <h1>Camisa: {params.jogadorId}</h1>
                <div>
                    <img src={jogador?.imgUrl} alt={jogador?.nome} className="jogador-img" />
                    <p>Nome: {jogador?.nome}</p>
                    <p>Posição: {jogador?.posicao}</p>
                </div>
            </div>
        </div>
    )
}