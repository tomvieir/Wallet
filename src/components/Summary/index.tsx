import { Container } from "./styles";

import outcomeImg from "../../assets/outcome.svg"

import incomeImg from '../../assets/income.svg'

import totalImg from '../../assets/total.svg'



export function Summary() {

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$ 17.400,00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Entradas" />
                </header>
                <strong>-R$ 4.600,00</strong>
            </div>
            <div className="higlight-content">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entradas" />
                </header>
                <strong>R$ 12.800,00</strong>
            </div>
        </Container>
    )
}