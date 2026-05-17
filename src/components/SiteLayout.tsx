import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { path: '/', label: 'Start' },
  { path: '/events', label: 'Events & VOD' },
  { path: '/kaufen', label: 'Kaufen' },
  { path: '/konto', label: 'Login / Registrierung' },
  { path: '/barrierefreiheit', label: 'Barrierefreiheit' },
  { path: '/über-uns', label: 'über uns' },
]

export function SiteLayout() {
  return (
    <>
      <a className="skip-link" href="#inhalt">
        Zum Inhalt springen
      </a>

      <header className="site-header" aria-label="Kopfbereich">
        <div className="container header-inner">
          <div>
            <p className="brand-kicker">Wien, österreich</p>
            <p className="brand-name">Let Comedy Thrive</p>
          </div>

          <nav aria-label="Hauptnavigation">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? 'nav-link nav-link-active' : 'nav-link'
                    }
                    end={item.path === '/'}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="inhalt" className="site-main" tabIndex={-1}>
        <Outlet />
      </main>

      <footer className="site-footer" aria-label="Fussbereich">
        <div className="container footer-inner">
          <p>
            Let Comedy Thrive verbindet lokale Stand-up-Kultur mit digitalem
            Streaming für ein breites Publikum im deutschsprachigen Raum.
          </p>
          <p>
            <NavLink to="/barrierefreiheit" className="inline-link">
              Zur Barrierefreiheitserklärung
            </NavLink>
            {' '}|{' '}
            <NavLink to="/lizenz" className="inline-link">
              Lizenzbedingungen
            </NavLink>
          </p>
        </div>
      </footer>
    </>
  )
}
