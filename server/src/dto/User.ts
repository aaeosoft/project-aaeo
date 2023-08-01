import { Document } from "mongoose";
import IUserSchema from "../interfaces/models/user.schema.interface";

export class User {
    private id: number | undefined;
    private firstName: string;
    private lastName: string;
    private email: string;
    private password: string;
    private isActive: boolean;

    constructor(
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        isActive: boolean = false,
        id: number | undefined = undefined
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.isActive = isActive;
        this.id = id;
    }

    public setFirstName(firstName: string): User {
        this.firstName = firstName;

        return this;
    }

    public setLastName(lastName: string): User {
        this.lastName = lastName;

        return this;
    }

    public setEmail(email: string): User {
        this.email = email;

        return this;
    }

    public setPassword(password: string): User {
        this.password = password;

        return this;
    }

    public getId(): number | undefined {
        return this.id;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public getEmail(): string {
        return this.email;
    }

    public getPassword(): string {
        return this.password;
    }

    public getIsActive(): boolean {
        return this.isActive;
    }

    public static fromModel(user: IUserSchema): User {
        return new User(user.firstName, user.lastName, user.email, user.password, user.isActive, user.id);
    }
}