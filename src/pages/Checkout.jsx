import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Checkout.css';

export default function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organisation: '',
    sponsorType: 'individual',
    message: '',
    newsletter: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }

  function validate() {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!form.lastName.trim())  newErrors.lastName  = 'Last name is required';
    if (!form.email.trim())     newErrors.email     = 'Email address is required';
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
    clearCart();
  }

  if (cartItems.length === 0 && !submitted) {
    return (
      <main className="checkout-empty">
        <div className="container checkout-empty__inner">
          <h2>Nothing to pledge yet.</h2>
          <p>Add sponsorship packages to your basket first.</p>
          <Link to="/support-us" className="btn btn-primary">Browse Packages</Link>
        </div>
      </main>
    );
  }

  if (submitted) {
    return (
      <main className="checkout-success">
        <div className="container checkout-success__inner">
          <div className="checkout-success__check">&#10003;</div>
          <h1>Thank you, {form.firstName}!</h1>
          <p>
            Your pledge has been received. A member of the Ubunye team will contact
            you at <strong>{form.email}</strong> within 48 hours to finalise your
            contribution and share your impact report.
          </p>
          <p style={{ marginTop: 12, color: '#aaa', fontSize: '0.9rem' }}>
            PBO Registration: 070000190 &middot; NPO Registration: 061-733-NPO
          </p>
          <Link to="/" className="btn btn-primary" style={{ marginTop: 32 }}>
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <div className="container checkout-page__layout">

        {/* FORM */}
        <div className="checkout-form-wrap">
          <h1 className="checkout-title">Complete Your Pledge</h1>
          <p className="checkout-subtitle">
            No payment is processed here. Our team will contact you within 48 hours
            to finalise your sponsorship.
          </p>

          <form className="checkout-form" onSubmit={handleSubmit} noValidate>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className={errors.firstName ? 'input-error' : ''}
                  placeholder="Your first name"
                />
                {errors.firstName && <span className="form-error">{errors.firstName}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className={errors.lastName ? 'input-error' : ''}
                  placeholder="Your last name"
                />
                {errors.lastName && <span className="form-error">{errors.lastName}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={errors.email ? 'input-error' : ''}
                  placeholder="your@email.com"
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'input-error' : ''}
                  placeholder="e.g. 072 123 4567"
                />
                {errors.phone && <span className="form-error">{errors.phone}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="organisation">Organisation (optional)</label>
              <input
                type="text"
                id="organisation"
                name="organisation"
                value={form.organisation}
                onChange={handleChange}
                placeholder="Company or institution name"
              />
            </div>

            <div className="form-group">
              <label>I am pledging as a</label>
              <div className="form-radio-group">
                <label className="form-radio">
                  <input
                    type="radio"
                    name="sponsorType"
                    value="individual"
                    checked={form.sponsorType === 'individual'}
                    onChange={handleChange}
                  />
                  Individual donor
                </label>
                <label className="form-radio">
                  <input
                    type="radio"
                    name="sponsorType"
                    value="corporate"
                    checked={form.sponsorType === 'corporate'}
                    onChange={handleChange}
                  />
                  Corporate sponsor
                </label>
                <label className="form-radio">
                  <input
                    type="radio"
                    name="sponsorType"
                    value="foundation"
                    checked={form.sponsorType === 'foundation'}
                    onChange={handleChange}
                  />
                  Foundation / trust
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message to Ubunye (optional)</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Any specific requests, questions, or motivations you would like to share with us..."
                rows={4}
              />
            </div>

            <div className="form-group">
              <label className="form-checkbox">
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={form.newsletter}
                  onChange={handleChange}
                />
                Keep me updated with Ubunye impact reports and news
              </label>
            </div>

            <button type="submit" className="btn btn-primary checkout-submit">
              Submit Pledge &mdash; R{cartTotal.toLocaleString()}
            </button>

          </form>
        </div>

        {/* ORDER SUMMARY */}
        <div className="checkout-summary">
          <h2>Pledge Summary</h2>
          <div className="checkout-summary__items">
            {cartItems.map(item => (
              <div key={item.id} className="checkout-summary__item">
                <div>
                  <span className="checkout-summary__npo">{item.npo}</span>
                  <span className="checkout-summary__name">{item.title} x{item.quantity}</span>
                </div>
                <span className="checkout-summary__price">
                  R{(item.price * item.quantity).toLocaleString()}
                </span>
              </div>
            ))}
          </div>
          <div className="checkout-summary__total">
            <span>Total</span>
            <span>R{cartTotal.toLocaleString()}</span>
          </div>
          <div className="checkout-summary__trust">
            <p>Registered PBO &middot; 070000190</p>
            <p>Registered NPO &middot; 061-733-NPO</p>
            <p>University of Cape Town</p>
          </div>
          <Link to="/cart" className="checkout-summary__edit">Edit basket</Link>
        </div>

      </div>
    </main>
  );
}
