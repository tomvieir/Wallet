
import { useContext } from 'react'
import logoImg from '../../assets/logo.png'
import { OpenModalContext } from '../../context/OpenModalContext'
import { Container, Content } from './styles'





export function Header() {
   const {handleOpenNewTransactionModal} = useContext(OpenModalContext)

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Control Wallet" />
                
                <button type="button" onClick={handleOpenNewTransactionModal}>
                    Nova transação
                </button>  
            </Content>
        </Container>
    )
}