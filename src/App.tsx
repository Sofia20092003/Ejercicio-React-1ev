import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return(
    <main className="store">
      <Header />

      <Hero />

      <section className="intro" id="catalogo">
        <p className="eyebrow">TU PRÓXIMO MUNDO TE ESPERA</p>
        <h2>Hay historias que nunca te abandonan.</h2>
        <p>
          Fantasía, romantasy, romance y literatura juvenil.
          Encuentra tu próximo capítulo favorito.
        </p>
      </section>

      <Footer />
    </main>

  )
}

export default App
