import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ImpactReports from '../components/ImpactReports';
import './NPO.css';
import './Ikanyezi.css';

const packages = [
  { id: 'ik-pkg-1', title: 'Pilot Programme Contribution', description: 'Support the 2026 Inkanyezi pilot year as the organisation restructures towards a responsive, sustainable model of psychosocial and crisis support for learners in Khayelitsha.', price: 2000, impact: 'Funds operational restructuring, materials, and planning' },
  { id: 'ik-pkg-2', title: 'Learner Wellbeing Fund',        description: 'Directly fund psychosocial support resources and crisis intervention materials for high school learners in under-resourced Khayelitsha schools.', price: 5000, impact: 'Resources for learner wellbeing across the pilot school' },
];

const pillars = [
  { title: 'Psychosocial Support',  description: 'Structured peer-based support addressing the emotional and social challenges faced by learners in under-resourced high schools, where professional counselling services are rarely available.' },
  { title: 'Crisis Intervention',   description: 'Rapid-response support for learners experiencing acute personal crises — including family instability, trauma, and the pressures of navigating education in under-resourced environments.' },
  { title: 'Mentorship',            description: 'Long-term mentorship relationships between UCT student volunteers and high school learners, focused on personal growth, goal-setting, building confidence, and resilience.' },
  { title: 'Post-Matric Guidance',  description: 'Equipping learners with knowledge of tertiary options, bursaries, learnerships, and career pathways — giving them the tools to access opportunities beyond high school.' },
];

const timeline = [
  { year: '2005', event: 'Inkanyezi founded by Rob Garlick through a donation from the Goldman Sachs Foundation Social Entrepreneurship Fund.' },
  { year: '2006', event: 'Inkanyezi joins Ubunye alongside TeachOut and the Thethani Debating League, forming the umbrella organisation.' },
  { year: '2010', event: 'Ubunye wins the MacJannet Prize for Global Citizenship — international recognition of student-led community impact.' },
  { year: '2015', event: 'Inkanyezi at peak: 230 learners, 150 volunteers, active across 3 schools four days per week.' },
  { year: '2026', event: 'Inkanyezi begins a structured year-long pilot to revive and rebuild operations around a sustainable psychosocial support model.' },
];

const reports = [
  {
    type: 'Organisational Report',
    title: 'Inkanyezi Report : Q4 2020 & Q1 2021',
    date: '2021',
    summary: 'Covers the online mentorship pilot with GradAccess during COVID-19, serving 180 learners across Sinethemba, Sophumelela, and Beacon Hill schools.',
    file: 'inkanyezi-quarterly-2021.pdf',
  },
];

