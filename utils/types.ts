export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    tags: string[];
}

export interface CustomProduct {
    id: string;
    ingredients: string[];
    price: string;
}

export interface ProductCartInfo {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    image: string;
    isCustom: boolean;
}
