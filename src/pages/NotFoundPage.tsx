import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="content-section">
      <div className="container text-container">
        <h1>Seite nicht gefunden</h1>
        <p>
          Die angeforderte Seite existiert nicht oder wurde verschoben.
        </p>
        <p>
          <Link className="button button-primary" to="/">
            Zur Startseite
          </Link>
        </p>
      </div>
    </section>
  )
}
