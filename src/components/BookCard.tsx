import { useState } from 'react'
import { Link } from 'react-router'
import { useLibrary } from '../hooks/useLibrary'
import type { Book } from '../types/Book'
import QuantitySelector from './QuantitySelector'

interface BookCardProps {
  book: Book
}

function BookCard({ book }: BookCardProps) {
  const { favorites, cart, toggleFavorite, addToCart } = useLibrary()
  const [mensaje, setMensaje] = useState('')
  const [cantidad, setCantidad] = useState(1)
  const favorito = favorites.includes(book.id)
  const enCarrito = cart.filter(id => id === book.id).length
  const disponible = Math.max(0, book.stock - enCarrito)
  const cantidadSeleccionada = Math.min(cantidad, disponible)

  function cambiarFavorito() {
    setMensaje(toggleFavorite(book.id) ? (favorito ? 'Eliminado de favoritos' : 'Añadido a favoritos') : 'No se pudo guardar en este navegador')
  }

  function anadirAlCarrito() {
    const resultado = addToCart(book.id, cantidadSeleccionada)
    if (resultado === 'added') setCantidad(1)
    setMensaje(resultado === 'added' ? `${cantidadSeleccionada} ${cantidadSeleccionada === 1 ? 'unidad añadida' : 'unidades añadidas'} al carrito` : resultado === 'limit' ? 'No quedan más unidades disponibles' : 'No se pudo guardar en este navegador')
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
        <h3><Link to={`/libro/${book.id}`}>{book.titulo}</Link></h3>
        <p>{book.autor}</p>
        <p className="book-stock">{book.stock > 0 ? `Stock: ${book.stock} unidades · En tu carrito: ${enCarrito}` : 'Sin stock'}</p>
        <p className="book-price">{book.precio.toFixed(2)} €</p>
        <Link className="detail-link" to={`/libro/${book.id}`}>Ver detalles</Link>
        <QuantitySelector cantidad={cantidadSeleccionada} disponible={disponible} onChange={setCantidad} titulo={book.titulo} />
        <button className="add-cart-button" type="button" onClick={anadirAlCarrito} disabled={disponible === 0}>{enCarrito >= book.stock ? 'Máximo disponible' : 'Añadir al carrito'}</button>
        <span className="book-feedback" role="status">{mensaje}</span>
      </div>
    </article>
  )
}
export default BookCard
