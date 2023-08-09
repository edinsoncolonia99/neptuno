export type Roles = 'SUSCRIPTOR'  | 'ADMIN';

export interface UserI {
    username?: string | null;
    password?: string | null;
}

export interface UserResponseI extends UserI{
    message: string;
    token: string;
    userId: number;
    role: Roles;
}