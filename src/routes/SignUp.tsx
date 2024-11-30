import { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout"

export default function Signup() {
    const [name, setName] = useState("")
    // const [lastname, setLastName] = useState("")
    // const [typeUser, setTypeUser] = useState("")
    // const [idOrNit, setIdOrNit] = useState("")
    // const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    return (
        <DefaultLayout>
            <form className="form">
                <h1>Signup</h1>

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
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />

                <label htmlFor="">Contraseña</label>
                <input type="password" name="" id="" value={password} onChange={(e) => setPassword(e.target.value)} />

                {/* <label htmlFor="">Confirmar contraseña</label>
                <input type="password" name="" id="" /> */}


                <button>Create user</button>
            </form>
        </DefaultLayout>

    );
}