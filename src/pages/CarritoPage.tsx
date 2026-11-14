import { Link } from 'react-router'
import { books } from '../data/books'
import { useLibrary } from '../hooks/useLibrary'

function CarritoPage() {
  const { cart, removeFromCart } = useLibrary()
  const items = books.filter(book => cart.includes(book.id))
  const total = items.reduce((sum, book) => sum + book.precio * cart.filter(id => id === book.id).length, 0)
  return (
    <section className="featured-books">
      <h2>Mi carrito</h2>
      {items.length ? <div className="cart-list">
        {items.map(book => <article className="cart-item" key={book.id}>
          <img src={book.imagen} alt={`Portada de ${book.titulo}`} />
          <div><h3>{book.titulo}</h3><p>Cantidad: {cart.filter(id => id === book.id).length}</p><p>{book.precio.toFixed(2)} € por unidad</p>
            <button type="button" onClick={() => removeFromCart(book.id)}>Eliminar del carrito</button></div>
        </article>)}
        <p className="cart-total">Total: {total.toFixed(2)} €</p>
        <p>El proceso de compra aún está pendiente.</p>
      </div> : <div className="empty-library"><p>Tu carrito está vacío.</p><Link to="/catalogo">Explorar el catálogo</Link></div>}
    </section>
  )
}
export default CarritoPage
