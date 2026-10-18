// This file contains the types for the authentication request and response.
export interface Auth {
    username: string;
    password: string;
}

// The AuthResponse interface represents the structure of the response received after a successful authentication request.
export interface AuthResponse {
    token: string;
}

