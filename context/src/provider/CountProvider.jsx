import { useState } from "react";
import CountContext from "../context/CountContext";

const CountProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const rando = "hey there";
    return (
        <CountContext.Provider value={{ count, setCount, rando }}>
            {children}
        </CountContext.Provider>
    );
};

export default CountProvider;
