import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Intro from './components/Intro'
import BookCard from './components/BookCard'
import {books} from './data/books'
import { useState } from 'react'

function App() {
  const [categoria, setCategoria] = useState('Todos');
  return(
    <main className="store">
      <Header />

      <Hero />

      <Intro />

      <section className='featured-books'>
        <h2>Nuestros Libros</h2>

        <div className='category-filters' aria-label='Filtrar libros por categoría'>
          <button type='button' onClick={() => setCategoria('todos')}>
            Todos
          </button>

          <button type='button' onClick={() => setCategoria('fantasia')}>
            Fantasía
          </button>

          <button type='button' onClick={() => setCategoria('romantasy')}>
            Romantasy
          </button>

          <button type='button' onClick={() => setCategoria('romance')}>
            Romance
          </button>

          <button type='button' onClick={() => setCategoria('juvenil')}>
            Juvenil
          </button>
        </div>

        <div className='books-grid'>
          {books.map((book) =>(
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      <Footer />
    </main>

  )
}

export default App
