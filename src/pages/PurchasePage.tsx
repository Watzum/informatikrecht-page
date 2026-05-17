type Product = {
  id: string
  title: string
  comedian: string
  price: string
  quality: string
}

const products: Product[] = [
  {
    id: 'late-night-kellerclub',
    title: 'Late Night im Kellerclub',
    comedian: 'David Kolar',
    price: 'EUR 6,90',
    quality: 'Full HD',
  },
  {
    id: 'roast-night-special',
    title: 'Roast Night Special',
    comedian: 'Selin Demir',
    price: 'EUR 8,50',
    quality: '4K',
  },
  {
    id: 'stadt-bühne-special',
    title: 'Stadtbühne Special - Wien',
    comedian: 'Mila Gruber',
    price: 'EUR 7,40',
    quality: 'Full HD',
  },
]

export function PurchasePage() {
  return (
    <section className="content-section">
      <div className="container">
        <h1>Einzelkauf</h1>
        <p className="lead compact">
          Wähle eine Show für den direkten Einzelkauf. Die Kaufbuttons sind
          als Frontend-Mock umgesetzt und lösen keine echte Zahlung aus.
        </p>

        <ul className="purchase-grid" aria-label="Einzeln kaufbare Shows">
          {products.map((product) => (
            <li key={product.id} className="purchase-card">
              <h2>{product.title}</h2>
              <p>
                <strong>Comedian:</strong> {product.comedian}
              </p>
              <p>
                <strong>Qualität:</strong> {product.quality}
              </p>
              <p className="price-tag">{product.price}</p>
              <button
                type="button"
                className="button button-primary"
                aria-describedby={`kauf-hinweis-${product.id}`}
              >
                Kauf starten (Mockup)
              </button>
              <p id={`kauf-hinweis-${product.id}`} className="subtle-note">
                Mockup: Kein Zahlungsprovider verbunden.
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
