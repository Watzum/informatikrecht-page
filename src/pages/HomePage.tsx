import { Link } from 'react-router-dom'

const highlights = [
  'Streaming von Stand-up-Comedy-Videos',
  'Video-on-Demand-Bibliothek mit vergangenen Events',
  'Einzelkauf bestimmter Comedy-Shows',
  'Abo-Modell mit Zugriff auf alle verfuegbaren Inhalte',
]

export function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Digitale Comedy aus Wien</p>
            <h1>Die digitale Buehne fuer lokale Stand-up-Kultur</h1>
            <p className="lead">
              Let Comedy Thrive ist eine Streaming- und VOD-Plattform fuer
              Stand-up-Comedy aus Wien und dem deutschsprachigen Raum.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/events">
                Zu Events und VOD
              </Link>
              <Link className="button button-secondary" to="/ueber-uns">
                Mehr erfahren
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container media-showcase">
          <figure className="showcase-figure">
            <video
              controls
              className="showcase-video"
              aria-label="Comedy-Teaser-Video: Bernie Mac"
            >
              <source
                src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Bernie_Mac_-_%22When_You_Tell_Your_Boy_To_Call_In_Sick_For_You%22.webm?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
                type="video/webm"
              />
              Dein Browser unterstützt HTML5-Videos nicht.
            </video>
            <figcaption className="showcase-credit">
              <a
                href="https://commons.wikimedia.org/wiki/File:Bernie_Mac_-_%22When_You_Tell_Your_Boy_To_Call_In_Sick_For_You%22.webm"
              >
                Walter Latham
              </a>
              ,{' '}
              <a href="https://creativecommons.org/licenses/by/3.0">
                CC BY 3.0
              </a>
              , via Wikimedia Commons
            </figcaption>
          </figure>
          <p className="teaser-note">
            Dies ist ein Teaser-Ausschnitt. Fuer vollständige Comedy-Shows und exklusive Inhalte:
            <Link to="/events" className="inline-link">
              {' '}Zu unserer VOD-Bibliothek
            </Link>
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container media-showcase">
          <figure className="showcase-figure">
            <img
              src="/pictures/stage_with_mic_and_chair.jpg"
              alt="Leere Comedy-Buehne mit Mikrofon und Stuhl im Scheinwerferlicht"
              className="showcase-image"
            />
            <figcaption className="showcase-credit">
              Carlos Delgado; CC-BY-SA
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Funktionen der Plattform</h2>
          <ul className="feature-grid">
            {highlights.map((feature) => (
              <li key={feature} className="feature-card">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
