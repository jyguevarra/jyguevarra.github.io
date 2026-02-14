import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <nav className="nav">
        <div className="logo" aria-hidden="true">
          Rhine <span className="labs">Labs</span>
        </div>
        
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/productCatalog">Product Catalog</Link>
          <Link to="/shoppingCart">Shopping Cart</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header