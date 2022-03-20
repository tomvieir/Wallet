import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";



export function TransactionsTable() {

    useEffect(() => {
        api.get('http://localhost:3000/api/transactions')
            .then(response => console.log(response.data))
    }, [])

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
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$ 12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-R$ 1.000,00</td>
                        <td>Despesas</td>
                        <td>22/02/2022</td>
                    </tr>
                    <tr>
                        <td>Pensão</td>
                        <td className="withdraw">-R$ 1.000,00</td>
                        <td>Despesas</td>
                        <td>22/02/2022</td>
                    </tr>
                    <tr>
                        <td>Imposto</td>
                        <td className="withdraw">-R$ 2.000,00</td>
                        <td>Despesas</td>
                        <td>22/02/2022</td>
                    </tr>
                    <tr>
                        <td>Gasolina</td>
                        <td className="withdraw">-R$ 4.000,00</td>
                        <td>Despesas</td>
                        <td>22/02/2022</td>
                    </tr>
                    <tr>
                        <td>Kinder Ovo</td>
                        <td className="withdraw">-R$ 50,00</td>
                        <td>Alimentos</td>
                        <td>22/02/2022</td>
                    </tr>
                    
                </tbody>
            </table>
        </Container>
    )
}