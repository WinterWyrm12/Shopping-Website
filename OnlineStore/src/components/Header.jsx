import './Header.css';

function Header() {
  return (
    <header className="app-header">
        <h1 className="logo">OnlineStore</h1>
        <nav className="nav-menu">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Products</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Contact</a>
        </nav>
        <button className="cart-btn"> Cart</button>
    </header>
  );
}

export default Header;