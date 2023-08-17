export type Roles = 'SUSCRIPTOR'  | 'ADMIN';

export interface UserI {
    email?: string | null;
    //identifier?: string | null;
    password?: string | null;
}

export interface UserResponseI extends UserI{
    message: string;
    access_token: string;
    token: string;
    //userId: number;
    //role: Roles;
}