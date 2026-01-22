"use client";

import { useCart } from "@/src/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discount = subtotal * 0.2; // 20% discount
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-xl sm:text-2xl font-extrabold mb-6 sm:mb-8 text-black">
          YOUR CART
        </h1>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 sm:py-16">
            <p className="text-lg sm:text-xl text-gray-600 mb-4">
              Your cart is empty.
            </p>
            <Link
              href="/"
              className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 border border-gray-200"
                >
                  {/* Product Image */}
                  <div className="w-full sm:w-32 h-40 sm:h-32 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-24 h-24 object-contain"
                      />
                    )}
                  </div>

                  {/* Product Details & Controls Container */}
                  <div className="flex-1 flex flex-col">
                    {/* Product Details */}
                    <div className="flex-1">
                      <h2 className="text-black font-bold text-base sm:text-lg line-clamp-2">
                        {item.title}
                      </h2>
                      <p className="text-gray-600 text-xs sm:text-sm mt-2">
                        Size: Large | Color: White
                      </p>
                    </div>

                    {/* Price, Quantity & Remove - Mobile Stack, Desktop Flex */}
                    <div className="mt-4 sm:mt-0 sm:flex sm:items-end sm:justify-between">
                      <p className="font-bold text-lg sm:text-xl text-black mb-4 sm:mb-0">
                        ₹{item.price}
                      </p>

                      <div className="flex gap-3 sm:flex-col sm:gap-4 sm:items-end">
                        {/* Quantity Control */}
                        <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2">
                          <button
                            onClick={() => {
                              if (item.quantity > 1) {
                                updateQuantity(item.id, item.quantity - 1);
                              }
                            }}
                            className="text-gray-600 hover:text-black font-bold text-lg w-6 h-6 flex items-center justify-center transition"
                          >
                            −
                          </button>
                          <span className="font-semibold text-black w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="text-gray-600 hover:text-black font-bold text-lg w-6 h-6 flex items-center justify-center transition"
                          >
                            +
                          </button>
                        </div>

                        {/* Delete Button */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 font-semibold hover:bg-red-50 px-3 py-2 rounded transition text-sm sm:text-base whitespace-nowrap"
                        >
                          🗑️ Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 sticky top-4 sm:top-8">
                <h2 className="text-xl sm:text-2xl font-extrabold mb-4 sm:mb-6 text-black">
                  Order Summary
                </h2>

                <div className="space-y-3 sm:space-y-4 mb-6">
                  {/* Subtotal */}
                  <div className="flex justify-between text-sm sm:text-base">
                    <p className="text-gray-600">Subtotal</p>
                    <p className="font-semibold text-black">
                      ₹{subtotal.toFixed(2)}
                    </p>
                  </div>

                  {/* Discount */}
                  <div className="flex justify-between text-sm sm:text-base">
                    <p className="text-gray-600">Discount (-20%)</p>
                    <p className="text-red-500 font-semibold">
                      −₹{discount.toFixed(2)}
                    </p>
                  </div>

                  {/* Delivery Fee */}
                  <div className="flex justify-between text-sm sm:text-base">
                    <p className="text-gray-600">Delivery Fee</p>
                    <p className="font-semibold text-black">
                      ₹{deliveryFee.toFixed(2)}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t pt-3 sm:pt-4"></div>

                  {/* Total */}
                  <div className="flex justify-between text-black">
                    <p className="font-bold text-base sm:text-lg">Total</p>
                    <p className="font-bold text-base sm:text-lg">
                      ₹{total.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="flex flex-col sm:flex-row gap-2 text-black mb-4 sm:mb-6">
                  <input
                    type="text"
                    placeholder="Add promo code"
                    className="flex-1 bg-gray-100 rounded-full px-4 py-2 sm:py-3 text-sm placeholder-gray-500 outline-none focus:ring-2 focus:ring-black"
                  />
                  <button className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-800 transition text-sm sm:text-base whitespace-nowrap">
                    Apply
                  </button>
                </div>

                {/* Checkout Button */}
                <button className="w-full bg-black text-white py-3 rounded-full font-bold text-base sm:text-lg hover:bg-gray-800 transition flex items-center justify-center gap-2">
                  Go to Checkout →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}