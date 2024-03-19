const { createContext } = require("react");

export const GlobalContext = createContext({})

export function InfoProvider({ children }) {
    return (
        <GlobalContext.Provider>
            {children}
        </GlobalContext.Provider>
    )
}