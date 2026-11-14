import { Link } from 'react-router'
import BookCard from '../components/BookCard'
import { books } from '../data/books'
import { useLibrary } from '../hooks/useLibrary'

function FavoritosPage() {
  const { favorites } = useLibrary()
  const librosFavoritos = books.filter(book => favorites.includes(book.id))
  return (
    <section className="featured-books">
      <h2>Mis favoritos</h2>
      {librosFavoritos.length ? (
        <div className="books-grid">{librosFavoritos.map(book => <BookCard key={book.id} book={book} />)}</div>
      ) : (
        <div className="empty-library"><p>Aún no has guardado ningún libro en favoritos.</p><Link to="/catalogo">Explorar el catálogo</Link></div>
      )}
    </section>
  )
}
export default FavoritosPage
