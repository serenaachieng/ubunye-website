import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Volunteer.css';

const roles = [
  {
    id: 'teachout',
    npo: 'TeachOut',
    colour: 'var(--gold)',
    title: 'Academic Tutor',
    description: 'Tutor high school learners in English, Mathematics, Mathematical Literacy, Accountancy, or Physics every Saturday morning.',
    commitment: 'Every Saturday, approx. 3 hours',
    requirements: 'Studying or have passed the subject at university level',
  },
  {
    id: 'thethani',
    npo: 'Thethani Debating League',
    colour: 'var(--red)',
    title: 'Debate Coach',
    description: 'Coach learners in debate technique, critical thinking, and public speaking at bi-weekly workshops on UCT Upper Campus.',
    commitment: 'Bi-weekly Saturdays, approx. 3-4 hours',
    requirements: 'Passion for debate, current affairs, and youth development',
  },
  {
    id: 'inkanyezi',
    npo: 'Inkanyezi',
    colour: 'var(--blue)',
    title: 'Mentorship Volunteer',
    description: 'Provide mentorship and peer support to high school learners in Khayelitsha as part of the Inkanyezi 2026 pilot programme.',
    commitment: 'Monthly sessions, schedule to be confirmed',
    requirements: 'Empathy, reliability, and commitment to learner wellbeing',
  },
  {
    id: 'general',
    npo: 'Ubunye',
    colour: 'var(--green)',
    title: 'General Volunteer',
    description: 'Support Ubunye events, outreach, fundraising, and administration. Great for students who want to get involved without a fixed weekly commitment.',
    commitment: 'Flexible, event-based',
    requirements: 'Enthusiasm and availability',
  },
];

