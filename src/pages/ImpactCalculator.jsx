import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ImpactCalculator.css';

// ── Impact data: what each rand amount funds ──────────────────────
const IMPACT_TIERS = [
  {
    threshold: 350,
    icon: '\u270F',
    label: 'One tutoring session',
    description: 'Funds a full Saturday tutoring session at Usasazo High School or Beautiful Gate Centre, covering materials and coordination for up to 30 learners.',
    npo: 'TeachOut',
    colour: 'var(--gold)',
    packageId: 'to-pkg-1',
    packagePrice: 350,
  },
  {
    threshold: 1400,
    icon: '\uD83D\uDCD6',
    label: 'One month of tutoring',
    description: 'Four consecutive Saturday sessions — a full month of academic support in English, Mathematics, Accounting, or Physics for learners in Khayelitsha and Philippi.',
    npo: 'TeachOut',
    colour: 'var(--gold)',
    packageId: 'to-pkg-2',
    packagePrice: 1400,
  },
  {
    threshold: 2000,
    icon: '\u2764',
    label: 'Inkanyezi pilot support',
    description: 'Directly funds the 2026 Inkanyezi restructuring pilot — covering operational planning, psychosocial support frameworks, and mentor training materials.',
    npo: 'Inkanyezi',
    colour: 'var(--blue)',
    packageId: 'ik-pkg-1',
    packagePrice: 2000,
  },
  {
    threshold: 3500,
    icon: '\uD83C\uDFA4',
    label: 'One debate workshop week',
    description: 'Funds a full week of bi-weekly TDL coaching workshops — transport for 100+ learners to UCT Upper Campus, refreshments, and volunteer coordination across 10 schools.',
    npo: 'Thethani Debating League',
    colour: 'var(--red)',
    packageId: 'tdl-pkg-1',
    packagePrice: 3500,
  },
  {
    threshold: 4200,
    icon: '\uD83C\uDF93',
    label: 'A full term of tutoring',
    description: 'Sponsors an entire school term of TeachOut sessions across both partner schools — giving dozens of learners consistent academic support for three full months.',
    npo: 'TeachOut',
    colour: 'var(--gold)',
    packageId: 'to-pkg-3',
    packagePrice: 4200,
  },
  {
    threshold: 5000,
    icon: '\uD83C\uDFC6',
    label: 'Learner wellbeing fund',
    description: 'Covers psychosocial support resources and crisis intervention materials for high school learners in Khayelitsha — addressing the emotional barriers to learning.',
    npo: 'Inkanyezi',
    colour: 'var(--blue)',
    packageId: 'ik-pkg-2',
    packagePrice: 5000,
  },
  {
    threshold: 6800,
    icon: '\uD83C\uDFC5',
    label: 'A full debate tournament',
    description: 'Sponsors a complete tournament day for 120 learners from 10 schools — R50 transport reimbursement per learner, full lunch packs, and certificates for top speakers.',
    npo: 'Thethani Debating League',
    colour: 'var(--red)',
    packageId: 'tdl-pkg-2',
    packagePrice: 6800,
  },
  {
    threshold: 11400,
    icon: '\uD83C\uDF1F',
    label: 'A large-scale tournament',
    description: 'Funds a 200-learner tournament with a themed motion set, full catering, transport reimbursements, and prize certificates — a full day of debate across junior and senior leagues.',
    npo: 'Thethani Debating League',
    colour: 'var(--red)',
    packageId: 'tdl-pkg-3',
    packagePrice: 11400,
  },
  {
    threshold: 55000,
    icon: '\uD83D\uDE80',
    label: 'TDL full year programme',
    description: 'The complete 2026 TDL season — 6 workshops, 3 tournaments, volunteer socials, and committee T-shirts for South Africa\'s largest outreach debating league.',
    npo: 'Thethani Debating League',
    colour: 'var(--red)',
    packageId: 'tdl-pkg-4',
    packagePrice: 55000,
  },
];

// ── Slider min/max ────────────────────────────────────────────────
const MIN = 100;
const MAX = 60000;

function getActiveTier(amount) {
  const eligible = IMPACT_TIERS.filter(t => amount >= t.threshold);
  return eligible.length > 0 ? eligible[eligible.length - 1] : null;
}

function getProgressPercent(amount) {
  return Math.min(100, Math.round(((amount - MIN) / (MAX - MIN)) * 100));
}

function formatRand(val) {
  return 'R' + Number(val).toLocaleString('en-ZA');
}

// ── Quick-select buttons ──────────────────────────────────────────
const QUICK_AMOUNTS = [350, 1400, 3500, 6800, 11400, 55000];

