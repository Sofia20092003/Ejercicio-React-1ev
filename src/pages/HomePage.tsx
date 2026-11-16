import { Link } from 'react-router'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import BookCard from '../components/BookCard'
import { books } from '../data/books'

const mundos = [
  { categoria: 'fantasia', nombre: 'Fantasía', descripcion: 'Magia, reinos y aventuras imposibles.' },
  { categoria: 'romantasy', nombre: 'Romantasy', descripcion: 'Amor y magia en un mismo destino.' },
  { categoria: 'romance', nombre: 'Romance', descripcion: 'Historias para enamorarse página a página.' },
  { categoria: 'juvenil', nombre: 'Juvenil', descripcion: 'Personajes y aventuras por descubrir.' },
]

function HomePage() {
  const librosDestacados = books.slice(0, 8)

  return (
    <>
      <Hero />
      <Intro />
      <section className="worlds" aria-labelledby="worlds-title">
        <p className="eyebrow">ENCUENTRA TU PRÓXIMA HISTORIA</p>
        <h2 id="worlds-title">¿Qué mundo quieres descubrir?</h2>
        <p className="worlds-intro">Elige el camino que más te llame y explora los libros de ese género.</p>
        <div className="worlds-grid">
          {mundos.map(mundo => (
            <Link className="world-card" key={mundo.categoria} to={`/catalogo?categoria=${mundo.categoria}`}>
              <span className="world-symbol" aria-hidden="true">✧</span>
              <span className="world-name">{mundo.nombre}</span>
              <span className="world-description">{mundo.descripcion}</span>
              <span className="world-action">Explorar <span aria-hidden="true">→</span></span>
            </Link>
          ))}
        </div>
      </section>
      <section className="featured-books" id="destacados">
        <h2>Libros destacados</h2>
        <div className="books-grid">
          {librosDestacados.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        <Link className="primary-button catalog-link" to="/catalogo">Ver catálogo completo</Link>
      </section>
      <section className="reading-corner" aria-labelledby="reading-corner-title">
        <p className="eyebrow">UN RINCÓN PARA TUS HISTORIAS</p>
        <h2 id="reading-corner-title">Guarda los libros que te llaman</h2>
        <p>¿Una historia ha despertado tu curiosidad? Pulsa el corazón para encontrarla después en tus favoritos.</p>
        <Link to="/favoritos">Ver mis favoritos <span aria-hidden="true">→</span></Link>
      </section>
    </>
  )
}

export default HomePage
