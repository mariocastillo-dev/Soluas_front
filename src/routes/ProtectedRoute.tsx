// Ruta para validadar que si el usuario está autenticado, 
// nos deje mostrar el contenido de la ruta
// y si no, que nos redirija a una ruta que sea pública

import { Outlet, Navigate } from "react-router-dom";
import { useState } from "react";

export default function ProtectedRoute() {
    const [isAuth, setIsAuth] = useState(false);

    return isAuth ? <Outlet/> : < Navigate to="/"/>
}
