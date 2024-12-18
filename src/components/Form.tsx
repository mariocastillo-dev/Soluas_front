import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import { AuthResponseError } from "../types/types";
import { API_URL } from "../auth/constants";

import { LogIn } from "lucide-react";

export function Form() {
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
        <form className="form" onSubmit={hadleSubmit}>
            <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100 " >
                {!!errorResponse && <div className="errorMessage">{errorResponse}</div>}
                <h1 className="text-5xl font-semibold text-center">¡Hola!</h1>
                <p className="font-medium text-lg text-gray-500 mt-4">¡Bienvenido al portal de clientes! Por favor, ingrese sus datos.</p>
                <div className="mt-8">
                    <div>
                        <div>
                            <label htmlFor="" className="text-lg font-medium">Nombre de usuario</label>
                            <input type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-2 bg-transparent
                                focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-sky-600"
                                placeholder="Digite su nombre de usuario" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="" className="text-lg font-medium">Contraseña</label>
                            <input type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-2 bg-transparent
                                focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-sky-600"
                                placeholder="Digite su contraseña" />
                        </div>
                    </div>
                    <div className="mt-8 flex justify-between items-center">
                        <div>
                            {/* <input type="checkbox" id="remember" />
                            <label htmlFor="remember" className="ml-2 font-medium text-base">Recordar por 30 días</label> */}
                        </div>
                        <button className="font-medium text-base text-sky-800">¿Olvidó su contraseña?</button>
                    </div>
                    <div className="mt-8 flex flex-col gap-y-4">
                        <button
                            // className="active:scale-[.98] active:duration-75 hover:scale-[1.01] hover:bg-cyan-700 easy-in-out transition-all py-3 rounded-xl text-lg font-bold bg-sky-800 text-white">
                            className="active:scale-[.98] active:duration-75 hover:scale-[1.01] w-full flex items-center justify-center gap-3 px-4 py-3 text-lg text-white bg-gradient-to-r from-sky-500 to-cyan-600 rounded-xl hover:from-sky-600 hover:to-sky-700 transition-colors duration-200 "
                        >
                            <LogIn className="w-6 h-6"></LogIn>
                            Iniciar sesión
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}