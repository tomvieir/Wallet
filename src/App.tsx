import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import {  TransactionsProvider } from "./TransactionsContexts";


Modal.setAppElement('#root')

export function formatValuesCurrency(value: number) {
  return Intl.NumberFormat("pt-BR", {
      style: 'currency',
      currency: 'BRL'
  }).format(value)
}

export function App() {
  
  const [isnewTransactionModalOpen, setIsNewTransectionOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransectionOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransectionOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal 
        isOpen={isnewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal} 
      />
      
      <GlobalStyle />
        
    </TransactionsProvider>
  );
}


