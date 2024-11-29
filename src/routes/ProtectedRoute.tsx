// Ruta para validadar que si el usuario está autenticado, 
// nos deje mostrar el contenido de la ruta
// y si no, que nos redirija a una ruta que sea pública

import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

export default function ProtectedRoute() {
    // const [isAuth, setIsAuth] = useState(false);
    const auth = useAuth()

    return auth.isAuthenticated ? <Outlet /> : < Navigate to="/" />
}
