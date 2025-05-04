import { ProductCartInfo } from "./types";

export function addToCart(product: ProductCartInfo) {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
}

export function removeFromCart(product: ProductCartInfo) {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = cart.filter((item: any) => item.id !== product.id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
}

export function changeQuantity(product: ProductCartInfo, quantity: number) {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = cart.map((item: any) => {
        if (item.id === product.id) {
            return { ...item, quantity };
        }
        return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
}

export function getCartItems(): ProductCartInfo[] {
    return JSON.parse(localStorage.getItem("cart") || "[]");
}

export function clearCart() {
    localStorage.removeItem("cart");
}

export function itemsInCart(): number {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    return cart.length;
}
