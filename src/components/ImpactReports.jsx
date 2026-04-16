import './ImpactReports.css';

/*
  HOW TO ADD REAL PDF REPORTS:
  1. Place PDFs in public/reports/
  2. Update the `file` field below with the filename
  3. The download button will link directly to the PDF

  Example filenames expected:
    public/reports/teachout-state-2026.pdf
    public/reports/ubunye-quarterly-report.pdf
    public/reports/tdl-funding-proposal-2025.pdf
    public/reports/inkanyezi-quarterly-2021.pdf
*/

export default function ImpactReports({ npo, colour, reports }) {
  if (!reports || reports.length === 0) return null;

  return (
    <section className="impact-reports" id="reports">
      <div className="container">
        <span className="section-label" style={{ color: colour }}>Impact Reports</span>
        <h2 className="section-title">Transparency you can read.</h2>
        <p className="section-subtitle" style={{ marginBottom: 48 }}>
          As a registered Public Benefit Organisation (PBO 070000190), {npo} publishes
          regular reports on its activities and financials. All expenditure flows through
          UCT&apos;s approved finance system and is subject to independent annual audit.
        </p>
        <div className="impact-reports__grid">
          {reports.map(r => (
            <div
              key={r.title}
              className="impact-report-card"
              style={{ '--report-colour': colour }}
            >
              <div className="impact-report-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="14 2 14 8 20 8" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="16" y1="13" x2="8" y2="13" strokeLinecap="round"/>
                  <line x1="16" y1="17" x2="8" y2="17" strokeLinecap="round"/>
                  <polyline points="10 9 9 9 8 9" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="impact-report-card__info">
                <span className="impact-report-card__type">{r.type}</span>
                <h3 className="impact-report-card__title">{r.title}</h3>
                <span className="impact-report-card__date">{r.date}</span>
                {r.summary && (
                  <p className="impact-report-card__summary">{r.summary}</p>
                )}
              </div>
              <a
                href={r.file ? "/reports/" + r.file : "#reports"}
                download={!!r.file}
                className="impact-report-card__btn btn btn-dark"
                aria-label={"Download " + r.title}
              >
                {r.file ? "Download PDF" : "Coming Soon"}
              </a>
            </div>
          ))}
        </div>
        <p className="impact-reports__note">
          All financial records are subject to UCT&apos;s annual statutory audit and are
          included in the University&apos;s Annual Financial Statements. S18A tax certificates
          are available for qualifying donations &mdash; contact us for details.
        </p>
      </div>
    </section>
  );
}
