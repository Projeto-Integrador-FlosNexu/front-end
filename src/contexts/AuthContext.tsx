import { createContext, ReactNode, useState } from "react"

import UsuarioLogin from "../models/UsuarioLogin"
<<<<<<< HEAD
import { login } from "../services/Service"
=======
//import { login } from "../services/Service"  -> IMPORTAR A SERVICE DEPOIS DO PUSH
>>>>>>> a8ca01b30b990070e0d70f338a735e5769a9d65c
// import { toastAlerta } from "../utils/toastAlerta"

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        email: "",
<<<<<<< HEAD
        senha: "",
        foto: "",
=======
        foto: "",
        senha: "",
        tipo: "",
        usuario: "",
>>>>>>> a8ca01b30b990070e0d70f338a735e5769a9d65c
        token: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(userLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/usuarios/logar`, userLogin, setUsuario)
            alert("Usuário logado com sucesso")
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            alert("Dados do usuário inconsistentes")
            setIsLoading(false)
        }
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            email: "",
<<<<<<< HEAD
            senha: "",
            foto: "",
=======
            foto: "",
            senha: "",
            tipo: "",
            usuario: "",
>>>>>>> a8ca01b30b990070e0d70f338a735e5769a9d65c
            token: ""
        })
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}