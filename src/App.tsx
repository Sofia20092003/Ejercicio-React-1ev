import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Intro from './components/Intro'
import BookCard from './components/BookCard'
import {books} from './data/books'

function App() {
  return(
    <main className="store">
      <Header />

      <Hero />

      <Intro />

      <section className='featured-books'>
        <h2>Nuestros Libros</h2>
        <BookCard book={books[0]} />
      </section>

      <Footer />
    </main>

  )
}

export default App
