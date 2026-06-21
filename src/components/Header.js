import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

function Header({ variant = 'overlay' }) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isContact = location.pathname === '/contact';

  return (
    <header className={`site-header ${variant}`}>
      <div className="header-inner">
        <Logo />
        <nav className="main-nav">
          <Link to="/" className={isHome ? 'active' : ''}>
            Home
          </Link>
          <Link to="/contact" className={isContact ? 'active' : ''}>
            Book
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
