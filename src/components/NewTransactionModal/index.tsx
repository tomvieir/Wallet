import { FormEvent, useState, useContext } from 'react'
import { TransactionsContext } from '../../context/TransactionsContexts'
import Modal from 'react-modal'

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'

import { Container, RadioBox, TransactionTypeContainer } from './styles'
import { OpenModalContext } from '../../context/OpenModalContext'



export function NewTransactionModal() {
  const {createTransaction} = useContext(TransactionsContext)
  const { handleCloseNewTransactionModal, isnewTransactionModalOpen} = useContext(OpenModalContext)


    const [type, setType] = useState('deposit')
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')

    async function handleCrateNewTransaction(event: FormEvent) {
      event.preventDefault()

      await createTransaction({
        type,
        title, 
        amount,
        category 
      })
      
      setType('deposit')
      setTitle('')
      setAmount(0)
      setCategory('')
    }

    return (
        <Modal 
          isOpen={isnewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
          overlayClassName={'react-modal-overlay'}
          className="react-modal-content"
        >
            <button 
              type="button" 
              onClick={handleCloseNewTransactionModal}
              className="react-modal-close"

            >
              <img src={closeImg} alt="Fechar modal" />
            </button>

            <Container onSubmit={handleCrateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input 
                  placeholder='Titulo'
                  value={title}
                  onChange={event => setTitle(event.target.value)}
                />

                <input 
                  type='number' 
                  placeholder='Valor'
                  value={amount}
                  onChange={event => setAmount(Number(event.target.value))} 
                />

                <TransactionTypeContainer>
                    <RadioBox 
                      type="button" 
                      onClick={() => {setType('deposit')}}
                      isActive={type === 'deposit'}
                      activeColor='green'
                    >
                      <img src={incomeImg} alt="Entrada" />
                      <span>Entrada</span>

                    </RadioBox>

                    <RadioBox 
                      type="button"
                      onClick={() => {setType("withdraw")}}
                      isActive={type === 'withdraw'}
                      activeColor='red'
                    >
                      

                      <img src={outcomeImg} alt="Saída" />
                      <span>Saída</span>

                    </RadioBox>
                </TransactionTypeContainer>

                <input 
                  placeholder='Categoria'
                  value={category}
                  onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                  Cadastrar
                </button>

            </Container>
           
        </Modal>
    )
}