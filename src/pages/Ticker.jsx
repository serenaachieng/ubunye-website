import './Ticker.css';

const ITEMS = [
  { label: 'Years of impact',           value: '18' },
  { label: 'Founded at UCT',            value: '2008' },
  { label: 'Learners served weekly',    value: '100+' },
  { label: 'Partner schools',           value: '10' },
  { label: 'Volunteers in 2026',        value: '46' },
  { label: "SA's largest outreach debating league", value: 'TDL' },
  { label: 'MacJannet Prize',           value: '2010' },
  { label: 'Inkanyezi founded',         value: '2005' },
  { label: 'Peak learners reached',     value: '600+' },
  { label: 'Communities served',        value: '5' },
  { label: 'Cost to every learner',     value: 'Free' },
  { label: 'NPOs under one roof',       value: '3' },
];

// Duplicate for seamless loop
const DOUBLED = [...ITEMS, ...ITEMS];

export default function Ticker() {
  return (
    <div className="ticker" aria-label="Ubunye impact statistics">
      <div className="ticker__track">
        {DOUBLED.map((item, i) => (
          <div className="ticker__item" key={i}>
            <span className="ticker__value">{item.value}</span>
            <span className="ticker__sep">/</span>
            <span className="ticker__label">{item.label}</span>
            <span className="ticker__dot" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
}
