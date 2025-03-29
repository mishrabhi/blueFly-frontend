import React, { useState } from "react";

const Cart = () => {
  // Sample cart items
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Nike Air Max",
      price: 120,
      quantity: 1,
      image: "https://via.placeholder.com/100", // Placeholder image
    },
    {
      id: 2,
      name: "Adidas Running Shoes",
      price: 100,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
  ]);

  // Function to increase quantity
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrease quantity
  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Function to remove an item
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto py-10 px-4 md:px-20">
      <h1 className="text-3xl font-semibold mb-6 text-center">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {/* Cart Items */}
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover"
                />
                <div className="flex-1 ml-4">
                  <h2 className="text-lg font-medium">{item.name}</h2>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-2 py-1 border border-gray-400 rounded"
                  >
                    -
                  </button>
                  <span className="mx-3">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-2 py-1 border border-gray-400 rounded"
                  >
                    +
                  </button>
                </div>
                <p className="text-gray-700 font-semibold">
                  ${item.price * item.quantity}
                </p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700 ml-4"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total & Checkout */}
          <div className="mt-6 text-right">
            <h2 className="text-xl font-semibold">Total: ${totalPrice}</h2>
            <button className="mt-4 px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
