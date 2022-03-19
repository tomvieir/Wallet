import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";


Modal.setAppElement('#root')

export function App() {
  
  const [isnewTransactionModalOpen, setIsNewTransectionOpen] = useState(false)

  function handleOpenNewTransactionModal() {
      setIsNewTransectionOpen(true)
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransectionOpen(false)
  }

  return (
    <>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />
        <NewTransactionModal 
          isOpen={isnewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal} 
        />
        <GlobalStyle />
        
    </>
  );
}