export default function Ikanyezi() {
  const { addToCart, cartItems } = useCart();
  function handleAdd(pkg) { addToCart({ id: pkg.id, title: pkg.title, npo: 'Inkanyezi', price: pkg.price }); }
  function isInCart(id)   { return cartItems.some(i => i.id === id); }

  return (
    <main>

      {/* HERO */}
      <section className="npo-hero">
        <div className="npo-hero__bg" style={{ backgroundImage: 'url(/images/StudentsGroupPhoto.JPG)' }} />
        <div className="npo-hero__overlay" />
        <div className="container npo-hero__inner">
          <Link to="/" className="npo-hero__back">Back to Ubunye</Link>
          <div className="npo-hero__badge" style={{ background: 'var(--blue)' }}>Inkanyezi</div>
          <h1 className="npo-hero__title">Let us shine.</h1>
          <p className="npo-hero__sub">
            Founded in 2005, Inkanyezi empowers learners in Cape Town&apos;s township schools
            through mentorship, psychosocial support, and guidance on post-matric
            opportunities. After a period of dormancy, Inkanyezi is undergoing a
            structured pilot revival in 2026.
          </p>
          <div className="npo-hero__actions">
            <a href="#support" className="btn btn-primary">Support the Pilot</a>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="npo-stats" style={{ background: 'var(--blue)' }}>
        <div className="container npo-stats__inner">
          {[
            { number: '2005', label: 'Year founded' },
            { number: '230',  label: 'Learners at peak' },
            { number: '150',  label: 'Volunteers at peak' },
            { number: '2026', label: 'Revival pilot year' },
          ].map(s => (
            <div key={s.label} className="npo-stats__item">
              <span className="npo-stats__number">{s.number}</span>
              <span className="npo-stats__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PILOT NOTICE */}
      <div className="ik-pilot-banner">
        <div className="container ik-pilot-banner__inner">
          <span className="ik-pilot-banner__icon">&#9432;</span>
          <p>
            <strong>2026 Pilot Year:</strong> Inkanyezi is currently restructuring and is not yet
            accepting volunteer applications. Register as a General Ubunye Volunteer and we will
            contact you when recruitment opens.
          </p>
          <Link to="/volunteer" className="btn btn-outline ik-pilot-banner__btn">Register Interest</Link>
        </div>
      </div>

      {/* HISTORY + IMAGE */}
      <section className="section section--light">
        <div className="container npo-split">
          <div className="npo-split__text">
            <span className="section-label" style={{ color: 'var(--blue)' }}>Our History</span>
            <h2 className="section-title">Two decades of shining a light.</h2>
            <p className="section-subtitle">
              Inkanyezi was founded in 2005 by Rob Garlick, made possible by a generous donation
              from the Goldman Sachs Foundation&apos;s Social Entrepreneurship Fund. From the start,
              Inkanyezi&apos;s purpose was to address the social needs of learners in Cape Town&apos;s
              township schools &mdash; equipping them with mentorship, career guidance, and knowledge
              of post-matric opportunities.
            </p>
            <p className="section-subtitle" style={{ marginTop: 16 }}>
              In late 2006, Inkanyezi joined Ubunye alongside TeachOut and the Thethani Debating
              League. At its peak in 2015, Inkanyezi served 230 learners with 150 UCT volunteers,
              visiting three schools four days every week.
            </p>
          </div>
          <div className="img-slot">
            <img src="/images/StudentsGroupPhoto.JPG" alt="Inkanyezi mentorship session" className="img-slot__img"
              onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
            <div className="img-slot__fallback"><p>Add photo here</p><small>public/images/StudentsGroupPhoto.JPG</small></div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section">
        <div className="container">
          <span className="section-label" style={{ color: 'var(--blue)' }}>Timeline</span>
          <h2 className="section-title">From 2005 to today.</h2>
          <div className="ik-timeline">
            {timeline.map(t => (
              <div key={t.year} className="ik-timeline__item">
                <div className="ik-timeline__year">{t.year}</div>
                <div className="ik-timeline__dot" />
                <div className="ik-timeline__content">{t.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section section--light">
        <div className="container">
          <span className="section-label" style={{ color: 'var(--blue)' }}>The 2026 Pilot</span>
          <h2 className="section-title">Rebuilding for lasting impact.</h2>
          <p className="section-subtitle" style={{ marginBottom: 48 }}>
            The 2026 pilot is not a return to previous operations. It is a ground-up redesign
            focused on building systems that outlast individual leadership cycles and respond
            meaningfully to the real, complex needs of learners in Khayelitsha.
          </p>
          <div className="ik-pillars">
            {pillars.map(p => (
              <div key={p.title} className="ik-pillar-card">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            ))}
          </div>
          <div className="img-slot img-slot--wide" style={{ marginTop: 48 }}>
            <img src="/images/GroupPhoto.jpg" alt="Inkanyezi volunteer team" className="img-slot__img"
              onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
            <div className="img-slot__fallback"><p>Add team photo here</p><small>public/images/GroupPhoto.jpg</small></div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="npo-quote-section" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <blockquote className="npo-quote">
            &ldquo;We aim to enable learners to realise their potential and to impart
            the philosophy of Ubuntu in the youth of South Africa.&rdquo;
          </blockquote>
          <cite className="npo-quote__cite">Inkanyezi Mission Statement &mdash; est. 2005</cite>
        </div>
      </section>

      {/* IMPACT REPORTS */}
      <ImpactReports npo="Inkanyezi" colour="var(--blue)" reports={reports} />

      {/* SPONSORSHIP */}
      <section className="section section--light" id="support">
        <div className="container">
          <span className="section-label" style={{ color: 'var(--blue)' }}>Support Inkanyezi</span>
          <h2 className="section-title">Invest in the revival.</h2>
          <p className="section-subtitle" style={{ marginBottom: 48 }}>
            The 2026 pilot requires dedicated funding to rebuild Inkanyezi&apos;s operational
            foundation properly. Your contribution directly supports the restructuring work
            that will determine Inkanyezi&apos;s long-term impact.
          </p>
          <div className="npo-packages">
            {packages.map(pkg => (
              <div key={pkg.id} className="npo-package-card" style={{ '--pkg-accent': 'var(--blue)' }}>
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
