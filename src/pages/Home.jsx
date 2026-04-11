import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Home.css';

const packages = [
  {
    id: 'pkg-1',
    npo: 'TeachOut',
    colour: 'var(--gold)',
    title: 'Fund One Tutoring Day',
    description: 'Cover transport and materials for one Saturday tutoring session at Usasazo High School or Beautiful Gate Centre.',
    price: 350,
    impact: 'Supports up to 30 learners for a full day',
  },
  {
    id: 'pkg-2',
    npo: 'Thethani Debating League',
    colour: 'var(--red)',
    title: 'Sponsor a Debate Workshop',
    description: 'Fund one week of bi-weekly debate coaching workshops for 100+ learners across Cape Town townships.',
    price: 3500,
    impact: '100+ learners coached across 10 schools',
  },
  {
    id: 'pkg-3',
    npo: 'Thethani Debating League',
    colour: 'var(--red)',
    title: 'Sponsor a Tournament',
    description: 'Fund a full-day tournament including transport reimbursements, lunch packs, and certificates for 120 learners.',
    price: 6800,
    impact: '120 learners compete on a day they will remember',
  },
  {
    id: 'pkg-4',
    npo: 'Inkanyezi',
    colour: 'var(--blue)',
    title: 'Pilot Programme Support',
    description: 'Support the revival of Inkanyezi, funding mentorship and psychosocial support for learners in Khayelitsha.',
    price: 2000,
    impact: 'Directly funds student mentor training and materials',
  },
  {
    id: 'pkg-5',
    npo: 'Ubunye',
    colour: 'var(--green)',
    title: 'General Annual Fund',
    description: 'Contribute to Ubunye general annual budget, covering all three NPOs across the 2026 school year.',
    price: 5000,
    impact: 'Sustains 3 NPOs, 10 schools, 100+ learners weekly',
  },
];

const stats = [
  { number: '3',    label: 'Active NPOs' },
  { number: '12+',  label: 'Schools Served' },
  { number: '100+', label: 'Learners Weekly' },
  { number: '46',   label: 'Volunteers in 2026' },
  { number: '20',   label: 'Years of TDL' },
];

const programmes = [
  {
    slug: 'ikanyezi',
    colour: 'var(--blue)',
    icon: 'IK',
    name: 'Inkanyezi',
    tagline: 'Let Us Shine',
    description: 'Inkanyezi provides mentorship, crisis support, and psychosocial care to learners in under-resourced high schools in Khayelitsha. Currently undergoing a pilot revival for 2026.',
  },
  {
    slug: 'teachout',
    colour: 'var(--gold)',
    icon: 'TO',
    name: 'TeachOut',
    tagline: 'Free quality tutoring, every Saturday',
    description: 'TeachOut provides free academic tutoring in English, Mathematics, Accounting, and Physics to learners at Usasazo High School in Khayelitsha and Beautiful Gate Centre in Philippi.',
  },
  {
    slug: 'thethani',
    colour: 'var(--red)',
    icon: 'TDL',
    name: 'Thethani Debating League',
    tagline: "South Africa's largest outreach debating league",
    description: "For 20 consecutive years, TDL has coached 100+ learners weekly across 10 Cape Town township schools in critical thinking, public speaking, and active citizenship through competitive debate.",
  },
];

