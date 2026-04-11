import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="cart-empty">
        <div className="container cart-empty__inner">
          <div className="cart-empty__icon">0</div>
          <h2>Your pledge basket is empty.</h2>
          <p>Browse our sponsorship packages and choose how you would like to support Ubunye.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/support-us" className="btn btn-primary">View Packages</Link>
            <Link to="/" className="btn btn-dark">Back to Home</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="container">
        <div className="cart-page__header">
          <h1 className="cart-page__title">Your Pledge Basket</h1>
          <button className="cart-clear-btn" onClick={clearCart}>Clear all</button>
        </div>

        <div className="cart-page__layout">

          {/* ITEMS */}
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item__info">
                  <span className="cart-item__npo">{item.npo}</span>
                  <h3 className="cart-item__title">{item.title}</h3>
                  <span className="cart-item__unit">R{item.price.toLocaleString()} per unit</span>
                </div>
                <div className="cart-item__controls">
                  <div className="cart-item__qty">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>&#8722;</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>&#43;</button>
                  </div>
                  <span className="cart-item__subtotal">
                    R{(item.price * item.quantity).toLocaleString()}
                  </span>
                  <button
                    className="cart-item__remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* SUMMARY */}
          <div className="cart-summary">
            <h2 className="cart-summary__title">Summary</h2>
            <div className="cart-summary__rows">
              {cartItems.map(item => (
                <div key={item.id} className="cart-summary__row">
                  <span>{item.title} x{item.quantity}</span>
                  <span>R{(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="cart-summary__total">
              <span>Total Pledge</span>
              <span>R{cartTotal.toLocaleString()}</span>
            </div>
            <p className="cart-summary__note">
              No payment is processed here. After submitting, our team will contact
              you within 48 hours to finalise your contribution.
            </p>
            <Link to="/checkout" className="btn btn-primary cart-summary__cta">
              Proceed to Pledge
            </Link>
            <Link to="/support-us" className="cart-summary__continue">
              Add more packages
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}
