import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

export default function Navbar() {
  const { cartCount } = useCart();
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="container navbar__inner">

        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-text">Ubunye</span>
          <span className="navbar__logo-sub">Development Agency</span>
        </Link>

        {/* Links */}
        <ul className="navbar__links">
          <li><Link to="/ikanyezi"   className={location.pathname === '/ikanyezi'  ? 'active' : ''}>Inkanyezi</Link></li>
          <li><Link to="/teachout"   className={location.pathname === '/teachout'  ? 'active' : ''}>TeachOut</Link></li>
          <li><Link to="/thethani"   className={location.pathname === '/thethani'  ? 'active' : ''}>Thethani</Link></li>
          <li><Link to="/volunteer"  className={location.pathname === '/volunteer' ? 'active' : ''}>Volunteer</Link></li>
        </ul>

        {/* CTAs */}
        <div className="navbar__actions">
          <Link to="/cart" className="navbar__cart">
            🛒 <span className="navbar__cart-count">{cartCount}</span>
          </Link>
          <Link to="/support-us" className="btn btn-primary">Support Us</Link>
        </div>

      </div>
    </nav>
  );
}