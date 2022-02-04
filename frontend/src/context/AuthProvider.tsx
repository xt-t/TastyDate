import {createContext, ReactElement, useEffect, useState} from "react";
import jwt_decode from "jwt-decode";

export interface AuthContextType {
    token?:string
    jwtDecoded?: {sub?: string}
    setJwt: (jwt: string) => void
}

export const AuthContext = createContext<AuthContextType> ({
    setJwt:() => {throw Error("Login not initialised")}
})

export default function AuthProvider({children}:{children: ReactElement<any, any>}) {
    const STORAGE_KEY = "Token";
    const [token, setToken] = useState<string|undefined>(localStorage.getItem(STORAGE_KEY) || undefined);
    const [jwtDecoded, setJwtDecoded] = useState();

    const setJwt = (jwt: string) => {
        if (jwt === "") {setToken(undefined)}
        else {setToken(jwt);}
        localStorage.setItem(STORAGE_KEY, JSON.stringify(token));
        setJwtDecoded(jwt_decode(jwt.toString()));
    }

    return (
        <AuthContext.Provider value={{token, jwtDecoded, setJwt}}>
            {children}
        </AuthContext.Provider>
    )
}