import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './SupportUs.css';

const allPackages = [
  {
    id: 'to-pkg-1',
    npo: 'TeachOut',
    colour: 'var(--gold)',
    category: 'teachout',
    title: 'Fund One Tutoring Day',
    description: 'Cover transport and materials for one Saturday tutoring session at Usasazo High School or Beautiful Gate Centre.',
    price: 350,
    impact: 'Supports up to 30 learners for a full day',
  },
  {
    id: 'to-pkg-2',
    npo: 'TeachOut',
    colour: 'var(--gold)',
    category: 'teachout',
    title: 'Sponsor One Month of Sessions',
    description: 'Fund four consecutive Saturday tutoring sessions covering volunteer coordination, materials, and learner refreshments.',
    price: 1400,
    impact: '4 sessions, up to 30 learners per session',
  },
  {
    id: 'to-pkg-3',
    npo: 'TeachOut',
    colour: 'var(--gold)',
    category: 'teachout',
    title: 'Full Term Sponsorship',
    description: 'Fund an entire school term of TeachOut sessions across both Usasazo High School and Beautiful Gate Centre.',
    price: 4200,
    impact: 'A full term of learning for dozens of learners',
  },
  {
    id: 'tdl-pkg-1',
    npo: 'Thethani Debating League',
    colour: 'var(--red)',
    category: 'thethani',
    title: 'Sponsor a Weekly Workshop',
    description: 'Fund one week of bi-weekly debate coaching workshops. Covers learner transport to UCT Upper Campus and refreshments.',
    price: 3500,
    impact: '100+ learners across 10 schools coached',
  },
  {
    id: 'tdl-pkg-2',
    npo: 'Thethani Debating League',
    colour: 'var(--red)',
    category: 'thethani',
    title: 'Sponsor an Average Tournament',
    description: 'Fund a full-day tournament for 120 learners including R50 transport reimbursements per learner, lunch packs, and certificates.',
    price: 6800,
    impact: '120 learners compete across junior and senior leagues',
  },
  {
    id: 'tdl-pkg-3',
    npo: 'Thethani Debating League',
    colour: 'var(--red)',
    category: 'thethani',
    title: 'Sponsor a Large Tournament',
    description: 'Fund a large-scale tournament for 200 learners with full catering, transport, prizes, and a themed motion set.',
    price: 11400,
    impact: '200 learners, 10 schools, one unforgettable day',
  },
  {
    id: 'tdl-pkg-4',
    npo: 'Thethani Debating League',
    colour: 'var(--red)',
    category: 'thethani',
    title: 'Full Year General Funding',
    description: 'Cover the full annual TDL programme budget including 6 workshops, 3 tournaments, volunteer socials, and committee T-shirts.',
    price: 55000,
    impact: 'Everything TDL needs for a complete 2026 season',
  },
  {
    id: 'ik-pkg-1',
    npo: 'Inkanyezi',
    colour: 'var(--blue)',
    category: 'inkanyezi',
    title: 'Pilot Programme Contribution',
    description: 'Support the 2026 Inkanyezi pilot year as the organisation restructures towards a responsive model of psychosocial and crisis support.',
    price: 2000,
    impact: 'Funds operational restructuring, materials, and planning',
  },
  {
    id: 'ik-pkg-2',
    npo: 'Inkanyezi',
    colour: 'var(--blue)',
    category: 'inkanyezi',
    title: 'Learner Wellbeing Fund',
    description: 'Directly fund psychosocial support resources and crisis intervention materials for learners in Khayelitsha high schools.',
    price: 5000,
    impact: 'Resources for learner wellbeing across the pilot school',
  },
  {
    id: 'gen-pkg-1',
    npo: 'Ubunye',
    colour: 'var(--green)',
    category: 'general',
    title: 'General Annual Fund',
    description: 'Contribute to the Ubunye general annual budget, covering all three NPOs across the full 2026 school year.',
    price: 5000,
    impact: 'Sustains 3 NPOs, 10+ schools, 100+ learners weekly',
  },
  {
    id: 'gen-pkg-2',
    npo: 'Ubunye',
    colour: 'var(--green)',
    category: 'general',
    title: 'Corporate Partnership',
    description: 'A major annual partnership covering all operational costs. Includes co-branding at tournaments, impact reports, and a named sponsor profile on this website.',
    price: 50000,
    impact: 'Full partnership across all three NPOs for 2026',
  },
];

const filters = [
  { id: 'all',       label: 'All Packages' },
  { id: 'teachout',  label: 'TeachOut' },
  { id: 'thethani',  label: 'Thethani' },
  { id: 'inkanyezi', label: 'Inkanyezi' },
  { id: 'general',   label: 'General' },
];

const HEART_FILLED = '\u2665';
const HEART_EMPTY  = '\u2661';
const CROSS        = '\u2715';

