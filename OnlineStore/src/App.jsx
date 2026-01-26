import './App.css';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero 
      title="OnlineStore"
      subtitle="The best produce in the market!"
      call="Shop Now"
      />
      <main className="main-content">
      <h2>Featured Items</h2>
      <ProductCard 
        productName="Apple"
        productImage="https://placehold.co/600x400"
        description="Single Golen Delicious Apple"
        price="$1"
      />
      <ProductCard 
        productName="Banana"
        productImage="https://placehold.co/600x400"
        description="Bundle of Bananas"
        price="$5"
      />
      <ProductCard 
        productName="Cherries"
        productImage="https://placehold.co/600x400"
        description="The best bag of cherries around"
        price="$3"
      />
      <Footer />
      </main>
    </div>
  );
}
export default App;