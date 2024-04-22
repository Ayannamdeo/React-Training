import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({children}){
    const [status, setStatus] = useState("out");
    return (
        <AuthContext.Provider value={{status, setStatus}} >
            {children}
        </AuthContext.Provider>
    );
}