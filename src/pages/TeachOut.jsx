import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './NPO.css';

const packages = [
  { id: 'to-pkg-1', title: 'Fund One Tutoring Day',        description: 'Cover transport and materials for one Saturday tutoring session at Usasazo High School or Beautiful Gate Centre in Philippi.', price: 350,  impact: 'Supports up to 30 learners for a full day' },
  { id: 'to-pkg-2', title: 'Sponsor One Month of Sessions', description: 'Fund four consecutive Saturday tutoring sessions, covering volunteer coordination, materials, and learner refreshments.', price: 1400, impact: '4 sessions, up to 30 learners per session' },
  { id: 'to-pkg-3', title: 'Full Term Sponsorship',         description: 'Fund an entire school term of TeachOut sessions across both Usasazo High School and Beautiful Gate Centre.', price: 4200, impact: 'A full term of learning for dozens of learners' },
];

const subjects = ['English', 'Mathematics', 'Mathematical Literacy', 'Accountancy', 'Physics'];
const schools  = [{ name: 'Usasazo High School', area: 'Khayelitsha' }, { name: 'Beautiful Gate Centre', area: 'Philippi' }];
const facts    = [{ number: '100+', label: 'New volunteers in 2026' }, { number: '2', label: 'Schools served' }, { number: '5', label: 'Subjects tutored' }, { number: 'Free', label: 'Cost to every learner' }];