export default function Volunteer() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    studentNumber: '',
    faculty: '',
    yearOfStudy: '',
    roles: [],
    experience: '',
    motivation: '',
    availability: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  }

  function handleRoleToggle(id) {
    setForm(prev => ({
      ...prev,
      roles: prev.roles.includes(id)
        ? prev.roles.filter(r => r !== id)
        : [...prev.roles, id],
    }));
  }

  function validate() {
    const e = {};
    if (!form.firstName.trim())   e.firstName   = 'Required';
    if (!form.lastName.trim())    e.lastName    = 'Required';
    if (!form.email.trim())       e.email       = 'Required';
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.phone.trim())       e.phone       = 'Required';
    if (!form.studentNumber.trim()) e.studentNumber = 'Required';
    if (!form.yearOfStudy)        e.yearOfStudy = 'Required';
    if (form.roles.length === 0)  e.roles       = 'Please select at least one role';
    if (!form.motivation.trim())  e.motivation  = 'Required';
    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="volunteer-success">
        <div className="container volunteer-success__inner">
          <div className="volunteer-success__icon">&#10003;</div>
          <h1>Welcome to the Ubunye family, {form.firstName}!</h1>
          <p>
            Your volunteer application has been received. Our team will be in touch
            at <strong>{form.email}</strong> with next steps before the upcoming Saturday session.
          </p>
          <p style={{ marginTop: 12, color: '#aaa', fontSize: '0.9rem' }}>
            In the meantime, follow us and spread the word to other UCT students who
            might want to get involved.
          </p>
          <Link to="/" className="btn btn-primary" style={{ marginTop: 32 }}>
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>

      {/* HERO */}
      <section className="volunteer-hero">
        <div className="container volunteer-hero__inner">
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>
            UCT Students
          </span>
          <h1 className="volunteer-hero__title">
            Give a Saturday.<br />
            <span style={{ color: 'var(--green)' }}>Change a future.</span>
          </h1>
          <p className="volunteer-hero__sub">
            Ubunye volunteers are the backbone of everything we do. Whether you tutor,
            coach debate, or provide mentorship &mdash; your time has a direct and
            measurable impact on learners who need it most.
          </p>
        </div>
      </section>

      {/* ROLES */}
      <section className="section section--light">
        <div className="container">
          <span className="section-label">Volunteer Roles</span>
          <h2 className="section-title">Find your fit.</h2>
          <div className="volunteer-roles">
            {roles.map(r => (
              <div key={r.id} className="volunteer-role-card" style={{ '--role-colour': r.colour }}>
                <span className="volunteer-role-card__npo">{r.npo}</span>
                <h3>{r.title}</h3>
                <p>{r.description}</p>
                <div className="volunteer-role-card__meta">
                  <div>
                    <strong>Commitment</strong>
                    <span>{r.commitment}</span>
                  </div>
                  <div>
                    <strong>Requirements</strong>
                    <span>{r.requirements}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="section" id="apply">
        <div className="container volunteer-form-wrap">
          <div className="volunteer-form-header">
            <span className="section-label">Apply Now</span>
            <h2 className="section-title">Register as a volunteer.</h2>
            <p className="section-subtitle">
              Applications are open to all UCT students. We welcome students from any
              faculty and any year of study.
            </p>
          </div>

          <form className="volunteer-form" onSubmit={handleSubmit} noValidate>

            <div className="vform-section-title">Personal Details</div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input type="text" id="firstName" name="firstName" value={form.firstName} onChange={handleChange} placeholder="Your first name" className={errors.firstName ? 'input-error' : ''} />
                {errors.firstName && <span className="form-error">{errors.firstName}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input type="text" id="lastName" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Your last name" className={errors.lastName ? 'input-error' : ''} />
                {errors.lastName && <span className="form-error">{errors.lastName}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="vol-email">UCT Email Address *</label>
                <input type="email" id="vol-email" name="email" value={form.email} onChange={handleChange} placeholder="stnumber@myuct.ac.za" className={errors.email ? 'input-error' : ''} />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="e.g. 072 123 4567" className={errors.phone ? 'input-error' : ''} />
                {errors.phone && <span className="form-error">{errors.phone}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="studentNumber">Student Number *</label>
                <input type="text" id="studentNumber" name="studentNumber" value={form.studentNumber} onChange={handleChange} placeholder="e.g. ABCXYZ001" className={errors.studentNumber ? 'input-error' : ''} />
                {errors.studentNumber && <span className="form-error">{errors.studentNumber}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="yearOfStudy">Year of Study *</label>
                <select id="yearOfStudy" name="yearOfStudy" value={form.yearOfStudy} onChange={handleChange} className={errors.yearOfStudy ? 'input-error' : ''}>
                  <option value="">Select year</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                  <option value="5+">5th Year +</option>
                  <option value="postgrad">Postgraduate</option>
                </select>
                {errors.yearOfStudy && <span className="form-error">{errors.yearOfStudy}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="faculty">Faculty</label>
              <input type="text" id="faculty" name="faculty" value={form.faculty} onChange={handleChange} placeholder="e.g. Commerce, Science, Humanities" />
            </div>

            <div className="vform-section-title" style={{ marginTop: 8 }}>Volunteer Role</div>

            <div className="form-group">
              <label>Which role(s) interest you? *</label>
              <div className="volunteer-roles-check">
                {roles.map(r => (
                  <label key={r.id} className="form-checkbox" style={{ '--check-colour': r.colour }}>
                    <input
                      type="checkbox"
                      checked={form.roles.includes(r.id)}
                      onChange={() => handleRoleToggle(r.id)}
                    />
                    {r.title} ({r.npo})
                  </label>
                ))}
              </div>
              {errors.roles && <span className="form-error">{errors.roles}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="motivation">Why do you want to volunteer with Ubunye? *</label>
              <textarea
                id="motivation"
                name="motivation"
                value={form.motivation}
                onChange={handleChange}
                placeholder="Tell us what motivates you to get involved..."
                rows={4}
                className={errors.motivation ? 'input-error' : ''}
              />
              {errors.motivation && <span className="form-error">{errors.motivation}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="experience">Relevant experience (optional)</label>
              <textarea
                id="experience"
                name="experience"
                value={form.experience}
                onChange={handleChange}
                placeholder="Any tutoring, coaching, community work, or other relevant experience..."
                rows={3}
              />
            </div>

            <button type="submit" className="btn btn-primary volunteer-submit">
              Submit Application
            </button>

          </form>
        </div>
      </section>

    </main>
  );
}
