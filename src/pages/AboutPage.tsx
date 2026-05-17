export function AboutPage() {
  return (
    <>
      <section className="content-section">
        <div className="container text-container">
          <h1>Ueber uns</h1>
          <p className="lead">
            Let Comedy Thrive ist eine Plattform fuer lokale Stand-up-Kultur aus
            Wien und dem deutschsprachigen Raum.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Zielgruppe</h2>
          <div className="split-grid">
            <article className="panel">
              <h3>Kernzielgruppe</h3>
              <p>
                Junge Erwachsene zwischen 16 und 35 Jahren, die sich fuer
                Stand-up-Comedy, Unterhaltung und lokale Events interessieren.
                Besonders angesprochen werden digital affine Nutzer, die
                regelmaessig Streaming-Plattformen und Social Media verwenden.
              </p>
            </article>

            <article className="panel">
              <h3>Erweiterte Zielgruppe</h3>
              <p>
                Das Angebot richtet sich auch an aeltere Nutzergruppen mit
                Interesse an Comedy-Veranstaltungen und kultureller
                Unterhaltung. Im Fokus stehen besonders Comedy-Fans aus Wien
                und Oesterreich sowie Fans deutschsprachiger Comedy.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section muted-section">
        <div className="container">
          <h2>Geschaeftsmodell</h2>
          <div className="split-grid">
            <article className="panel">
              <h3>Abonnement-Modell</h3>
              <p>
                Nutzer koennen ein monatliches Abonnement abschliessen, das
                Zugriff auf alle verfuegbaren VOD-Inhalte bietet. Dies bietet
                eine konstante und planbare Einnahmequelle fuer die Plattform.
              </p>
            </article>

            <article className="panel">
              <h3>Einzelkauf (Pay-per-View)</h3>
              <p>
                Bestimmte Premium-Events oder Special-Shows koennen einzeln
                gekauft und gestreamt werden. Dies ermoeglicht Zuschauern, nur
                fuer ihre favorisierten Inhalte zu bezahlen.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Unternehmensziel</h2>
          <div className="text-container">
            <p>
              Langfristig soll Let Comedy Thrive die zentrale digitale
              Plattform fuer Stand-up-Comedy in Oesterreich werden und lokale
              Comedy-Szenen staerker sichtbar machen.
            </p>
            <p>
              Durch die Kombination aus Live-Event-Kultur und digitalem
              Streaming soll eine moderne Plattform entstehen, die sowohl
              Kuenstlerinnen und Kuenstler als auch Zuschauer miteinander
              verbindet.
            </p>
            <p>
              Die Plattform bietet lokalen und aufstrebenden Comedians eine
              zusaetzliche Buehne und Comedy-Fans einen einfachen digitalen
              Zugang zu exklusiven Live-Auftritten.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
