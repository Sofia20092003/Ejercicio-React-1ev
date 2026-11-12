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
    const coincideCategoria = 
      categoria === 'todos' || book.categoria === categoria

    const textoBusqueda = busqueda.trim().toLowerCase()

    const coincideBusqueda =
      book.titulo.toLowerCase().includes(textoBusqueda) || 
      book.descripcion.toLowerCase().includes(textoBusqueda)


    return coincideCategoria && coincideBusqueda
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

        {librosFiltrados.length > 0 ? (
          <div className='books-grid'>
            {librosFiltrados.map((book) => (
              <BookCard key={book.id} book={book}/>
            ))}
          </div>
        ): (
          <p className='no-results'>
            No hemos encontrado libros que coincidan con tu búsqueda.
          </p>
        )
        }
      </section>

      <Footer />
    </main>

  )
}

export default App
