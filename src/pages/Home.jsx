import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Ticker from '../components/Ticker';
import SchoolsMap from '../components/SchoolsMap';
import './Home.css';

const packages = [
  { id: 'pkg-1', npo: 'TeachOut',                 colour: 'var(--gold)',  title: 'Fund One Tutoring Day',    description: 'Cover transport and materials for one Saturday tutoring session at Usasazo High School or Beautiful Gate Centre.', price: 350,  impact: 'Supports up to 30 learners for a full day' },
  { id: 'pkg-2', npo: 'Thethani Debating League',  colour: 'var(--red)',   title: 'Sponsor a Debate Workshop', description: 'Fund one week of bi-weekly debate coaching workshops for 100+ learners across Cape Town townships.', price: 3500, impact: '100+ learners coached across 10 schools' },
  { id: 'pkg-3', npo: 'Thethani Debating League',  colour: 'var(--red)',   title: 'Sponsor a Tournament',      description: 'Fund a full-day tournament including transport reimbursements, lunch packs, and certificates for 120 learners.', price: 6800, impact: '120 learners compete on a day they will remember' },
  { id: 'pkg-4', npo: 'Inkanyezi',                 colour: 'var(--blue)',  title: 'Pilot Programme Support',   description: 'Support the revival of Inkanyezi, funding mentorship and psychosocial support for learners in Khayelitsha.', price: 2000, impact: 'Directly funds student mentor training and materials' },
  { id: 'pkg-5', npo: 'Ubunye',                    colour: 'var(--green)', title: 'General Annual Fund',       description: 'Contribute to Ubunye general annual budget, covering all three NPOs across the 2026 school year.', price: 5000, impact: 'Sustains 3 NPOs, 10 schools, 100+ learners weekly' },
];

const stats = [
  { number: '18',   label: 'Years of Impact' },
  { number: '3',    label: 'Active NPOs' },
  { number: '12+',  label: 'Schools Served' },
  { number: '100+', label: 'Learners Weekly' },
  { number: '46',   label: 'Volunteers in 2026' },
];

const programmes = [
  { slug: 'ikanyezi', colour: 'var(--blue)',  logo: '/images/inkanyezi-logo.png', name: 'Inkanyezi',                tagline: 'Let Us Shine',                                img: '/images/Ikanyezi1.jpg',           description: 'Founded in 2005, Inkanyezi provides mentorship, crisis support, and psychosocial care to learners in Khayelitsha. Currently undergoing a structured 2026 pilot revival.' },
  { slug: 'teachout', colour: 'var(--gold)',  logo: '/images/teachout-logo.png',  name: 'TeachOut',                 tagline: 'Free quality tutoring, every Saturday',       img: '/images/StudentsOneTeachOut.jpeg', description: 'TeachOut provides free academic tutoring in English, Mathematics, Accounting, and Physics to learners at Usasazo High School and Beautiful Gate Centre.' },
  { slug: 'thethani', colour: 'var(--red)',   logo: '/images/thethani-logo.png',  name: 'Thethani Debating League', tagline: "South Africa's largest outreach debating league", img: '/images/TDL1.jpg',             description: "For 20 consecutive years, TDL has coached 100+ learners weekly across 10 Cape Town township schools in critical thinking and public speaking." },
];

