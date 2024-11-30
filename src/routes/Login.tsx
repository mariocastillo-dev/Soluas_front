import DefaultLayout from "../layout/DefaultLayout"
import { useState } from "react";

export default function Login() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    return (
        <DefaultLayout>
            <form className="form">
                <h1>Login</h1>
                <label htmlFor="">Nombre de usuario</label>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />

                <label htmlFor="">Contraseña</label>
                <input type="password" name="" id="" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button>Ingresar</button>
                {/* <button>Reestablecer contraseña</button> */}
            </form>
        </DefaultLayout>

    );
}