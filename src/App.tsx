import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CatalogoPage from './pages/CatalogoPage'

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="store">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={<CatalogoPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
