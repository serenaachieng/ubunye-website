import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './NPO.css';
import './Ikanyezi.css';

const packages = [
  {
    id: 'ik-pkg-1',
    title: 'Pilot Programme Contribution',
    description: 'Support the 2026 Inkanyezi pilot year as the organisation restructures towards a responsive, sustainable model of psychosocial and crisis support for learners in Khayelitsha.',
    price: 2000,
    impact: 'Funds operational restructuring, materials, and planning',
  },
  {
    id: 'ik-pkg-2',
    title: 'Learner Wellbeing Fund',
    description: 'Directly fund psychosocial support resources and crisis intervention materials for high school learners in under-resourced Khayelitsha schools.',
    price: 5000,
    impact: 'Resources for learner wellbeing across the pilot school',
  },
];

const pillars = [
  {
    title: 'Psychosocial Support',
    description: 'Structured peer-based support addressing the emotional and social challenges faced by learners in under-resourced high schools, where professional counselling services are rarely available.',
  },
  {
    title: 'Crisis Intervention',
    description: 'Rapid-response support for learners experiencing acute personal crises, including family instability, trauma, and the pressures of navigating education in under-resourced environments.',
  },
  {
    title: 'Mentorship',
    description: 'Long-term mentorship relationships between UCT student volunteers and high school learners, focused on personal growth, goal-setting, and building confidence and resilience.',
  },
  {
    title: 'Sustainable Structures',
    description: 'The 2026 pilot is focused on building operational systems that outlast individual leadership cycles, ensuring Inkanyezi can sustain its impact regardless of volunteer turnover.',
  },
];

export default function Ikanyezi() {
  const { addToCart, cartItems } = useCart();

  function handleAdd(pkg) {
    addToCart({ id: pkg.id, title: pkg.title, npo: 'Inkanyezi', price: pkg.price });
  }

  function isInCart(id) {
    return cartItems.some(i => i.id === id);
  }

  return (
    <main>

      {/* HERO */}
      <section className="npo-hero" style={{ '--npo-colour': 'var(--blue)', '--npo-dark': '#1560a8' }}>
        <div className="container npo-hero__inner">
          <Link to="/" className="npo-hero__back">Back to Ubunye</Link>
          <div className="npo-hero__badge" style={{ background: 'var(--blue)' }}>Inkanyezi</div>
          <h1 className="npo-hero__title">
            Let us shine.
          </h1>
          <p className="npo-hero__sub">
            Inkanyezi provides mentorship, crisis support, and psychosocial care to
            learners in under-resourced high schools in Khayelitsha, Cape Town.
            After a period of dormancy, Inkanyezi is undergoing a full pilot revival
            in 2026 &mdash; rebuilding towards a more responsive and sustainable model
            of learner support.
          </p>
          <div className="npo-hero__actions">
            <a href="#support" className="btn btn-primary">Support the Pilot</a>
          </div>
        </div>
      </section>

      {/* PILOT NOTICE BANNER */}
      <div className="ik-pilot-banner">
        <div className="container ik-pilot-banner__inner">
          <span className="ik-pilot-banner__icon">&#9432;</span>
          <p>
            <strong>2026 Pilot Year:</strong> Inkanyezi is currently in a restructuring phase
            and is not yet accepting volunteer applications. We expect to open volunteer
            recruitment later in the year. If you are interested, register as a General
            Ubunye Volunteer and we will be in touch.
          </p>
          <Link to="/volunteer" className="btn btn-outline ik-pilot-banner__btn">
            Register Interest
          </Link>
        </div>
      </div>

      {/* ABOUT THE PILOT */}
      <section className="section section--light">
        <div className="container npo-split">
          <div className="npo-split__text">
            <span className="section-label" style={{ color: 'var(--blue)' }}>The 2026 Pilot</span>
            <h2 className="section-title">Rebuilding for lasting impact.</h2>
            <p className="section-subtitle">
              Inkanyezi was one of Ubunye&apos;s founding organisations, established in 2008 to
              address the psychosocial and mentorship needs of learners in Cape Town&apos;s
              township schools. After a period of dormancy, 2026 marks the beginning of
              a structured, year-long revival.
            </p>
            <p className="section-subtitle" style={{ marginTop: 16 }}>
              Rather than simply resuming previous operations, the pilot is focused on
              designing a fundamentally more sustainable and responsive model &mdash; one that
              can withstand the transient nature of student leadership and respond
              effectively to the real, complex needs of learners in Khayelitsha.
            </p>
          </div>
          <div className="npo-split__cards">
            <div className="npo-info-card" style={{ '--card-accent': 'var(--blue)' }}>
              <h3>Pilot Focus Areas</h3>
              <ul>
                <li>Operational restructuring and governance</li>
                <li>Needs assessment with partner schools</li>
                <li>Building a sustainable volunteer pipeline</li>
                <li>Developing crisis response frameworks</li>
                <li>Establishing psychosocial support protocols</li>
              </ul>
            </div>
            <div className="npo-info-card" style={{ '--card-accent': 'var(--blue)' }}>
              <h3>Current Status</h3>
              <ul>
                <li><strong>Location</strong><span>Khayelitsha, Cape Town</span></li>
                <li><strong>Phase</strong><span>Pilot restructuring &mdash; Year 1</span></li>
                <li><strong>Volunteers</strong><span>Recruitment opening later in 2026</span></li>
                <li><strong>Duration</strong><span>Full 2026 school year</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT INKANYEZI DOES */}
      <section className="section">
        <div className="container">
          <span className="section-label" style={{ color: 'var(--blue)' }}>Our Approach</span>
          <h2 className="section-title">Addressing what the classroom cannot.</h2>
          <p className="section-subtitle" style={{ marginBottom: 48 }}>
            Academic performance does not exist in isolation. Learners in under-resourced
            schools face complex psychosocial pressures that directly affect their ability
            to learn. Inkanyezi exists to address those pressures directly.
          </p>
          <div className="ik-pillars">
            {pillars.map(p => (
              <div key={p.title} className="ik-pillar-card">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section className="npo-quote-section" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <blockquote className="npo-quote">
            &ldquo;Ubunye has a weekly impact on about 600 learners, and Inkanyezi has been
            central to that &mdash; improving post-school prospects through mentorship and guidance.&rdquo;
          </blockquote>
          <cite className="npo-quote__cite">
            Duncan Clough, Ubunye Chairperson &mdash; UCT Monday Paper, 2010.
            Ubunye won the MacJannet Prize for Global Citizenship that year.
          </cite>
        </div>
      </section>

      {/* SPONSORSHIP */}
      <section className="section section--light" id="support">
        <div className="container">
          <span className="section-label" style={{ color: 'var(--blue)' }}>Support Inkanyezi</span>
          <h2 className="section-title">Invest in the revival.</h2>
          <p className="section-subtitle" style={{ marginBottom: 48 }}>
            The 2026 pilot requires dedicated funding to rebuild Inkanyezi&apos;s operational
            foundation properly. Your contribution will directly support the restructuring
            work that determines Inkanyezi&apos;s long-term impact.
          </p>
          <div className="npo-packages">
            {packages.map(pkg => (
              <div key={pkg.id} className="npo-package-card" style={{ '--pkg-accent': 'var(--blue)' }}>
                <h3>{pkg.title}</h3>
                <p>{pkg.description}</p>
                <p className="npo-package-card__impact">Impact: {pkg.impact}</p>
                <div className="npo-package-card__footer">
                  <span className="npo-package-card__price">R{pkg.price.toLocaleString()}</span>
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
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/cart" className="btn btn-dark">View Your Pledges</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
