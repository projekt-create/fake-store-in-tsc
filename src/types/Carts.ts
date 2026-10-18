// File: src/types/Carts.ts

// This file contains the type definitions for the Carts interface and related types.
export interface Carts {
    id: number;
    user_id: number;
    date: string;
    products: [
        {
            productID: number;
            quantity: number;
        }
    ]
    __v: number;
}

// The OnlyID type is a utility type that picks only the 'id' property from the Carts interface.
export type OnlyID = Pick<Carts, 'id'>;
// The CartsWithoutID type is a utility type that omits the 'id' property from the Carts interface.
export type CartsWithoutID = Omit<Carts, 'id'>;
// The OptionalCarts type is a utility type that makes all properties of the Carts interface optional, except for the 'id' property which is required.
export type OptionalCarts = Partial<Carts>;
// The optionalCartsWithoutID type is a utility type that makes all properties of the Carts interface optional, except for the 'id' property which is required.
export type optionalCartsWithoutID = Partial<Carts> & { id: number };
// The optionalCartsWithID type is a utility type that makes all properties of the Carts interface optional, except for the 'id' property which is required.
export type optionalCartsWithID = Partial<Carts> & { id: number, user_id: number, date: string, products: [{ productID: number, quantity: number }] };