import { useState } from 'react'
import { Link } from 'react-router'
import { books } from '../data/books'
import { useLibrary } from '../hooks/useLibrary'

function CarritoPage() {
  const { cart, addToCart, decreaseQuantity, removeFromCart, clearCart } = useLibrary()
  const [mensaje, setMensaje] = useState('')
  const items = books.filter(book => cart.includes(book.id))
  const total = items.reduce((sum, book) => sum + book.precio * cart.filter(id => id === book.id).length, 0)

  function aumentar(id: number) {
    const resultado = addToCart(id)
    setMensaje(resultado === 'limit' ? 'No quedan más unidades disponibles.' : resultado === 'error' ? 'No se pudo guardar el carrito en este navegador.' : '')
  }

  function disminuir(id: number) {
    setMensaje(decreaseQuantity(id) ? '' : 'No se pudo guardar el carrito en este navegador.')
  }

  function eliminar(id: number) {
    const book = books.find(item => item.id === id)
    if (!book || !window.confirm(`¿Eliminar ${book.titulo} del carrito?`)) return
    setMensaje(removeFromCart(id) ? '' : 'No se pudo guardar el carrito en este navegador.')
  }

  function vaciar() {
    if (!window.confirm('¿Vaciar todo el carrito?')) return
    setMensaje(clearCart() ? '' : 'No se pudo guardar el carrito en este navegador.')
  }

  return (
    <section className="featured-books">
      <h2>Mi carrito</h2>
      {items.length ? <div className="cart-list">
        {items.map(book => {
          const cantidad = cart.filter(id => id === book.id).length
          return <article className="cart-item" key={book.id}>
            <img src={book.imagen} alt={`Portada de ${book.titulo}`} />
            <div>
              <h3>{book.titulo}</h3>
              <p>{book.precio.toFixed(2)} € por unidad</p>
              <div className="quantity-control" role="group" aria-label={`Cantidad de ${book.titulo}`}>
                <button type="button" onClick={() => disminuir(book.id)} disabled={cantidad <= 1} aria-label={`Reducir cantidad de ${book.titulo}`}>−</button>
                <span aria-live="polite">{cantidad}</span>
                <button type="button" onClick={() => aumentar(book.id)} disabled={cantidad >= book.stock} aria-label={`Aumentar cantidad de ${book.titulo}`}>+</button>
              </div>
              <p>Unidades disponibles: {book.stock}</p>
              <button type="button" onClick={() => eliminar(book.id)}>Eliminar del carrito</button>
            </div>
          </article>
        })}
        <button className="empty-cart-button" type="button" onClick={vaciar}>Vaciar carrito</button>
        <p className="cart-total">Total: {total.toFixed(2)} €</p>
        <p>El proceso de compra aún está pendiente.</p>
        <p role="status">{mensaje}</p>
      </div> : <div className="empty-library"><p>Tu carrito está vacío.</p><Link to="/catalogo">Explorar el catálogo</Link><p role="status">{mensaje}</p></div>}
    </section>
  )
}
export default CarritoPage
