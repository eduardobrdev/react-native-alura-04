import { createContext, useState } from "react";

export const AutenticacaoContext = createContext({})

export function AutenticacaoProvider({ children }) {

    const [usuario, setUsuario] = useState({})

    function login(email, senha) {
        if(email == 'edu@email' && senha == 123) {
            setUsuario({
                nome: 'Eduardo',
                email: email,
                endereco: 'Aqui em casa',
                telefone: '(99) 9999999999'
            })
            return 'ok'
        }
        else {
            return 'error'
        }
    }

    return (
        <AutenticacaoContext.Provider value={{
            usuario,
            login
        }}>
            {children}
        </AutenticacaoContext.Provider>
    )
}