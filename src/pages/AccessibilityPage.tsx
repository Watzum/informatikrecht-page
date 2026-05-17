export function AccessibilityPage() {
  return (
    <section className="content-section">
      <div className="container text-container">
        <h1>Barrierefreiheitserklärung</h1>
        <p>
          Diese Erklärung gilt für die Website von Let Comedy Thrive.
        </p>

        <h2>Stand der Vereinbarkeit mit WCAG 2.2 AA</h2>
        <p>
          Diese Website ist weitgehend mit den Anforderungen der Web Content
          Accessibility Guidelines (WCAG) 2.2 auf Konformitätsstufe AA
          vereinbar. Einzelne Medieninhalte sind noch nicht vollständig
          beschrieben (siehe Einschränkungen unten).
        </p>

        <h2>Umgesetzte Maßnahmen</h2>
        <ul>
          <li>HTML-Struktur mit klarer Überschriftenhierarchie.</li>
          <li>Vollständige Tastaturbedienbarkeit </li>
          <li>Farbkontraste für Text und Bedienelemente.</li>
          <li>Responsive Darstellung für Smartphone, Tablet und Desktop.</li>
          <li>Skip-Link für den direkten Sprung zum Hauptinhalt.</li>
          <li>Beschriftete Formularelemente und aussagekräftige Linktexte.</li>
          <li>Alt‑Attribute für Bilder</li>
        </ul>

        <h2>Bekannte Einschränkungen</h2>

        <h3>Videos</h3>
        <p>
          Es gibt derzeit eingebettete Videos auf der Website, für
          die noch keine vollständige textliche Beschreibung, Untertitel oder
          Transkripte vorliegen. 
        </p>
        <ul>
          <li>
            Videos: Eingebettete Videos verfügen derzeit nicht über
            standardmäßige Untertitel oder vollständige Transkripte.
          </li>
        </ul>
        <p>
          Auswirkungen: Nutzerinnen und Nutzer, die auf Screenreader oder
          Untertitel angewiesen sind, können dadurch eingeschränkt sein.
        </p>
        <p>
          Maßnahmen: Wenn du von einer fehlenden Beschreibung
          betroffen bist, kontaktiere uns bitte unter
        </p>
        <p>
          <a className="inline-link" href="mailto:barrierefreiheit@let-comedy-thrive.at">
            barrierefreiheit@let-comedy-thrive.at
          </a>
          . Wir stellen auf Anfrage alternative Textbeschreibungen oder
          Transkripte zur Verfügung.
        </p>
        <p>
          Planung: Die fehlenden Alternativtexte, Untertitel und Transkripte
          werden schrittweise ergänzt; die Arbeiten haben Priorität. Wir
          streben an, mäßige bis kritische Medienlücken innerhalb von 3
          Monaten zu schließen; bei Bedarf stellen wir individuelle
          Alternativmaterialien schneller zur Verfügung.
        </p>

        <h3>Verantwortliche Stelle</h3>
        <p>
          Verantwortlich für die Barrierefreiheit dieser Website ist:
        </p>
        <address>
          Let Comedy Thrive<br />
          E-Mail: <a className="inline-link" href="mailto:barrierefreiheit@let-comedy-thrive.at">barrierefreiheit@let-comedy-thrive.at</a>
        </address>

        <h3>Feedback und Kontakt</h3>
        <p>
          Wenn du Barrieren auf dieser Website bemerkst oder eine alternative
          Version eines Inhalts benötigst, kontaktiere uns bitte per E‑Mail.
        </p>
        <p>
          Wir reagieren auf Anfragen zur Barrierefreiheit in der Regel innerhalb
          von 5 Werktagen und liefern auf Wunsch alternative Formate (z. B.
          Transkripte, ausführliche Bildbeschreibungen).
        </p>
        <h3>Erstellungsdatum</h3>
        <p>Diese Erklärung wurde zuletzt am 17. Mai 2026 aktualisiert.</p>
      </div>
    </section>
  )
}
