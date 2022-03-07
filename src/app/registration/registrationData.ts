export class registrationData
{
    // Variables
    private _name: string;
    private _mail: string;
    private _phone: string;
    private _type: string;
    private _city: string;
    private _postal: number;
    private _street: string;
    private _house: string;
    private _password: string;
    private _confPassword: string;

    // Constructor
    constructor(
        name: string,
        mail: string,
        phone: string,
        type: string,
        city: string,
        postal: number,
        street: string,
        house: string,
        password: string,
        confPassword: string,
        )
    {
        this._name = name;
        this._mail = mail;
        this._phone = phone;
        this._type = type;
        this._city = city;
        this._postal = postal;
        this._street = street;
        this._house = house;
        this._password = password;
        this._confPassword = confPassword;

    }

    // Getters
    get name(): string { return this._name; }
    get mail(): string { return this._mail; }
    get phone(): string { return this._phone; }
    get type(): string { return this._type; }
    get city(): string { return this._city; }
    get postal(): number { return this._postal; }
    get street(): string { return this._street; }
    get house(): string { return this._house; }
    get password(): string { return this._password; }
    get confpassword(): string { return this._confPassword; }

    // Setters

}