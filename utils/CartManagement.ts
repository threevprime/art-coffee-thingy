export function addToCart(product: any) {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
}

export function removeFromCart(product: any) {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = cart.filter((item: any) => item.id !== product.id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
}

export function clearCart() {
    localStorage.removeItem("cart");
}
