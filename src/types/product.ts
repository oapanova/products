export interface Product {
    id: number;
    name: string;
    shortDescription: string;
    longDescription?: string;
    category?: string;
    reviews?: { id: number; author: string; text: string }[];
    price: number;
    thumbnail: string;
}
