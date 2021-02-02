export class User{
    public userId: string;
    public name: string;
    public email: string;
    public password: string;

    constructor(userId: string, name: string, email: string, password: string) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}