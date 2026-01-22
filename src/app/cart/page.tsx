"use client";

import { useCart } from "@/src/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-4"
        >
          <div>
            <h2 className="font-medium">{item.title}</h2>
            <p>Qty: {item.quantity}</p>
          </div>

          <div className="flex items-center gap-4">
            <p className="font-bold">₹ {item.price}</p>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <h2 className="text-xl font-bold mt-6">Total: ₹ {total}</h2>
      )}
    </div>
  );
}
