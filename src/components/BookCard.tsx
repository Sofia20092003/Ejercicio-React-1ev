import { useState } from 'react'
import { useLibrary } from '../hooks/useLibrary'
import type { Book } from '../types/Book'

interface BookCardProps {
  book: Book
}

function BookCard({ book }: BookCardProps) {
  const { favorites, toggleFavorite, addToCart } = useLibrary()
  const [mensaje, setMensaje] = useState('')
  const favorito = favorites.includes(book.id)

  function cambiarFavorito() {
    setMensaje(toggleFavorite(book.id) ? (favorito ? 'Eliminado de favoritos' : 'Añadido a favoritos') : 'No se pudo guardar en este navegador')
  }

  function anadirAlCarrito() {
    setMensaje(addToCart(book.id) ? 'Añadido al carrito' : 'No se pudo guardar en este navegador')
  }

  return (
    <article className="book-card">
      <div className="book-cover">
        <img src={book.imagen} alt={`Portada de ${book.titulo}`} />
        <button className={`favorite-button ${favorito ? 'is-favorite' : ''}`} type="button" onClick={cambiarFavorito}
          aria-pressed={favorito} aria-label={`${favorito ? 'Quitar de' : 'Añadir a'} favoritos: ${book.titulo}`}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" /></svg>
        </button>
      </div>
      <div className="book-card-info">
        <p>{book.categoria}</p>
        <h3>{book.titulo}</h3>
        <p>{book.autor}</p>
        <p className="book-price">{book.precio.toFixed(2)} €</p>
        <button className="add-cart-button" type="button" onClick={anadirAlCarrito}>Añadir al carrito</button>
        <span className="book-feedback" role="status">{mensaje}</span>
      </div>
    </article>
  )
}
export default BookCard
