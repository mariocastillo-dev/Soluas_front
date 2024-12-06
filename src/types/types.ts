export interface AuthResponse {
    body: {
        user: User;
        accessToken: string;
        resfreshToken: string;
    };
}

export interface AuthResponseError {
    body: {
        error: string;
    }
}

export interface User {
    _id: string;
    name: string;
    username: string;

    //Por temas de seguridad no va,os a guardar el password del cliente
}