export default function SupportUs() {
  const { addToCart, cartItems } = useCart();
  const [activeFilter, setActiveFilter] = useState('all');
  const [wishlist, setWishlist] = useState([]);

  function handleAdd(pkg) {
    addToCart({ id: pkg.id, title: pkg.title, npo: pkg.npo, price: pkg.price });
  }

  function toggleWishlist(id) {
    setWishlist(prev =>
      prev.includes(id) ? prev.filter(w => w !== id) : [...prev, id]
    );
  }

  function isInCart(id) {
    return cartItems.some(i => i.id === id);
  }

  function isWishlisted(id) {
    return wishlist.includes(id);
  }

  const filtered = activeFilter === 'all'
    ? allPackages
    : allPackages.filter(p => p.category === activeFilter);

  const wishlistPackages = allPackages.filter(p => wishlist.includes(p.id));

  return (
    <main>

      {/* HERO */}
      <section className="support-hero">
        <div className="container support-hero__inner">
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Support Ubunye
          </span>
          <h1 className="support-hero__title">
            18 years of impact.<br />
            <span style={{ color: 'var(--green)' }}>Help us write the next chapter.</span>
          </h1>
          <p className="support-hero__sub">
            Since 2008, Ubunye has reached thousands of learners across Cape Town&apos;s
            townships. No payment is processed here &mdash; choose your package, submit
            your pledge, and our team will contact you within 48 hours.
          </p>
          <div className="support-hero__trust">
            <span>Registered NPO &middot; 061-733-NPO</span>
            <span>Registered PBO &middot; 070000190</span>
            <span>MacJannet Prize for Global Citizenship, 2010</span>
          </div>
        </div>
      </section>

      {/* WISHLIST STRIP */}
      {wishlistPackages.length > 0 && (
        <div className="wishlist-strip">
          <div className="container wishlist-strip__inner">
            <span className="wishlist-strip__label">
              Saved for later ({wishlistPackages.length})
            </span>
            <div className="wishlist-strip__items">
              {wishlistPackages.map(pkg => (
                <div key={pkg.id} className="wishlist-strip__item">
                  <span>{pkg.title}</span>
                  <span className="wishlist-strip__price">R{pkg.price.toLocaleString()}</span>
                  <button
                    className="wishlist-strip__add"
                    onClick={() => handleAdd(pkg)}
                    disabled={isInCart(pkg.id)}
                  >
                    {isInCart(pkg.id) ? 'Added' : 'Add to Pledge'}
                  </button>
                  <button
                    className="wishlist-strip__remove"
                    onClick={() => toggleWishlist(pkg.id)}
                    aria-label="Remove from saved"
                  >
                    {CROSS}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* PACKAGES */}
      <section className="section">
        <div className="container">

          <div className="support-filters">
            {filters.map(f => (
              <button
                key={f.id}
                className={'support-filter-btn' + (activeFilter === f.id ? ' active' : '')}
                onClick={() => setActiveFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="support-packages-grid">
            {filtered.map(pkg => (
              <div
                key={pkg.id}
                className="support-package-card"
                style={{ '--pkg-colour': pkg.colour }}
              >
                <button
                  className={'support-pkg-wishlist' + (isWishlisted(pkg.id) ? ' active' : '')}
                  onClick={() => toggleWishlist(pkg.id)}
                  aria-label={isWishlisted(pkg.id) ? 'Remove from saved' : 'Save for later'}
                >
                  {isWishlisted(pkg.id) ? HEART_FILLED : HEART_EMPTY}
                </button>

                <div className="support-pkg-header">
                  <span className="support-pkg-npo">{pkg.npo}</span>
                </div>
                <h3 className="support-pkg-title">{pkg.title}</h3>
                <p className="support-pkg-desc">{pkg.description}</p>
                <p className="support-pkg-impact">Impact: {pkg.impact}</p>
                <div className="support-pkg-footer">
                  <span className="support-pkg-price">R{pkg.price.toLocaleString()}</span>
                  <button
                    className={isInCart(pkg.id) ? 'btn btn-dark' : 'btn btn-primary'}
                    onClick={() => handleAdd(pkg)}
                  >
                    {isInCart(pkg.id) ? 'Added' : 'Add to Pledge'}
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BANKING DETAILS */}
      <section className="section section--light">
        <div className="container support-banking">
          <div className="support-banking__text">
            <span className="section-label">Direct Transfer</span>
            <h2 className="section-title" style={{ fontSize: '1.8rem' }}>
              Prefer to transfer directly?
            </h2>
            <p className="section-subtitle">
              You are welcome to make a direct EFT to Ubunye&apos;s UCT-administered bank account.
              Please email us after transfer so we can acknowledge your contribution and
              send your impact report.
            </p>
            <a href="mailto:tdluct@gmail.com" className="btn btn-dark" style={{ marginTop: 24 }}>
              Contact Us
            </a>
          </div>
          <div className="support-banking__details">
            <h3>Banking Details</h3>
            <div className="banking-row">
              <span>Account Name</span>
              <strong>UCT Sundries Account</strong>
            </div>
            <div className="banking-row">
              <span>Account Number</span>
              <strong>071503854</strong>
            </div>
            <div className="banking-row">
              <span>Bank</span>
              <strong>Standard Bank</strong>
            </div>
            <div className="banking-row">
              <span>Branch</span>
              <strong>Rondebosch &mdash; 025009</strong>
            </div>
            <div className="banking-row">
              <span>Reference</span>
              <strong>Fund no. 672067</strong>
            </div>
            <p className="banking-note">
              PBO registration 070000190 &middot; Donations may qualify for Section 18A tax relief.
              Contact us for a certificate.
            </p>
          </div>
        </div>
      </section>

      {/* STICKY CART CTA */}
      {cartItems.length > 0 && (
        <div className="support-cart-cta">
          <div className="container support-cart-cta__inner">
            <span>{cartItems.reduce((s, i) => s + i.quantity, 0)} package(s) in your pledge basket</span>
            <Link to="/cart" className="btn btn-primary">Review and Submit Pledge</Link>
          </div>
        </div>
      )}

    </main>
  );
}
