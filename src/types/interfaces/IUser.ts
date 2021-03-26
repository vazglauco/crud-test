export interface IUser {
    [index: string]: any;
    username: string;
    password: string;
    grant_type: string;
    scope: string;
}