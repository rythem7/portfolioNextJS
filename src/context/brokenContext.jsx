'use client';
import { createContext, useState } from "react";

export const BrokenContext = createContext();

const BrokenCtxProvider = ({ children }) => {
    const [broken, setBroken] = useState(false);
    return (
        <BrokenContext.Provider value={{ broken, setBroken }}>
            {children}
        </BrokenContext.Provider>
    );
};

export default BrokenCtxProvider;