export default function TeachOut() {
  const { addToCart, cartItems } = useCart();
  function handleAdd(pkg) { addToCart({ id: pkg.id, title: pkg.title, npo: 'TeachOut', price: pkg.price }); }
  function isInCart(id)   { return cartItems.some(i => i.id === id); }

  return (
    <main>

      {/* HERO — background image: public/images/StudentsOneTeachOut.jpeg */}
      <section className="npo-hero">
        <div className="npo-hero__bg" style={{ backgroundImage: 'url(/images/BoardTeachOut.jpeg)' }} />
        <div className="npo-hero__overlay" />
        <div className="container npo-hero__inner">
          <Link to="/" className="npo-hero__back">Back to Ubunye</Link>
          <div className="npo-hero__badge" style={{ background: 'var(--gold)' }}>TeachOut</div>
          <h1 className="npo-hero__title">Free tutoring for learners who deserve better.</h1>
          <p className="npo-hero__sub">
            Every Saturday, TeachOut volunteers from UCT give up their mornings to provide
            free, high-quality academic tutoring to high school learners in Khayelitsha and
            Philippi. No fees. No barriers. Just learning.
          </p>
          <div className="npo-hero__actions">
            <a href="#support" className="btn btn-primary">Sponsor TeachOut</a>
            <Link to="/volunteer" className="btn btn-outline">Volunteer With Us</Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="npo-stats" style={{ background: 'var(--gold)' }}>
        <div className="container npo-stats__inner">
          {facts.map(f => (
            <div key={f.label} className="npo-stats__item">
              <span className="npo-stats__number">{f.number}</span>
              <span className="npo-stats__label">{f.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section section--light">
        <div className="container npo-split npo-split--reverse">
          <div className="npo-photo-wrap">
            <img src="/images/KatlegoTeachOut.jpeg" alt="TeachOut tutoring session" className="npo-photo"
              onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
            <div className="img-slot__fallback">
              <p>Add tutoring session photo</p>
              <small>public/images/KatlegoTeachOut.jpeg</small>
            </div>
          </div>
          <div className="npo-split__text">
            <span className="section-label" style={{ color: 'var(--gold)' }}>What We Do</span>
            <h2 className="section-title">Academic support, every Saturday.</h2>
            <p className="section-subtitle">
              TeachOut runs weekly tutoring sessions pairing UCT student volunteers with
              high school learners who need extra academic support. Sessions are structured
              around the national curriculum and led by volunteers studying the same subjects.
            </p>
            <p className="section-subtitle" style={{ marginTop: 16 }}>
              In 2026, TeachOut hosted a Welcome Festival on 12 February recruiting
              over 100 new volunteers, followed by a full Induction and Training session
              on 7 March. The first learner introductory session was held on 8 April 2026
              at Usasazo High School.
            </p>
          </div>
        </div>
      </section>

      {/* SUBJECTS + SCHOOLS */}
      <section className="section">
        <div className="container npo-split">
          <div className="npo-split__text">
            <span className="section-label" style={{ color: 'var(--gold)' }}>Where We Work</span>
            <h2 className="section-title">Two schools. Five subjects.</h2>
            <p className="section-subtitle">
              Our tutors work one-on-one and in small groups across two partner schools,
              focusing on the subjects where learners need the most support.
            </p>
            <div className="npo-split__cards" style={{ marginTop: 32 }}>
              <div className="npo-info-card" style={{ '--card-accent': 'var(--gold)' }}>
                <h3>Subjects We Teach</h3>
                <ul>{subjects.map(s => <li key={s}>{s}</li>)}</ul>
              </div>
              <div className="npo-info-card" style={{ '--card-accent': 'var(--gold)' }}>
                <h3>Schools We Serve</h3>
                <ul>{schools.map(s => <li key={s.name}><strong>{s.name}</strong><span>{s.area}</span></li>)}</ul>
              </div>
            </div>
          </div>
          <div className="npo-photo-wrap">
            <img src="/images/StudentsTwoTeachOut.jpeg" alt="TeachOut learners" className="npo-photo"
              onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
            <div className="img-slot__fallback">
              <p>Add learners photo</p>
              <small>public/images/StudentsTwoTeachOut.jpeg</small>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="npo-quote-section" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <blockquote className="npo-quote">
            &ldquo;By joining us on a Saturday, you can help someone not far from you in age
            figure things out with the time, patience and intentionality they may not be
            getting in a large classroom.&rdquo;
          </blockquote>
          <cite className="npo-quote__cite">
            Serena Achieng, Human Resources Officer, TeachOut &mdash;{' '}
            <a href="https://www.news.uct.ac.za/article/-2026-03-17-ubunyes-student-volunteers-ready-themselves-for-2026s-educational-outreach" target="_blank" rel="noreferrer">
              UCT News, March 2026
            </a>
          </cite>
        </div>
      </section>

      {/* 2026 PRIORITIES */}
      <section className="section section--light">
        <div className="container">
          <span className="section-label" style={{ color: 'var(--gold)' }}>2026 Focus</span>
          <h2 className="section-title">Three priorities for this year.</h2>
          <div className="npo-priorities">
            <div className="npo-priority-card" style={{ '--accent': 'var(--gold)' }}>
              <span className="npo-priority-card__num">01</span>
              <h3>Volunteer Recruitment &amp; Retention</h3>
              <p>Addressing reduced volunteer sign-ups by developing stronger incentive structures and recognition systems for committed tutors.</p>
            </div>
            <div className="npo-priority-card" style={{ '--accent': 'var(--gold)' }}>
              <span className="npo-priority-card__num">02</span>
              <h3>Expand Reach &amp; Collaboration</h3>
              <p>Building relationships with peer organisations within and outside UCT through collaborative initiatives and learning exchanges.</p>
            </div>
            <div className="npo-priority-card" style={{ '--accent': 'var(--gold)' }}>
              <span className="npo-priority-card__num">03</span>
              <h3>Beneficiary-Focused Expenditure</h3>
              <p>Prioritising direct learner impact over internal costs &mdash; ensuring every rand raised reaches the students it is meant for.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SPONSORSHIP */}
      <section className="section" id="support">
        <div className="container">
          <span className="section-label" style={{ color: 'var(--gold)' }}>Support TeachOut</span>
          <h2 className="section-title">Fund a session. Change a grade.</h2>
          <p className="section-subtitle" style={{ marginBottom: 48 }}>
            TeachOut runs entirely on volunteer time and donor funding. Your contribution
            covers transport, materials, and coordination so learners receive the support they need.
          </p>
          <div className="npo-packages">
            {packages.map(pkg => (
              <div key={pkg.id} className="npo-package-card" style={{ '--pkg-accent': 'var(--gold)' }}>
                <h3>{pkg.title}</h3>
                <p>{pkg.description}</p>
                <p className="npo-package-card__impact">Impact: {pkg.impact}</p>
                <div className="npo-package-card__footer">
                  <span className="npo-package-card__price">R{pkg.price.toLocaleString()}</span>
                  <button className={isInCart(pkg.id) ? 'btn btn-dark' : 'btn btn-primary'} onClick={() => handleAdd(pkg)}>
                    {isInCart(pkg.id) ? 'Added' : 'Add to Pledge'}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/cart" className="btn btn-dark">View Your Pledges</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
