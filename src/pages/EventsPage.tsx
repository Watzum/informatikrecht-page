import { Link } from 'react-router-dom'

type EventItem = {
  title: string
  comedian: string
  city: string
  year: number
  model: 'Abo' | 'Einzelkauf'
  runtime: string
}

const eventItems: EventItem[] = [
  {
    title: 'Punchlines aus dem Achten',
    comedian: 'Nora Leitner',
    city: 'Wien',
    year: 2026,
    model: 'Abo',
    runtime: '58 Min.',
  },
  {
    title: 'Late Night im Kellerclub',
    comedian: 'David Kolar',
    city: 'Graz',
    year: 2025,
    model: 'Einzelkauf',
    runtime: '72 Min.',
  },
  {
    title: 'Best of Open Mic Vienna',
    comedian: 'Mehrere Artists',
    city: 'Wien',
    year: 2024,
    model: 'Abo',
    runtime: '95 Min.',
  },
  {
    title: 'Roast Night Special',
    comedian: 'Selin Demir',
    city: 'Linz',
    year: 2026,
    model: 'Einzelkauf',
    runtime: '64 Min.',
  },
]

export function EventsPage() {
  return (
    <section className="content-section">
      <div className="container">
        <h1>Events und VOD-Bibliothek</h1>

        <form className="filter-grid" aria-label="Suche und Filter">
          <div>
            <label htmlFor="suche">Suche nach Show oder Comedian</label>
            <input id="suche" name="suche" type="search" placeholder="z. B. Open Mic" />
          </div>

          <div>
            <label htmlFor="modell">Zugriffsmodell</label>
            <select id="modell" name="modell" defaultValue="alle">
              <option value="alle">Alle</option>
              <option value="abo">Nur im Abo</option>
              <option value="einzelkauf">Nur Einzelkauf</option>
            </select>
          </div>
        </form>

        <ul className="event-grid" aria-label="Verfügbare Comedy-Inhalte">
          {eventItems.map((item) => (
            <li key={item.title} className="event-card">
              <h2>{item.title}</h2>
              <p>
                <strong>Comedian:</strong> {item.comedian}
              </p>
              <p>
                <strong>Ort:</strong> {item.city}
              </p>
              <p>
                <strong>Jahr:</strong> {item.year}
              </p>
              <p>
                <strong>Dauer:</strong> {item.runtime}
              </p>
              <p>
                <span className="badge">{item.model}</span>
              </p>
              {item.model === 'Einzelkauf' ? (
                <Link to="/kaufen" className="button button-secondary">
                  Jetzt kaufen (Mockup)
                </Link>
              ) : (
                <button type="button" className="button button-secondary">
                  Zur Show (Mockup)
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