export default function Home() {
  const { addToCart, cartItems } = useCart();
  function handleAdd(pkg) { addToCart({ id: pkg.id, title: pkg.title, npo: pkg.npo, price: pkg.price }); }
  function isInCart(id)   { return cartItems.some(i => i.id === id); }

  return (
    <main>

      {/* HERO */}
      <section className="hero">
        <div className="hero__bg" style={{ backgroundImage: 'url(/images/StudentsTwoTeachOut.jpeg)' }} />
        <div className="hero__overlay" />
        <div className="container hero__inner">
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>
            UCT Social Enterprise &middot; NPO 061-733 &middot; Est. 2008
          </span>
          <h1 className="hero__title">
            Empowering Cape Town&apos;s Youth,{' '}
            <span className="hero__accent">Together.</span>
          </h1>
          <p className="hero__sub">
            Ubunye &mdash; meaning unity &mdash; is a student-run development agency at UCT.
            We manage three non-profit organisations serving under-resourced high schools
            across Cape Town&apos;s townships.
          </p>
          <div className="hero__actions">
            <Link to="/support-us" className="btn btn-primary">Support Our Work</Link>
            <Link to="/volunteer"  className="btn btn-outline">Volunteer With Us</Link>
          </div>
          <p className="hero__press">
            Featured in{' '}
            <a
              href="https://www.news.uct.ac.za/article/-2026-03-17-ubunyes-student-volunteers-ready-themselves-for-2026s-educational-outreach"
              target="_blank"
              rel="noreferrer"
              className="hero__press-link"
            >
              UCT News, March 2026
            </a>
            {' '}&middot; MacJannet Prize for Global Citizenship, 2010
          </p>
        </div>
      </section>

      {/* TICKER — file must be in src/components/Ticker.jsx */}
      <Ticker />

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
            <h2 className="section-title">Unity in purpose.<br />Action in the townships.</h2>
            <p className="section-subtitle">
              Ubunye was born from a belief that UCT students have both the privilege
              and the responsibility to invest in the communities around them. Every
              Saturday, our volunteers give up their mornings to tutor, coach, and
              mentor high school learners who deserve the same opportunities as anyone else.
            </p>
            <p className="section-subtitle" style={{ marginTop: 16 }}>
              We are entirely student-run, registered as a Public Benefit Organisation,
              and proudly based at the University of Cape Town since 2008.
            </p>
            <div style={{ marginTop: 32, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/volunteer" className="btn btn-dark">Become a Volunteer</Link>
              <Link to="/impact-calculator" className="btn btn-primary">Calculate Your Impact</Link>
            </div>
          </div>

          <div className="about__photo-wrap">
            <img
              src="/images/CoverStudentTeachOut.jpeg"
              alt="Ubunye volunteers"
              className="about__photo-img"
              onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }}
            />
            <div className="img-slot__fallback">
              <p>Add volunteer photo here</p>
              <small>public/images/CoverStudentTeachOut.jpeg</small>
            </div>
            <div className="about__quote-chip">
              <p>&ldquo;Our vision is to empower young people from disadvantaged communities to recognise their full potential.&rdquo;</p>
              <cite>Oshiannahy Rakgoale, Deputy Chairperson &mdash; UCT News 2026</cite>
            </div>
          </div>
        </div>
      </section>

      {/* NPO LOGOS STRIP */}
      <section className="npo-logos-strip">
        <div className="container npo-logos-strip__inner">
          <span className="npo-logos-strip__label">Our programmes</span>
          {programmes.map(p => (
            <Link to={"/" + p.slug} key={p.slug} className="npo-logos-strip__item" title={p.name}>
              <img
                src={p.logo}
                alt={p.name}
                onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='block'; }}
              />
              <span style={{ display:'none', fontFamily:'var(--font-heading)', fontWeight:700, color:p.colour }}>{p.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* PROGRAMMES */}
      <section className="section">
        <div className="container">
          <span className="section-label">Our Programmes</span>
          <h2 className="section-title">Three NPOs. One mission.</h2>
          <p className="section-subtitle" style={{ marginBottom: 48 }}>
            Each organisation targets a different dimension of youth development.
            Together they form a holistic support system for learners who need it most.
          </p>
          <div className="programmes__grid">
            {programmes.map(p => (
              <Link to={"/" + p.slug} key={p.slug} className="programme-card" style={{ '--card-colour': p.colour }}>
                <div className="programme-card__photo">
                  <img
                    src={p.img}
                    alt={p.name}
                    onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }}
                  />
                  <div className="programme-card__fallback"><span>{p.name} photo</span></div>
                  <div className="programme-card__overlay">
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="programme-card__logo"
                      onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='block'; }}
                    />
                    <span className="programme-card__icon-badge" style={{ background: p.colour, display: 'none' }}>
                      {p.name.substring(0,2).toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="programme-card__body">
                  <span className="programme-card__tag" style={{ color: p.colour }}>{p.tagline}</span>
                  <h3 className="programme-card__name">{p.name}</h3>
                  <p className="programme-card__desc">{p.description}</p>
                  <span className="programme-card__link" style={{ color: p.colour }}>Learn more</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MAP — replaces the broken 3-col packages preview */}
      <SchoolsMap />

      {/* PACKAGES PREVIEW — 2 highlighted ones, link to full page */}
      <section className="section section--light" id="support">
        <div className="container">
          <span className="section-label">Support Us</span>
          <h2 className="section-title">Every rand makes a difference.</h2>
          <p className="section-subtitle" style={{ marginBottom: 40 }}>
            Choose a sponsorship package. No payment gateway required &mdash; submit
            a pledge and our team will be in touch within 48 hours.
          </p>
          <div className="packages__grid">
            {packages.map(pkg => (
              <div key={pkg.id} className="package-card" style={{ '--pkg-colour': pkg.colour }}>
                <div className="package-card__header">
                  <span className="package-card__npo">{pkg.npo}</span>
                </div>
                <h3 className="package-card__title">{pkg.title}</h3>
                <p className="package-card__desc">{pkg.description}</p>
                <p className="package-card__impact">Impact: {pkg.impact}</p>
                <div className="package-card__footer">
                  <span className="package-card__price">R{pkg.price.toLocaleString()}</span>
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
          <div style={{ textAlign:'center', marginTop:40, display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
            <Link to="/support-us" className="btn btn-dark">View All Packages</Link>
            <Link to="/impact-calculator" className="btn btn-primary">Calculate Your Impact</Link>
          </div>
        </div>
      </section>

      {/* VOLUNTEER CTA */}
      <section className="volunteer-cta">
        <div className="container volunteer-cta__inner">
          <div>
            <h2 className="volunteer-cta__title">Are you a UCT student?</h2>
            <p className="volunteer-cta__sub">
              Give up a Saturday. Change a learner&apos;s trajectory. Over 100 new
              volunteers joined Ubunye in 2026. Come be part of something that matters.
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
