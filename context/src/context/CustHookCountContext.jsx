import { createContext, useContext, useState } from "react";

const CustHookCountContext = createContext();

export const CustHookCountProvider = ({ children }) => {
    // provider wrapper
    const [count, setCount] = useState(0);
    let rando = "Hey thereee :D";
    const handleIncrement = () => {
        let temp = count + 1;
        setCount(temp);
    };

    return (
        <CustHookCountContext.Provider
            value={{ count, handleIncrement, rando }}
        >
            {children}
        </CustHookCountContext.Provider>
    );
};

export const useCustHookCount = () => {
    // provide access to all context variables
    const context = useContext(CustHookCountContext);
    if (!context) {
        throw new Error("useCustHookCount must be used within a UserProvider");
    }

    return context;
};