export default function ImpactCalculator() {
  const [amount, setAmount] = useState(3500);
  const [inputVal, setInputVal] = useState('3500');
  const { addToCart, cartItems } = useCart();

  const activeTier = getActiveTier(amount);
  const progress = getProgressPercent(amount);

  function handleSlider(e) {
    const val = Number(e.target.value);
    setAmount(val);
    setInputVal(String(val));
  }

  function handleInput(e) {
    const raw = e.target.value.replace(/\D/g, '');
    setInputVal(raw);
    const num = Number(raw);
    if (num >= MIN && num <= MAX) setAmount(num);
  }

  function handleInputBlur() {
    const num = Number(inputVal);
    if (!num || num < MIN) { setAmount(MIN); setInputVal(String(MIN)); }
    else if (num > MAX)    { setAmount(MAX); setInputVal(String(MAX)); }
    else                   { setAmount(num); setInputVal(String(num)); }
  }

  function handleQuick(val) {
    setAmount(val);
    setInputVal(String(val));
  }

  function handleAddToCart() {
    if (!activeTier) return;
    addToCart({
      id: activeTier.packageId,
      title: activeTier.label,
      npo: activeTier.npo,
      price: activeTier.packagePrice,
    });
  }

  function isInCart() {
    return activeTier && cartItems.some(i => i.id === activeTier.packageId);
  }

  // Milestones for the track markers
  const milestones = IMPACT_TIERS.map(t => ({
    ...t,
    pct: getProgressPercent(t.threshold),
  }));

  return (
    <main>

      {/* HERO */}
      <section className="calc-hero">
        <div className="container calc-hero__inner">
          <Link to="/support-us" className="calc-back">Back to Sponsorship Packages</Link>
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Creative Tool
          </span>
          <h1 className="calc-hero__title">
            See exactly what your<br />
            <span className="calc-hero__accent">contribution funds.</span>
          </h1>
          <p className="calc-hero__sub">
            Move the slider to any amount and watch your impact update in real time.
            Every rand you pledge has a direct, traceable outcome for learners across
            Cape Town&apos;s townships.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="section section--light">
        <div className="container calc-wrap">

          {/* ── INPUT AREA ── */}
          <div className="calc-input-area">
            <label className="calc-input-label">I want to contribute</label>
            <div className="calc-amount-row">
              <span className="calc-currency">R</span>
              <input
                type="text"
                className="calc-amount-input"
                value={inputVal}
                onChange={handleInput}
                onBlur={handleInputBlur}
                inputMode="numeric"
                aria-label="Contribution amount in rands"
              />
            </div>

            {/* Quick select */}
            <div className="calc-quick">
              {QUICK_AMOUNTS.map(q => (
                <button
                  key={q}
                  className={'calc-quick-btn' + (amount === q ? ' active' : '')}
                  onClick={() => handleQuick(q)}
                >
                  {formatRand(q)}
                </button>
              ))}
            </div>

            {/* Slider */}
            <div className="calc-slider-wrap">
              <input
                type="range"
                className="calc-slider"
                min={MIN}
                max={MAX}
                step={50}
                value={Math.min(amount, MAX)}
                onChange={handleSlider}
                aria-label="Contribution slider"
                style={{ '--progress': progress + '%' }}
              />
              <div className="calc-slider-labels">
                <span>{formatRand(MIN)}</span>
                <span>{formatRand(MAX)}</span>
              </div>
            </div>

            {/* Milestone markers */}
            <div className="calc-milestones">
              {milestones.map(m => (
                <button
                  key={m.threshold}
                  className={'calc-milestone' + (amount >= m.threshold ? ' reached' : '')}
                  style={{ left: m.pct + '%' }}
                  onClick={() => handleQuick(m.threshold)}
                  title={formatRand(m.threshold) + ' - ' + m.label}
                  aria-label={m.label}
                />
              ))}
            </div>
          </div>

          {/* ── IMPACT DISPLAY ── */}
          <div className="calc-impact-display">
            {activeTier ? (
              <div
                className="calc-impact-card"
                style={{ '--tier-colour': activeTier.colour }}
              >
                <div className="calc-impact-card__top">
                  <span className="calc-impact-card__npo">{activeTier.npo}</span>
                  <span className="calc-impact-card__amount">{formatRand(amount)}</span>
                </div>
                <div className="calc-impact-card__icon">{activeTier.icon}</div>
                <h2 className="calc-impact-card__label">{activeTier.label}</h2>
                <p className="calc-impact-card__desc">{activeTier.description}</p>

                <div className="calc-impact-card__actions">
                  <button
                    className={isInCart() ? 'btn btn-dark' : 'btn btn-primary'}
                    onClick={handleAddToCart}
                    disabled={isInCart()}
                  >
                    {isInCart() ? 'Added to Pledge' : 'Add to Pledge'}
                  </button>
                  <Link to="/cart" className="btn btn-outline calc-view-cart">
                    View Basket
                  </Link>
                </div>

                <p className="calc-impact-card__note">
                  This unlocks the <strong>{activeTier.label}</strong> package at{' '}
                  {formatRand(activeTier.packagePrice)}. No payment processed here.
                </p>
              </div>
            ) : (
              <div className="calc-impact-empty">
                <p>Move the slider above {formatRand(MIN)} to see your impact.</p>
              </div>
            )}
          </div>

          {/* ── IMPACT LADDER ── */}
          <div className="calc-ladder">
            <h3 className="calc-ladder__title">All impact milestones</h3>
            <div className="calc-ladder__items">
              {IMPACT_TIERS.map(t => (
                <button
                  key={t.threshold}
                  className={'calc-ladder__item' + (activeTier && activeTier.threshold === t.threshold ? ' active' : '') + (amount >= t.threshold ? ' reached' : '')}
                  style={{ '--item-colour': t.colour }}
                  onClick={() => handleQuick(t.threshold)}
                >
                  <span className="calc-ladder__icon">{t.icon}</span>
                  <span className="calc-ladder__info">
                    <span className="calc-ladder__item-label">{t.label}</span>
                    <span className="calc-ladder__item-npo">{t.npo}</span>
                  </span>
                  <span className="calc-ladder__item-price">{formatRand(t.threshold)}</span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="calc-cta">
        <div className="container calc-cta__inner">
          <div>
            <h2>Ready to make your pledge?</h2>
            <p>Browse all sponsorship packages or go straight to your basket.</p>
          </div>
          <div className="calc-cta__actions">
            <Link to="/support-us" className="btn btn-outline">All Packages</Link>
            <Link to="/cart" className="btn btn-primary">View Pledge Basket</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
