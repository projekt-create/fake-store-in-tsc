// File: src/types/Users.ts

// This file contains the type definitions for the User interface and related types.
export interface User {
    address: {
        geolocation: {
            lat: string;
            long: string;
        },
        city: string;
        street: string;
        number: number;
        zipcode: string;
    }
    id: number;
    email: string;
    username: string;
    password: string;
    name: {
        firsname: string;
        lastname: string;
    }
    phone: string;
    __v: number;
}

// The OnlyID type is a utility type that picks only the 'id' property from the User interface.
export type OnlyID = Pick<User, 'id'>
// The OptionalUser type is a utility type that makes all properties of the User interface optional, except for the 'id' property which is required.
export type optionalUser = Partial<User> & { id: number, username: string, email: string, password: string }
// The optionalUserWithoutID type is a utility type that makes all properties of the User interface optional, except for the 'id' property which is required.
export type optionalUserWithoutID = Partial<User> & { id: number }