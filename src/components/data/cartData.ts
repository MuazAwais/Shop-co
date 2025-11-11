'use client'
export function getCart() {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    return cart as { id: string; size: string; quantity: number }[] || [];
  }
  
 export function removeFromCart(productId: string, size: string) {
    let cart = getCart();
    cart = cart.filter((item: { id: string; size: string }) => !(item.id === productId && item.size === size));
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
  }
  
 export function clearCart() {
   localStorage.removeItem("cart");
   window.dispatchEvent(new Event('cartUpdated'));
  }
  

 export function getCartLength() {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    return cart.reduce((total: number, item: { quantity: number }) => total + item.quantity, 0) as number;
  }
  
 export function getCartItemCount() {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    return cart.length as number;
  }
  