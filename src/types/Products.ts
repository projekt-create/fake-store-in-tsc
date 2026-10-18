// File: src/types/Products.ts

// This file contains the type definitions for the Product interface and related types.
export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}

// The OnlyID type is a utility type that picks only the 'id' property from the Product interface.
export type OnlyID = Pick<Product, 'id'>;
// The ProductWithoutID type is a utility type that omits the 'id' property from the Product interface.
export type ProductWithoutID = Omit<Product, 'id'>;
// The OptionalProduct type is a utility type that makes all properties of the Product interface optional, except for the 'id' property which is required.
export type OptionalProduct = Partial<Product> & { id: number };