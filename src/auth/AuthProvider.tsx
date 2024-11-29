// Crear el estado global para mantener el estado de toda la aplicación
// Usamos el AuthProvider, el cual es un componente que va a utilizar 
// UseContext para guardar todo el estado y las funciones que vamos a necesitar
// en el desarrollo de nuestra aplicación

import { useContext, createContext, useState, useEffect } from "react";

// Creamos una interface para que TypeScript no nos saque error por el tipado
interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthContext = createContext({
    isAuthenticated: false,
});

// Componente que va a estar validando constantemente que exista autenticación 
// o no para dejar pasar a las rutas que están protegidas, y en general poder 
// acceder a la información de nuestro usuario o la información que mandemos 
// desde el backend al frontend

// children -> Componente para manejar el tema de autenticación en nuestras rutas 
export function AuthProvider({ children }: AuthProviderProps) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}  
        </AuthContext.Provider>
    );
} 

// Hook para en nuestro AuthProvider que nos permita acceder
// a las funciones de nuestro useContext

// Con esto, tendremos acceso a modo de hook en cualquier 
// componente que queramos utilizar estas propiedades
// o funciones 
export const useAuth = () => useContext(AuthContext)