export class LoginData
{
    // Variables
    private _mail: string;
    private _password: string;

    // Constructor
    constructor(mail: string, password: string)
    {
        this._mail = mail;
        this._password = password;

    }

    // Getters
    get mail(): string { return this._mail; }
    get password(): string { return this._password; }

    // Setters

}