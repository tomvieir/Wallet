import { Container } from "./styles";
import { useContext } from "react";
import outcomeImg from "../../assets/outcome.svg"
import incomeImg from '../../assets/income.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from "../../context/TransactionsContexts";
import { formatValuesCurrency } from "../../App";



export function Summary() {
    const { transactions } = useContext(TransactionsContext)

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposit += transaction.amount
            acc.total += transaction.amount
        } 
        else {
            acc.withdraw += transaction.amount
            acc.total -= transaction.amount
        }

        return acc
           
    }, {
        deposit:0,
        withdraw:0,
        total:0
    })
    
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>{formatValuesCurrency(summary.deposit) }</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Entradas" />
                </header>
                <strong>-{formatValuesCurrency(summary.withdraw) }</strong>
            </div>
            <div className="higlight-content">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entradas" />
                </header>
                <strong>{formatValuesCurrency(summary.total)}</strong>
            </div>
        </Container>
    )
}