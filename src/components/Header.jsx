import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext'; // Use correct context
import { FiMenu, FiX } from 'react-icons/fi';
import Navbar from './Navbar';

export default function Header() {
  const { cartItems } = useContext(CartContext); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white px-6 py-4 sticky top-0 z-50 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden">
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
          <Link to="/" className="text-xl font-bold tracking-widest uppercase">
            <img src='/assets/shared/desktop/logo.svg' alt="Logo" />
          </Link>
        </div>

        <div className="hidden lg:flex gap-6">
          <Navbar />
        </div>

        <Link to="/cart" className="relative">
          <img src="/assets/shared/desktop/icon-cart.svg" alt="Cart" />
          {cartItems?.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#D87D4A] text-white text-xs rounded-full px-1">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </Link>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden mt-4">
          <Navbar onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </header>
  );
}

