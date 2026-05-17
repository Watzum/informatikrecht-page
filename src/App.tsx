import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'
import { AboutPage } from './pages/AboutPage'
import { AccessibilityPage } from './pages/AccessibilityPage'
import { AuthPage } from './pages/AuthPage'
import { EventsPage } from './pages/EventsPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PurchasePage } from './pages/PurchasePage'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/ueber-uns" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/kaufen" element={<PurchasePage />} />
        <Route path="/konto" element={<AuthPage />} />
        <Route path="/barrierefreiheit" element={<AccessibilityPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
