import { createContext, useState } from "react";
import { escuro, claro } from "../estilosGlobais";

export const TemaContext = createContext({})

export function TemaProvider({ children }) {

    const [temaAtual, setTemaAtual] = useState('Escuro')

    const temas = {
        'Escuro': escuro,
        'Claro': claro
    }

    return (
        <TemaContext.Provider value={{
            temaAtual,
            setTemaAtual,
            temaEscolhido: temas[temaAtual]
        }}>
            {children}
        </TemaContext.Provider>
    )
}