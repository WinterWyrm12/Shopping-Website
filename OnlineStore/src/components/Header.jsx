import './Header.css';

function Header({cartCount}) {


  return (
    <header className="app-header">
        <h1 className="logo">OnlineStore</h1>
        <nav className="nav-menu">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Products</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Contact</a>
          <div className="cart">
            <span className="cart-count">🛒 {cartCount}</span>
          </div>
        </nav>
    </header>
  );
}

export default Header;