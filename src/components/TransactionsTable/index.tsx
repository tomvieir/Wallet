
import { useContext } from "react";
import { formatValuesCurrency } from "../../App";
import { TransactionsContext } from "../../TransactionsContexts";
import { Container } from "./styles";



export function TransactionsTable() {
   const {transactions} = useContext(TransactionsContext) 

   

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>        
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>

                                <td className={transaction.type}>
                                    {formatValuesCurrency(transaction.amount)}                       
                                </td>

                                <td>{transaction.category}</td>

                                <td>
                                   {new Intl.DateTimeFormat('pt-BR').format(
                                       new Date(transaction.createAt)
                                   )}
                                </td>
                            </tr>
                    
                        )
                    })}
                    
                </tbody>
            </table>
        </Container>
    )
}