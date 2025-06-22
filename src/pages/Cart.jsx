import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function Cart() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const productTotal = getTotalPrice();
  const shipping = 50;
  const vat = productTotal * 0.2;
  const grandTotal = productTotal + shipping;

  return (
    <div>
        <Header />
      
      <main className="px-6 py-12 container mx-auto">
        <h1 className="text-3xl font-bold uppercase mb-8">Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-4">
                    <img src={item.image.desktop.replace('./', '/')} alt={item.name} className="w-20 rounded" />
                    <div>
                      <h2 className="font-semibold uppercase text-sm">{item.name}</h2>
                      <p className="text-gray-500 text-sm">${item.price.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex bg-[#F1F1F1]">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="px-3 py-1"
                      >
                        -
                      </button>
                      <span className="px-4 py-1">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1"
                      >
                        +
                      </button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-sm">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            
            <div className="mt-10 bg-gray-100 p-6 rounded-lg space-y-4 max-w-sm ml-auto">
              <h3 className="text-lg font-bold uppercase">Summary</h3>
              <div className="flex justify-between">
                <p className="text-gray-600">Total</p>
                <p className="font-bold">${productTotal.toLocaleString()}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Shipping</p>
                <p className="font-bold">${shipping}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">VAT (20%)</p>
                <p className="font-bold">${vat.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Grand Total</p>
                <p className="font-bold text-[#D87D4A]">${grandTotal.toLocaleString()}</p>
              </div>

              <Link to="/checkout">
                <button className="w-full bg-[#D87D4A] text-white py-2 uppercase mt-4 hover:bg-[#FBAF85]">
                  Checkout
                </button>
              </Link>
              <button
                onClick={clearCart}
                className="w-full text-sm text-gray-600 mt-2 hover:underline"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