export default function Home() {
  const { addToCart, cartItems } = useCart();

  function handleAdd(pkg) {
    addToCart({ id: pkg.id, title: pkg.title, npo: pkg.npo, price: pkg.price });
  }

  function isInCart(id) {
    return cartItems.some(i => i.id === id);
  }

  return (
    <main>

      {/* HERO */}
      <section className="hero">
        <div className="container hero__inner">
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>
            UCT Social Enterprise &middot; NPO 061-733
          </span>
          <h1 className="hero__title">
            Empowering Cape Town&apos;s Youth,{' '}
            <span className="hero__accent">Together.</span>
          </h1>
          <p className="hero__sub">
            Ubunye &mdash; meaning unity &mdash; is a student-run development agency at the
            University of Cape Town. We manage three non-profit organisations serving
            under-resourced high schools across Cape Town&apos;s townships.
          </p>
          <div className="hero__actions">
            <Link to="/support-us" className="btn btn-primary">Support Our Work</Link>
            <Link to="/volunteer"  className="btn btn-outline">Volunteer With Us</Link>
          </div>
          <p className="hero__press">
            As featured in{' '}
            <a
              href="https://www.news.uct.ac.za/article/-2026-03-17-ubunyes-student-volunteers-ready-themselves-for-2026s-educational-outreach"
              target="_blank"
              rel="noreferrer"
              className="hero__press-link"
            >
              UCT News, March 2026
            </a>
          </p>
        </div>
      </section>

      {/* IMPACT BAR */}
      <section className="impact-bar">
        <div className="container impact-bar__inner">
          {stats.map(s => (
            <div key={s.label} className="impact-bar__stat">
              <span className="impact-bar__number">{s.number}</span>
              <span className="impact-bar__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="section section--light">
        <div className="container about">
          <div className="about__text">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">Unity in purpose. Action in the townships.</h2>
            <p className="section-subtitle">
              Ubunye was born from a belief that UCT students have both the privilege
              and the responsibility to invest in the communities around them. Every
              Saturday, our volunteers give up their mornings to tutor, coach, and
              mentor high school learners who deserve the same opportunities as anyone else.
            </p>
            <p className="section-subtitle" style={{ marginTop: 16 }}>
              We are entirely student-run, registered as a Public Benefit Organisation,
              and proudly based at the University of Cape Town.
            </p>
            <div style={{ marginTop: 32 }}>
              <Link to="/volunteer" className="btn btn-dark">Become a Volunteer</Link>
            </div>
          </div>
          <div className="about__quote">
            <blockquote>
              &ldquo;Our vision is to empower young people from disadvantaged communities to
              help them recognise their full potential.&rdquo;
            </blockquote>
            <cite>Oshiannahy Rakgoale, Deputy Chairperson, Ubunye</cite>
            <p className="about__source">
              Source:{' '}
              <a
                href="https://www.news.uct.ac.za/article/-2026-03-17-ubunyes-student-volunteers-ready-themselves-for-2026s-educational-outreach"
                target="_blank"
                rel="noreferrer"
              >
                UCT News, March 2026
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section className="section">
        <div className="container">
          <span className="section-label">Our Programmes</span>
          <h2 className="section-title">Three NPOs. One mission.</h2>
          <p className="section-subtitle" style={{ marginBottom: 56 }}>
            Each organisation targets a different dimension of youth development.
            Together they form a holistic support system for learners who need it most.
          </p>
          <div className="programmes__grid">
            {programmes.map(p => (
              <div
                key={p.slug}
                className="programme-card"
                style={{ '--card-colour': p.colour }}
              >
                <div className="programme-card__top">
                  <span className="programme-card__icon" style={{ background: p.colour }}>{p.icon}</span>
                  <span className="programme-card__tag">{p.tagline}</span>
                </div>
                <h3 className="programme-card__name">{p.name}</h3>
                <p className="programme-card__desc">{p.description}</p>
                <Link to={"/" + p.slug} className="programme-card__link">
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPONSORSHIP PACKAGES */}
      <section className="section section--light" id="support">
        <div className="container">
          <span className="section-label">Support Us</span>
          <h2 className="section-title">Every rand makes a difference.</h2>
          <p className="section-subtitle" style={{ marginBottom: 56 }}>
            Choose a sponsorship package below. No payment gateway required &mdash; you submit
            a pledge and our team will be in touch to finalise your contribution.
          </p>
          <div className="packages__grid">
            {packages.map(pkg => (
              <div
                key={pkg.id}
                className="package-card"
                style={{ '--pkg-colour': pkg.colour }}
              >
                <div className="package-card__header">
                  <span className="package-card__npo">{pkg.npo}</span>
                </div>
                <h3 className="package-card__title">{pkg.title}</h3>
                <p className="package-card__desc">{pkg.description}</p>
                <p className="package-card__impact">Impact: {pkg.impact}</p>
                <div className="package-card__footer">
                  <span className="package-card__price">
                    R{pkg.price.toLocaleString()}
                  </span>
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
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/support-us" className="btn btn-dark">
              View All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* VOLUNTEER CTA */}
      <section className="volunteer-cta">
        <div className="container volunteer-cta__inner">
          <div>
            <h2 className="volunteer-cta__title">Are you a UCT student?</h2>
            <p className="volunteer-cta__sub">
              Give up a Saturday. Change a learner&apos;s trajectory. Ubunye volunteers
              tutor, coach debates, and mentor high schoolers across Cape Town every week.
            </p>
          </div>
          <Link to="/volunteer" className="btn btn-primary volunteer-cta__btn">
            Register to Volunteer
          </Link>
        </div>
      </section>

    </main>
  );
}
