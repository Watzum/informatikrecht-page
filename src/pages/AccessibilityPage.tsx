export function AccessibilityPage() {
  return (
    <section className="content-section">
      <div className="container text-container">
        <h1>Barrierefreiheitserklaerung</h1>
        <p>
          Diese Erklaerung gilt fuer die Website von Let Comedy Thrive.
        </p>

        <h2>Stand der Vereinbarkeit mit WCAG 2.2 AA</h2>
        <p>
          Diese Website ist weitgehend mit den Anforderungen der Web Content
          Accessibility Guidelines (WCAG) 2.2 auf Konformitaetsstufe AA
          vereinbar.
        </p>

        <h2>Umgesetzte Massnahmen</h2>
        <ul>
          <li>Semantische Struktur mit klarer Ueberschriftenhierarchie.</li>
          <li>Vollstaendige Tastaturbedienbarkeit inkl. sichtbarer Fokusstile.</li>
          <li>Ausreichende Farbkontraste fuer Text und Bedienelemente.</li>
          <li>Responsive Darstellung fuer Smartphone, Tablet und Desktop.</li>
          <li>Skip-Link fuer den direkten Sprung zum Hauptinhalt.</li>
        </ul>

        <h2>Bekannte Einschraenkungen</h2>
        <p>
          Einige Interaktionen (z. B. Suche, Login und Kaufablaeufe) befinden
          sich derzeit in einer Vorschauversion und sind noch nicht vollstaendig
          funktional angebunden.
        </p>

        <h2>Feedback und Kontakt</h2>
        <p>
          Wenn du Barrieren auf dieser Website bemerkst, sende bitte eine
          Rueckmeldung an:
        </p>
        <p>
          <a className="inline-link" href="mailto:barrierefreiheit@let-comedy-thrive.at">
            barrierefreiheit@let-comedy-thrive.at
          </a>
        </p>

        <h2>Erstellungsdatum</h2>
        <p>Diese Erklaerung wurde zuletzt am 17. Mai 2026 aktualisiert.</p>
      </div>
    </section>
  )
}
