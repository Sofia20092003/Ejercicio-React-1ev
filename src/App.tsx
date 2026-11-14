import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CatalogoPage from './pages/CatalogoPage'
import FavoritosPage from './pages/FavoritosPage'
import CarritoPage from './pages/CarritoPage'

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <div className="store">
      <Header />
      <main className="page-content" key={pathname}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={<CatalogoPage />} />
          <Route path="/favoritos" element={<FavoritosPage />} />
          <Route path="/carrito" element={<CarritoPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
