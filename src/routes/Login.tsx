import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import DefaultLayout from "../layout/DefaultLayout"
import { useState } from "react";
import { API_URL } from "../auth/constants";
import type { AuthResponseError } from "../types/types";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Manejo de errores
    const [errorResponse, setErrorResponse] = useState("");

    // Si el usuario ya está autenticado, entonces redirigirlo al dashboard
    const auth = useAuth();

    // Una vez creado el usuario, se redirige al login
    // useNavigate() es un hook de React
    const goToLogin = useNavigate();

    async function hadleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            const response = await fetch(`${API_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password
                }),
            });

            //Validamos si la respuesta es correcta
            if (response.ok) {
                console.log("Se ha loguado correctamente");
                setErrorResponse("");

                // Acá llamamos al hook
                goToLogin("/");
            } else {
                console.log("Algo ocurrió");
                const json = await response.json() as AuthResponseError;
                setErrorResponse(json.body.error);
            }
        } catch (error) {
            console.log(error);
        }
    }


    if (auth.isAuthenticated) {
        return <Navigate to="/dashboard" />
    }

    return (
        <DefaultLayout>
            <form className="form" onSubmit={hadleSubmit}>
                <h1>Login</h1>
                {!! errorResponse && <div className="errorMessage">{errorResponse}</div>}
                <label htmlFor="">Nombre de usuario</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

                <label htmlFor="">Contraseña</label>
                <input type="password" name="" id="" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button>Ingresar</button>
                {/* <button>Reestablecer contraseña</button> */}
            </form>
        </DefaultLayout>

    );
}