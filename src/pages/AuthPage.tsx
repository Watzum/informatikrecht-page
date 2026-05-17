export function AuthPage() {
  return (
    <section className="content-section">
      <div className="container">
        <h1>Login und Registrierung</h1>
        <p className="lead compact">
          Dieser Bereich ist als Frontend-Mock umgesetzt. Eingaben werden nicht
          an ein Backend uebertragen.
        </p>

        <div className="auth-grid">
          <article className="auth-card" aria-labelledby="login-titel">
            <h2 id="login-titel">Einloggen</h2>
            <form className="auth-form" aria-label="Login-Formular">
              <label htmlFor="login-email">E-Mail-Adresse</label>
              <input
                id="login-email"
                name="loginEmail"
                type="email"
                autoComplete="email"
                placeholder="name@beispiel.at"
              />

              <label htmlFor="login-passwort">Passwort</label>
              <input
                id="login-passwort"
                name="loginPasswort"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
              />

              <button type="button" className="button button-primary">
                Einloggen (Mockup)
              </button>
            </form>
          </article>

          <article className="auth-card" aria-labelledby="register-titel">
            <h2 id="register-titel">Registrieren</h2>
            <form className="auth-form" aria-label="Registrierungsformular">
              <label htmlFor="register-name">Anzeigename</label>
              <input
                id="register-name"
                name="registerName"
                type="text"
                autoComplete="name"
                placeholder="z. B. ComedyFanWien"
              />

              <label htmlFor="register-email">E-Mail-Adresse</label>
              <input
                id="register-email"
                name="registerEmail"
                type="email"
                autoComplete="email"
                placeholder="name@beispiel.at"
              />

              <label htmlFor="register-passwort">Passwort</label>
              <input
                id="register-passwort"
                name="registerPasswort"
                type="password"
                autoComplete="new-password"
                placeholder="Mindestens 8 Zeichen"
              />

              <button type="button" className="button button-primary">
                Konto erstellen (Mockup)
              </button>
            </form>
          </article>
        </div>
      </div>
    </section>
  )
}
