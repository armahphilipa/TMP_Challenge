import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Header from '../components/Header';

export default function OrderConfirmation() {
  const { state } = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    if (!state) {
      navigate('/');
    }
  }, [state, navigate]);

  const grandTotal = state?.grandTotal || 0;

  return (
    <div>
      <Header />
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="bg-white max-w-md w-full rounded-lg shadow-lg p-8 text-center">
        <FaCheckCircle className="text-[#D87D4A] text-5xl mb-4 mx-auto" />
        <h2 className="text-2xl font-bold uppercase mb-2">Thank you for your order</h2>
        <p className="text-gray-600 mb-6">You will receive an email confirmation shortly.</p>

        <div className="bg-gray-100 rounded-lg overflow-hidden mb-6">
          <div className="p-4 border-b">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">YX1 Wireless Earphones</p>
                <p className="text-sm text-gray-600">$599</p>
              </div>
              <span className="text-sm text-gray-700">x1</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">and 2 other item(s)</p>
          </div>
          <div className="p-4 bg-black text-white text-left">
            <p className="uppercase text-sm opacity-70">Grand Total</p>
            <p className="text-lg font-bold">${grandTotal.toFixed(2)}</p>
          </div>
        </div>

        <button
          className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white w-full py-3 rounded text-sm uppercase tracking-wide"
          onClick={() => navigate('/')}
        >
          Back to Home
        </button>
      </div>
    </main>
  </div>
  );
}
