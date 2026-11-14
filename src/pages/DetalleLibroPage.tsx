import { useState } from 'react'
import { Link, useParams } from 'react-router'
import { books } from '../data/books'
import { useLibrary } from '../hooks/useLibrary'

function DetalleLibroPage() {
  const { id } = useParams()
  const { cart, addToCart } = useLibrary()
  const [mensaje, setMensaje] = useState('')
  const book = books.find(item => String(item.id) === id)

  if (!book) return <section className="featured-books empty-library"><h2>Libro no encontrado</h2><Link to="/catalogo">Volver al catálogo</Link></section>
  const enCarrito = cart.filter(item => item === book.id).length

  function anadir() {
    if (!book) return
    const resultado = addToCart(book.id)
    setMensaje(resultado === 'added' ? 'Añadido al carrito' : resultado === 'limit' ? 'No quedan más unidades disponibles' : 'No se pudo guardar en este navegador')
  }

  return <section className="book-detail">
    <Link className="detail-back" to="/catalogo">← Volver al catálogo</Link>
    <div className="detail-layout">
      <img className="detail-cover" src={book.imagen} alt={`Portada de ${book.titulo}`} />
      <div className="detail-info">
        <p className="detail-category">{book.categoria}</p>
        <h1>{book.titulo}</h1>
        <p>Por {book.autor}</p>
        <p className="detail-price">{book.precio.toFixed(2)} €</p>
        <p>{book.descripcion}</p>
        <dl><div><dt>Idioma</dt><dd>{book.idioma}</dd></div><div><dt>Stock disponible</dt><dd>{book.stock} unidades</dd></div><div><dt>En tu carrito</dt><dd>{enCarrito} unidades</dd></div><div><dt>Identificador</dt><dd>{book.id}</dd></div></dl>
        <button className="primary-button" type="button" onClick={anadir} disabled={enCarrito >= book.stock}>Añadir al carrito</button>
        {enCarrito >= book.stock && <p>Has alcanzado el máximo disponible.</p>}
        <p role="status">{mensaje}</p>
      </div>
    </div>
  </section>
}
export default DetalleLibroPage
