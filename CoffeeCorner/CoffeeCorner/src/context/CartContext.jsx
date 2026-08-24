import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("coffeeCart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];
  });

  // Save cart whenever it changes
  useEffect(() => {

    localStorage.setItem(
      "coffeeCart",
      JSON.stringify(cart)
    );

  }, [cart]);


  // Add product
  const addToCart = (product) => {

    setCart((previousCart) => {

      const existingProduct = previousCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {

        toast.info(`${product.name} quantity increased`);

        return previousCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );

      }

      toast.success(`${product.name} added to cart!`);

      return [
        ...previousCart,
        {
          ...product,
          quantity: 1,
        },
      ];

    });

  };


  // Remove product completely
  const removeFromCart = (productId) => {

    setCart((previousCart) =>
      previousCart.filter(
        (item) => item.id !== productId
      )
    );

    toast.info("Item removed from cart");

  };


  // Increase quantity
  const increaseQuantity = (productId) => {

    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );

  };


  // Decrease quantity
  const decreaseQuantity = (productId) => {

    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

  };


  // Clear cart
  const clearCart = () => {

    setCart([]);

  };


  // Total number of products
  const cartCount = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );


  // Subtotal
  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );


  // Delivery charge
  const deliveryCharge =
    subtotal === 0
      ? 0
      : subtotal >= 500
      ? 0
      : 40;


  // Discount
  const discount =
    subtotal >= 1000
      ? Math.round(subtotal * 0.10)
      : 0;


  // GST
  const gst = Math.round(
    (subtotal - discount) * 0.05
  );


  // Final total
  const grandTotal =
    subtotal +
    deliveryCharge +
    gst -
    discount;


  const value = {

    cart,

    cartCount,

    subtotal,

    deliveryCharge,

    discount,

    gst,

    grandTotal,

    addToCart,

    removeFromCart,

    increaseQuantity,

    decreaseQuantity,

    clearCart,

  };


  return (

    <CartContext.Provider value={value}>

      {children}

    </CartContext.Provider>

  );

}


// Custom hook
export function useCart() {

  return useContext(CartContext);

}

export default CartContext;