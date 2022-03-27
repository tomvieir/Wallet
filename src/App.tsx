import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'

import { NewTransactionModal } from "./components/NewTransactionModal";
import {  TransactionsProvider } from "./context/TransactionsContexts";
import { OpenModalContextProvider } from "./context/OpenModalContext";


Modal.setAppElement('#root')

//value format function
export function formatValuesCurrency(value: number) {
  return Intl.NumberFormat("pt-BR", {
      style: 'currency',
      currency: 'BRL'
  }).format(value)
}

export function App() {

  return (
    <TransactionsProvider>
      <OpenModalContextProvider>
      <Header/>

      <Dashboard />

      <NewTransactionModal/>
      </OpenModalContextProvider>
      <GlobalStyle />
        
    </TransactionsProvider>
  );
}


