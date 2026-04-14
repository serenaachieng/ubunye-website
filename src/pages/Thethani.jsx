import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './NPO.css';

const packages = [
  { id: 'tdl-pkg-1', title: 'Sponsor a Weekly Workshop', description: 'Fund one week of bi-weekly debate coaching workshops. Covers learner transport to UCT Upper Campus and refreshments.', price: 3500, impact: '100+ learners across 10 schools coached' },
  { id: 'tdl-pkg-2', title: 'Sponsor an Average Tournament', description: 'Fund a full-day tournament for 120 learners including R50 transport reimbursements per learner, lunch packs, and certificates.', price: 6800, impact: '120 learners compete across junior and senior leagues' },
  { id: 'tdl-pkg-3', title: 'Sponsor a Large Tournament', description: 'Fund a large-scale tournament for 200 learners with full catering, transport, prizes, and a themed motion set.', price: 11400, impact: '200 learners, 10 schools, one unforgettable day' },
  { id: 'tdl-pkg-4', title: 'Full Year General Funding', description: 'Cover the full annual TDL programme budget including 6 workshops, 3 tournaments, volunteer socials, and committee T-shirts.', price: 55000, impact: 'Everything TDL needs for a complete 2026 season' },
];

const schools = [
  { name: 'Luhlaza Secondary School',          area: 'Khayelitsha' },
  { name: 'Heideveld Secondary School',         area: 'Heideveld' },
  { name: 'I.D. Mkize Senior Secondary School', area: 'Gugulethu' },
  { name: 'Fezeka Secondary School',            area: 'Gugulethu' },
  { name: 'New Eisleben High School',           area: 'Gugulethu' },
  { name: 'Mfuleni Secondary School',           area: 'Mfuleni' },
  { name: 'Sophumelela High School',            area: 'Samora Machel' },
  { name: 'Zisukhanyo Secondary School',        area: 'Samora Machel' },
  { name: 'Khulani Secondary School',           area: 'Langa' },
  { name: 'LEAP Science and Maths School',      area: 'Langa' },
];

const facts = [
  { number: '20',   label: 'Years running' },
  { number: '10',   label: 'Partner schools' },
  { number: '100+', label: 'Learners weekly' },
  { number: '3',    label: 'Tournaments per year' },
];

