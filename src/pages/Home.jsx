import Hero from '../components/Hero';
import CategoryCards from '../components/CategoryCards';
import FeaturedProducts from '../components/FeaturedProducts';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ButtonHero from '../components/ButtonHero';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container mx-auto px-6">
        <CategoryCards />
        <FeaturedProducts />
        <ButtonHero />
      </div>
      
      <Footer />
    </>
  );
}
