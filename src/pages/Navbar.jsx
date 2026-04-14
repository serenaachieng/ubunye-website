import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

export default function Navbar() {
  const { cartCount } = useCart();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  function isActive(path) {
    return location.pathname === path ? 'active' : '';
  }

  function closeMenu() { setMenuOpen(false); }

  return (
    <nav className="navbar">
      <div className="container navbar__inner">

        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <img
            src="/images/ubunye-logo.png"
            alt="Ubunye"
            className="navbar__logo-img"
            onError={e => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <span className="navbar__logo-fallback">
            <span className="navbar__logo-text">Ubunye</span>
            <span className="navbar__logo-sub">Development Agency</span>
          </span>
        </Link>

        <ul className={'navbar__links' + (menuOpen ? ' open' : '')}>
          <li><Link to="/ikanyezi"  className={isActive('/ikanyezi')}  onClick={closeMenu}>Inkanyezi</Link></li>
          <li><Link to="/teachout"  className={isActive('/teachout')}  onClick={closeMenu}>TeachOut</Link></li>
          <li><Link to="/thethani"  className={isActive('/thethani')}  onClick={closeMenu}>Thethani</Link></li>
          <li><Link to="/volunteer" className={isActive('/volunteer')} onClick={closeMenu}>Volunteer</Link></li>
          <li className="mobile-only"><Link to="/support-us"        onClick={closeMenu}>Support Us</Link></li>
          <li className="mobile-only"><Link to="/impact-calculator" onClick={closeMenu}>Impact Calculator</Link></li>
          <li className="mobile-only"><Link to="/cart"              onClick={closeMenu}>Pledge Basket {cartCount > 0 && `(${cartCount})`}</Link></li>
        </ul>

        <div className="navbar__actions">
          <Link to="/cart" className="navbar__cart" aria-label="Pledge basket">
            <span>&#128722;</span>
            {cartCount > 0 && <span className="navbar__cart-count">{cartCount}</span>}
          </Link>
          <Link to="/support-us" className="btn btn-primary navbar__cta" onClick={closeMenu}>
            Support Us
          </Link>
          <button
            className={'hamburger' + (menuOpen ? ' open' : '')}
            onClick={() => setMenuOpen(p => !p)}
            aria-label="Toggle navigation"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {menuOpen && <div className="navbar__overlay" onClick={closeMenu} />}
    </nav>
  );
}
