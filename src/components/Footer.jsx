import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">

        <div className="footer__brand">
          <span className="footer__name">Ubunye Development Agency</span>
          <p>
            Empowering Cape Town&apos;s youth through mentorship, education, and voice.
            A UCT Social Enterprise. Founded 2008.
          </p>
          <p className="footer__award">
            MacJannet Prize for Global Citizenship, 2010
          </p>
        </div>

        <div className="footer__col">
          <h4>Our Programmes</h4>
          <ul>
            <li><Link to="/ikanyezi">Inkanyezi</Link></li>
            <li><Link to="/teachout">TeachOut</Link></li>
            <li><Link to="/thethani">Thethani Debating League</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Get Involved</h4>
          <ul>
            <li><Link to="/support-us">Sponsor a Programme</Link></li>
            <li><Link to="/impact-calculator">Impact Calculator</Link></li>
            <li><Link to="/volunteer">Volunteer With Us</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul>
            <li>University of Cape Town</li>
            <li>Cape Town, South Africa</li>
            <li>
              <a href="mailto:tdluct@gmail.com">tdluct@gmail.com</a>
            </li>
            
          </ul>
        </div>

      </div>
      <div className="footer__bottom">
        <p>
          &copy; {new Date().getFullYear()} Ubunye Development Agency is a UCT based registered non-profit organization &middot; NPO: 061-733-NPO  &middot; Founded 2008
        </p>
      </div>
    </footer>
  );
}
