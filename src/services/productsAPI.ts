import type { Product } from "../types/product";
import {productsData} from "../mockData.ts";

export function fetchProducts(): Promise<Product[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productsData);
        }, 1000);
    });
}
