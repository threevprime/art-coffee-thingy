export interface Product {
    id: string;
    name: string;
    description: string;
    longDescription: string;
    price: string;
    originalPrice: string;
    image: string;
    category: string;
    tags: string[];
    weight: string;
}

export interface CustomProduct {
    id: string;
    ingredients: string[];
    price: string;
}

export interface ProductCartInfo {
    id: string;
    quantity: number;
    isCustom: boolean;
}