export default function Thethani() {
  const { addToCart, cartItems } = useCart();
  function handleAdd(pkg) { addToCart({ id: pkg.id, title: pkg.title, npo: 'Thethani Debating League', price: pkg.price }); }
  function isInCart(id)   { return cartItems.some(i => i.id === id); }

  return (
    <main>

      {/* HERO */}
      <section className="npo-hero">
        <div className="container npo-hero__inner">
          <Link to="/" className="npo-hero__back">Back to Ubunye</Link>
          <div className="npo-hero__badge" style={{ background: 'var(--red)' }}>TDL</div>
          <h1 className="npo-hero__title">Teaching Cape Town to think critically, argue boldly, and lead.</h1>
          <p className="npo-hero__sub">
            The Thethani Debating League is South Africa&apos;s largest outreach debating league.
            For 20 consecutive years, UCT student volunteers have coached over 100 learners
            every week across 10 township schools in Cape Town.
          </p>
          <div className="npo-hero__actions">
            <a href="#support" className="btn btn-primary">Sponsor TDL</a>
            <Link to="/volunteer" className="btn btn-outline">Volunteer With Us</Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="npo-stats" style={{ background: 'var(--red)' }}>
        <div className="container npo-stats__inner">
          {facts.map(f => (
            <div key={f.label} className="npo-stats__item">
              <span className="npo-stats__number">{f.number}</span>
              <span className="npo-stats__label">{f.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE DO — text left, photo right */}
      <section className="section section--light">
        <div className="container npo-split">
          <div className="npo-split__text">
            <span className="section-label" style={{ color: 'var(--red)' }}>What We Do</span>
            <h2 className="section-title">Debate as a tool for life.</h2>
            <p className="section-subtitle">
              TDL uses competitive debating as a vehicle to develop critical thinking,
              English language fluency, public speaking confidence, and active citizenship
              in learners who rarely get these opportunities in under-resourced classrooms.
            </p>
            <p className="section-subtitle" style={{ marginTop: 16 }}>
              Topics range from the legacy of colonialism to democracy, mental health, and
              South African governance &mdash; real issues that matter to the young people
              debating them. This is not just sport. It is education for life.
            </p>
          </div>

          {/* Photo: public/images/debate-workshop.jpg — coaching session */}
          <div className="npo-photo-wrap">
            <img
              src="/images/TDL3.jpg"
              alt="TDL debate coaching workshop"
              className="npo-photo"
              onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }}
            />
            <div className="img-slot__fallback">
              <p>Add workshop photo</p>
              <small>public/images/TDL3.jpg</small>
            </div>
          </div>
        </div>
      </section>

      {/* TOURNAMENT — photo left, text right */}
      <section className="section">
        <div className="container npo-split npo-split--reverse">

          {/* Photo: public/images/debate-tournament.jpg — tournament day */}
          <div className="npo-photo-wrap">
            <img
              src="/images/DebatingBoy.JPG"
              alt="TDL tournament day"
              className="npo-photo"
              onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }}
            />
            <div className="img-slot__fallback">
              <p>Add tournament photo</p>
              <small>public/images/DebatingBoy.JPG</small>
            </div>
          </div>

          <div className="npo-split__text">
            <span className="section-label" style={{ color: 'var(--red)' }}>Tournaments</span>
            <h2 className="section-title">Two leagues. One unforgettable day.</h2>
            <p className="section-subtitle">
              TDL hosts 2&ndash;3 tournaments per year. Schools compete in junior (Grades 8&ndash;9)
              and senior (Grades 10&ndash;12) leagues across 3 rounds of debate. Top speakers
              and schools receive certificates, and learners are reimbursed R50 for transport.
            </p>
            <div className="npo-split__cards" style={{ marginTop: 32 }}>
              <div className="npo-info-card" style={{ '--card-accent': 'var(--red)' }}>
                <h3>Bi-Weekly Workshops</h3>
                <p>Learners travel to UCT Upper Campus every other week for focus-group coaching sessions on both debate technique and current affairs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCHOOLS */}
      <section className="section section--light">
        <div className="container">
          <span className="section-label" style={{ color: 'var(--red)' }}>Our Schools</span>
          <h2 className="section-title">10 schools. 5 communities.</h2>
          <p className="section-subtitle" style={{ marginBottom: 48 }}>
            TDL reaches schools across Khayelitsha, Gugulethu, Mfuleni, Samora Machel,
            Langa, and Heideveld &mdash; some of Cape Town&apos;s most under-resourced areas.
          </p>
          <div className="schools-grid">
            {schools.map(s => (
              <div key={s.name} className="school-card" style={{ '--school-colour': 'var(--red)' }}>
                <span className="school-card__area">{s.area}</span>
                <span className="school-card__name">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="npo-quote-section" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <blockquote className="npo-quote">
            &ldquo;Debate fosters critical thinking. Many schools do not have a culture of
            speaking about contemporary issues. Debate allows learners to grow their knowledge
            base along with fostering critical thinking.&rdquo;
          </blockquote>
          <cite className="npo-quote__cite">
            Thando Kambule, Finance Director, TDL &mdash;{' '}
            <a href="https://www.news.uct.ac.za/article/-2026-03-17-ubunyes-student-volunteers-ready-themselves-for-2026s-educational-outreach" target="_blank" rel="noreferrer">
              UCT News, March 2026
            </a>
          </cite>
        </div>
      </section>

      {/* SPONSORSHIP */}
      <section className="section section--light" id="support">
        <div className="container">
          <span className="section-label" style={{ color: 'var(--red)' }}>Support TDL</span>
          <h2 className="section-title">Your brand. Their voice.</h2>
          <p className="section-subtitle" style={{ marginBottom: 48 }}>
            Sponsors are welcome to attend tournaments, present to learners, and theme debate
            motions around issues relevant to their organisation. Any amount of support is
            gratefully received.
          </p>
          <div className="npo-packages">
            {packages.map(pkg => (
              <div key={pkg.id} className="npo-package-card" style={{ '--pkg-accent': 'var(--red)' }}>
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
