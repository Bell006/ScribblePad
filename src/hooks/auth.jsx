import { createContext, useContext, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    
    //Estado que armazena dados do usuário pós autenticação:
    const [data, setData] = useState({});


    async function signIn({ email, password }) {

        try{
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

            localStorage.setItem("@scribblePad:user", JSON.stringify(user));
            localStorage.setItem("@scribblePad:token", token);

            
            api.defaults.headers.common['authorization'] = `Bearer ${token}`;
            
            setData({ user, token });

        } catch(error) {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível conectar.")
                console.log(error)
            }
        }

    }

    function signOut() {
        localStorage.removeItem("@scribblePad:token");
        localStorage.removeItem("@scribblePad:user");



        setData({});
    }

    async function updateProfile({ user, avatarFile }) {
        try {

            if(avatarFile) {
                const fileUploadForm = new FormData(); //Enviando como arquivo
                fileUploadForm.append("avatar", avatarFile);

                const response = await api.patch("/users/avatar", fileUploadForm);
                user.avatar = response.data.avatar;
            }

            await api.put("/users", user);
            localStorage.setItem("@scribblePad:user", JSON.stringify(user));
            setData({ user, token: data.token });

            alert("Dados atualizados com sucesso!")
        } catch(error) {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível atualizar o perfil.")
                console.log(error)
            }
        }
    }   

    //Buscando dados de autenticação no localStorage
    useEffect(() => {
        const token = localStorage.getItem("@scribblePad:token");
        const user = localStorage.getItem("@scribblePad:user");

        api.defaults.headers.common['authorization'] = `Bearer ${token}`;

        if(token && user) {
            setData({
                token,
                user: JSON.parse(user)
            })
        }
        
    }, []);
    
    return (
        <AuthContext.Provider value={{ 
            signIn, 
            user: data.user,
            signOut,
            updateProfile 
            }}>
            {children}
        </AuthContext.Provider>
    )
}

//Hook que observa o estado contexto para disponibilizar as rotas
function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };