import { useState, useContext, createContext, useEffect } from "react";
import api from "../api";
import { useHistory } from 'react-router-dom'
import showNotification from "../utils/showNotification";

interface IAuthContextData {
    signed: boolean;
    handleLogin(data: any): Promise<void>
    handleLogout(): Promise<void>
}

const authContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [signed, setSigned] = useState(false)
    const [loading, setLoading] = useState(true)
    const history = useHistory()

    useEffect(() => {
        console.log();
        const token = localStorage.getItem('token');
        if (token) {
            api.defaults.headers.Authorization = `Bearer ${token}`;

            setSigned(true)
        }
        setLoading(false)
    },[]);
    
    function saveTokenAndRedirect(data: any) {
        if (data.access_token) {
            setSigned(true)
            localStorage.setItem('token', data.access_token)
            api.defaults.headers.Authorization = `Bearer ${data.access_token}`;
            history.push('/')
        }
    }

    async function handleLogin(loginData: any) {
        try {
            const { data } = await api.post('/oauth/token', loginData);
            saveTokenAndRedirect(data);
        } catch {
            showNotification('danger', 'Informações incorretas')
        }
    }

    async function handleLogout() {
        setSigned(false)
        localStorage.removeItem('token')
        api.defaults.headers.Authorization = 'Basic cG91cGFjaGVmLXRlc3Q6ZGQzZWQ5MGUtNjY3Zi00MjQ4LWE2NzEtOTI2NjI2MWRiYTVi';
    }

    if (loading) {
        return (<h1> Loading... </h1>)
    }
    return (
        <authContext.Provider value={{ signed, handleLogin, handleLogout }}>
            {children}
        </authContext.Provider>
    )
}

export const useAuth = () => useContext(authContext);


