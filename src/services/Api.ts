import type { Product } from "@/types/Products";
import axios from "axios";

// Define the base URL for the API
const API_URL = "https://fakestoreapi.com/products";

// Function to fetch all products from the API
export const GetAllProducts = async ():Promise<Product[]> => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.log("Error fetching products:", error);
        throw error;
    }
}

