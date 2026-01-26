import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CartItem from './components/CartItem';


/* for list of items in cart
 <h2>Cart Items:</h2>
      <ul>
          {cart.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
 */

function App() {

  // Products
  const products = [
    { 
      id: 1, 
      name: "Apple", 
      price: 1.99, 
      image: "https://placehold.co/600x400",
      description: "Not the phone, but just as good."
    },
    { 
      id: 2, 
      name: "Banana", 
      price: 2.99, 
      image: "https://placehold.co/600x400",
      description: "Singular golden banana."
    },
    { 
      id: 3, 
      name: "Pineapple", 
      price: 9.99, 
      image: "https://placehold.co/600x400",
      description: "Spikey, acidic, snack."
    },
    { 
      id: 4, 
      name: "Blueberries", 
      price: 8.99, 
      image: "https://placehold.co/600x400",
      description: "3 small blueberries."
    },
    { 
      id: 5, 
      name: "Dragonfruit", 
      price: 78.99, 
      image: "https://placehold.co/600x400",
      description: "The most legendary fruit in the universe."
    },
    { 
      id: 6, 
      name: "Peach", 
      price: 1.69, 
      image: "https://placehold.co/600x400",
      description: "The sweetest peach from the heart of the Earth."
    }
  ];

  //cart
  //Add to Cart
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  //Remove from Cart
  const removeProduct = (productId)=>{
    setCart(cart.filter(product=>product.id !== productId));
  };

  // Total (reduce)
  const total = cart.reduce((accumulate, item) => accumulate + item.price, 0);


  return (
    <div className="app">
      <Header cartCount={cart.length} />
      <Hero 
        title="OnlineStore"
        subtitle="The best produce in the market!"
        call="Shop Now"
      />
      
      <main className="main-content">
        <h2>Featured Products</h2>

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}

        <h2>Your Cart:</h2>
        <div className="cart-items">
          {/* conditional for empty cart */}
          {cart.length === 0 ? (
            <p className="empty-text">Your cart is empty.</p>
          ) : (
            <>
              {cart.map((product)=> (
              <CartItem
              key={product.id}
              product={product}
              onDeleteProduct={removeProduct}
              />
            ))}
            {/* Total with decimals */}
            <p className="total-text">Total: ${total.toFixed(2)}</p>
            </>
          )}
          
        </div>
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
