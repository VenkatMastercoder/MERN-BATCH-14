import { createContext, useState } from "react";

// Step 1 : Create a Context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // [{},{}]

  // Add
  const addItemsCart = (newItems) => {
    // setCart([...cart,newItems]);
    setCart((prev) => [...prev, newItems]);
  };

  // Clear Cart
  const clearCart = () => {
    setCart([]);
  };

  // Clear Cart Items
  const clearCartItem = (itemId) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  // Update the Quantity
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;

    setCart((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemsCart,
        clearCart,
        clearCartItem,
        updateQuantity,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
