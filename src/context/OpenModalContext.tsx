import { createContext, ReactNode, useState } from "react";


interface OpenModalContextProvider {
    children: ReactNode
}

interface handleModalProps {
    isnewTransactionModalOpen: boolean,
    handleOpenNewTransactionModal: () => void,
    handleCloseNewTransactionModal: () => void
}

export const OpenModalContext = createContext<handleModalProps>(
    {} as handleModalProps
)

export function OpenModalContextProvider({children}: OpenModalContextProvider) {
    const [isnewTransactionModalOpen, setIsNewTransectionOpen] = useState(false)

    function handleOpenNewTransactionModal() {
      setIsNewTransectionOpen(true)
    }

    function handleCloseNewTransactionModal() {
      setIsNewTransectionOpen(false)
    }

    return (
        <OpenModalContext.Provider value={{isnewTransactionModalOpen, handleCloseNewTransactionModal,handleOpenNewTransactionModal}}>
            {children}
        </OpenModalContext.Provider>
    )
}