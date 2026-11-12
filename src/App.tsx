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
  const [busqueda, setBusqueda] = useState('');
  const librosFiltrados = books.filter((book) => {
    return categoria === 'todos' || book.categoria === categoria
  });
  return(
    <main className="store">
      <Header />

      <Hero />

      <Intro />

      <section className='featured-books'>
        <h2>Nuestros Libros</h2>

        <div className='search-container'>
          <label htmlFor='book-search'>
            Buscar Libros
          </label>

          <input 
            type='search'
            id='book-search'
            placeholder='Busca por título o descripción....'
            value={busqueda}
            onChange={(event) => setBusqueda(event.target.value)}
          />
        </div>

        <div className='category-filters' aria-label='Filtrar libros por categoría'>
          <button type='button' className={categoria === 'todos' ? 'active' : ''} onClick={() => setCategoria('todos')}>
            Todos
          </button>

          <button type='button' className={categoria === 'fantasia' ? 'active' : ''} onClick={() => setCategoria('fantasia')}>
            Fantasía
          </button>

          <button type='button' className={categoria === 'romantasy' ? 'active' : ''} onClick={() => setCategoria('romantasy')}>
            Romantasy
          </button>

          <button type='button' className={categoria === 'romance' ? 'active' : ''} onClick={() => setCategoria('romance')}>
            Romance
          </button>

          <button type='button' className={categoria === 'juvenil' ? 'active' : ''} onClick={() => setCategoria('juvenil')}>
            Juvenil
          </button>
        </div>

        <div className='books-grid'>
          {librosFiltrados.map((book) => (
            <BookCard key={book.id} book={book}/>
          ))}
        </div>
      </section>

      <Footer />
    </main>

  )
}

export default App
