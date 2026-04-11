import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

export default function Navbar() {
  const { cartCount } = useCart();
  const location = useLocation();

  function isActive(path) {
    return location.pathname === path ? 'active' : '';
  }

  return (
    <nav className="navbar">
      <div className="container navbar__inner">

        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-text">Ubunye</span>
          <span className="navbar__logo-sub">Development Agency</span>
        </Link>

        <ul className="navbar__links">
          <li><Link to="/ikanyezi"  className={isActive('/ikanyezi')}>Inkanyezi</Link></li>
          <li><Link to="/teachout"  className={isActive('/teachout')}>TeachOut</Link></li>
          <li><Link to="/thethani"  className={isActive('/thethani')}>Thethani</Link></li>
          <li><Link to="/volunteer" className={isActive('/volunteer')}>Volunteer</Link></li>
        </ul>

        <div className="navbar__actions">
          <Link to="/cart" className="navbar__cart">
            <span className="navbar__cart-icon">&#128722;</span>
            {cartCount > 0 && (
              <span className="navbar__cart-count">{cartCount}</span>
            )}
          </Link>
          <Link to="/support-us" className="btn btn-primary">Support Us</Link>
        </div>

      </div>
    </nav>
  );
}
