import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    zip: '',
    city: '',
    country: '',
    payment: 'e-money',
    eMoneyNumber: '',
    eMoneyPIN: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  
  const productTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 50;
  const vat = productTotal * 0.2;
  const grandTotal = productTotal + shipping;

  const validate = () => {
    const newErrors = {};
    Object.entries(form).forEach(([key, value]) => {
      if (form.payment === 'cash' && (key === 'eMoneyNumber' || key === 'eMoneyPIN')) return;
      if (!value) newErrors[key] = 'Required';
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      clearCart();
      navigate('/confirmation', { state: { grandTotal } });
    }
  };

  return (
    <div>
      <Header />
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold uppercase mb-8">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-12">
        
        <div className="md:col-span-2 space-y-8">
          <fieldset>
            <legend className="text-[#D87D4A] font-bold uppercase mb-4">Billing Details</legend>
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Name" name="name" value={form.name} error={errors.name} onChange={setForm} />
              <Input label="Email Address" name="email" value={form.email} error={errors.email} onChange={setForm} />
              <Input label="Phone Number" name="phone" value={form.phone} error={errors.phone} onChange={setForm} />
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-[#D87D4A] font-bold uppercase mb-4">Shipping Info</legend>
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Address" name="address" value={form.address} error={errors.address} onChange={setForm} full />
              <Input label="ZIP Code" name="zip" value={form.zip} error={errors.zip} onChange={setForm} />
              <Input label="City" name="city" value={form.city} error={errors.city} onChange={setForm} />
              <Input label="Country" name="country" value={form.country} error={errors.country} onChange={setForm} />
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-[#D87D4A] font-bold uppercase mb-4">Payment Details</legend>
            <div className="space-y-2">
              <label className="font-medium text-sm">Payment Method</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" value="e-money" checked={form.payment === 'e-money'} onChange={e => setForm(f => ({ ...f, payment: e.target.value }))} />
                  e-Money
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" value="cash" checked={form.payment === 'cash'} onChange={e => setForm(f => ({ ...f, payment: e.target.value }))} />
                  Cash on Delivery
                </label>
              </div>
            </div>

            {form.payment === 'e-money' && (
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <Input label="e-Money Number" name="eMoneyNumber" value={form.eMoneyNumber} error={errors.eMoneyNumber} onChange={setForm} />
                <Input label="e-Money PIN" name="eMoneyPIN" value={form.eMoneyPIN} error={errors.eMoneyPIN} onChange={setForm} />
              </div>
            )}
          </fieldset>
        </div>

        
        <div className="bg-gray-100 p-6 rounded-lg space-y-4 h-fit">
          <h3 className="text-lg font-bold uppercase">Summary</h3>
          <div className="space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <img src={item.image.desktop.replace('./', '/')} alt={item.name} className="w-14 rounded" />
                  <div>
                    <p className="uppercase text-sm font-semibold">{item.name}</p>
                    <p className="text-gray-600 text-sm">${item.price.toLocaleString()}</p>
                  </div>
                </div>
                <span className="text-gray-700 text-sm">x{item.quantity}</span>
              </div>
            ))}
          </div>

          <div className="text-sm border-t pt-4 space-y-2">
            <SummaryRow label="Total" value={productTotal} />
            <SummaryRow label="Shipping" value={shipping} />
            <SummaryRow label="VAT (20%)" value={vat} />
            <SummaryRow label="Grand Total" value={grandTotal} bold />
          </div>

          <button type="submit" className="w-full bg-[#D87D4A] text-white py-3 uppercase tracking-wide hover:bg-[#FBAF85]">
            Continue & Pay
          </button>
        </div>
      </form>
    </main>
    <Footer />
  </div>
  );
}


function Input({ label, name, value, onChange, error, full = false }) {
  return (
    <div className={`flex flex-col ${full ? 'md:col-span-2' : ''}`}>
      <label className="text-sm font-medium mb-1">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={e => onChange(f => ({ ...f, [name]: e.target.value }))}
        className="border px-3 py-2 rounded outline-[#D87D4A]"
      />
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  );
}


function SummaryRow({ label, value, bold }) {
  return (
    <div className="flex justify-between">
      <p className="text-gray-600">{label}</p>
      <p className={`${bold ? 'font-bold text-[#D87D4A]' : 'font-semibold'}`}>${value.toFixed(2)}</p>
    </div>
  );
}

