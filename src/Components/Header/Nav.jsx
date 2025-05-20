import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      {/* <li>
        <Link to="/">Home</Link>
      </li> */}
      {/* <li className="menu-item-has-children">
        <Link to="#">Info</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/About" onClick={() => setMobileToggle(false)}>
                Sobre Qontact
              </Link>
            </li>
            <li>
              <Link to="/team/team-details" onClick={() => setMobileToggle(false)}>
                Team Details
              </Link>
            </li>             
            <li>
              <Link to="/pricing" onClick={() => setMobileToggle(false)}>
              Pricing
              </Link>
            </li>
            <li>
              <Link to="/faq" onClick={() => setMobileToggle(false)}>
              Faq
              </Link>
            </li>
           |<li>
              <Link to="/contact" onClick={() => setMobileToggle(false)}>
              Contact
              </Link>
            </li>                         
          </ul>
        </DropDown>
      </li>   */}

      <li>
        <Link to="https://intercom.news/qontact" onClick={() => setMobileToggle(false)}>
          Novedades
        </Link>
      </li>
      {/* <li>
        <Link to="/contact" onClick={() => setMobileToggle(false)}>
          Contacto
        </Link>
      </li> */}
    </ul>
  );
}
