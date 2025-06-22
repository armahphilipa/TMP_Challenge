import { Link } from 'react-router-dom';

export default function Navbar({ onClick }) {
  return (
    <nav className="flex flex-col md:flex-row items-center gap-4 uppercase text-sm tracking-widest">
      <Link to="/" onClick={onClick}>Home</Link>
      <Link to="/category/headphones" onClick={onClick} className='hover:text-[#D87D4A]'>Headphones</Link>
      <Link to="/category/speakers" onClick={onClick} className='hover:text-[#D87D4A]'>Speakers</Link>
      <Link to="/category/earphones" onClick={onClick} className='hover:text-[#D87D4A]'>Earphones</Link>
    </nav>
  );
}
