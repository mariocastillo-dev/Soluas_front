import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout"
import { API_URL } from "../auth/constants";
import { AuthResponseError } from "../types/types";

export default function Signup() {
    const [name, setName] = useState("");
    // const [lastname, setLastName] = useState("");
    // const [typeUser, setTypeUser] = useState("");
    // const [idOrNit, setIdOrNit] = useState("");
    // const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Manejo de errores
    const [errorResponse, setErrorResponse] = useState("");

    // El usuario debe logearse para ingresar al dashboard
    const auth = useAuth();

    // Una vez creado el usuario, se redirige al login
    // useNavigate() es un hook de React
    const goToLogin = useNavigate();

    async function hadleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            const response = await fetch(`${API_URL}/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    username,
                    password
                }),
            });

            //Validamos si la respuesta es correcta
            if (response.ok) {
                console.log("El usuario se creó correctamente");
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
                <h1>Signup</h1>
                {/* Mostramos el error */}
                {!! errorResponse && <div className="errorMessage">{errorResponse}</div>}

                <label htmlFor="">Nombre</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                {/* <label htmlFor="">Apellidos</label>
                <input type="text" />

                <label htmlFor="">Tipo de usuario</label>
                
                <label htmlFor="">Persona Natural</label>
                <input type="radio" name="" id="" /> 
                <label htmlFor="">Persona Jurídica</label>
                <input type="radio" name="" id="" />

                <label htmlFor="">ID o NIT</label>
                <input type="text" name="" id="" /> 

                <label htmlFor="">Email</label>
                <input type="email" name="" id="" /> */}

                <label htmlFor="">Nombre de usuario</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

                <label htmlFor="">Contraseña</label>
                <input type="password" name="" id="" value={password} onChange={(e) => setPassword(e.target.value)} />

                {/* <label htmlFor="">Confirmar contraseña</label>
                <input type="password" name="" id="" /> */}

                <button>Create user</button>
            </form>
        </DefaultLayout>

    );
}