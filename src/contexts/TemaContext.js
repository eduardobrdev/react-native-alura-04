const { createContext, useState } = require("react");
import { escuro, claro } from "../estilosGlobais";

export const TemaContext = createContext({})

export function TemaProvider({ children }) {

    const [temaAtual, setTemaAtual] = useState('Escuro')

    return (
        <TemaContext.Provider value={{
            temaAtual,
            setTemaAtual
        }}>
            {children}
        </TemaContext.Provider>
    )
}