export function AboutPage() {
  return (
    <>
      <section className="content-section">
        <div className="container text-container">
          <h1>über uns</h1>
          <p className="lead">
            Let Comedy Thrive ist eine Plattform für lokale Stand-up-Kultur aus
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
                Junge Erwachsene zwischen 16 und 35 Jahren, die sich für
                Stand-up-Comedy, Unterhaltung und lokale Events interessieren.
                Besonders angesprochen werden digital affine Nutzer, die
                regelmässig Streaming-Plattformen und Social Media verwenden.
              </p>
            </article>

            <article className="panel">
              <h3>Erweiterte Zielgruppe</h3>
              <p>
                Das Angebot richtet sich auch an ältere Nutzergruppen mit
                Interesse an Comedy-Veranstaltungen und kultureller
                Unterhaltung. Im Fokus stehen besonders Comedy-Fans aus Wien
                und österreich sowie Fans deutschsprachiger Comedy.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section muted-section">
        <div className="container">
          <h2>Geschäftsmodell</h2>
          <div className="split-grid">
            <article className="panel">
              <h3>Abonnement-Modell</h3>
              <p>
                Nutzer können ein monatliches Abonnement abschliessen, das
                Zugriff auf alle verfügbaren VOD-Inhalte bietet. Dies bietet
                eine konstante und planbare Einnahmeqülle für die Plattform.
              </p>
            </article>

            <article className="panel">
              <h3>Einzelkauf (Pay-per-View)</h3>
              <p>
                Bestimmte Premium-Events oder Special-Shows können einzeln
                gekauft und gestreamt werden. Dies ermöglicht Zuschaürn, nur
                für ihre favorisierten Inhalte zu bezahlen.
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
              Plattform für Stand-up-Comedy in österreich werden und lokale
              Comedy-Szenen stärker sichtbar machen.
            </p>
            <p>
              Durch die Kombination aus Live-Event-Kultur und digitalem
              Streaming soll eine moderne Plattform entstehen, die sowohl
              Künstlerinnen und Künstler als auch Zuschaür miteinander
              verbindet.
            </p>
            <p>
              Die Plattform bietet lokalen und aufstrebenden Comedians eine
              zusätzliche Bühne und Comedy-Fans einen einfachen digitalen
              Zugang zu exklusiven Live-Auftritten.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
