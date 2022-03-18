import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { useState } from "react";

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

        <Modal 
          isOpen={isnewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        >

           <h1>nova transação</h1>
        </Modal>

        <GlobalStyle />
        
    </>
  );
}


