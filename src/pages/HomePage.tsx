import { Link } from 'react-router'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import BookCard from '../components/BookCard'
import { books } from '../data/books'

function HomePage() {
  const librosDestacados = books.slice(0, 8)

  return (
    <>
      <Hero />
      <Intro />
      <section className="featured-books" id="destacados">
        <h2>Libros destacados</h2>
        <div className="books-grid">
          {librosDestacados.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        <Link className="primary-button catalog-link" to="/catalogo">Ver catálogo completo</Link>
      </section>
    </>
  )
}

export default HomePage
