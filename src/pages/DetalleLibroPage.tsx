import { useState } from 'react'
import { Link, useParams } from 'react-router'
import { books } from '../data/books'
import { autoresVerificados, contextoLibros } from '../data/detallesLibros'
import { useLibrary } from '../hooks/useLibrary'
import QuantitySelector from '../components/QuantitySelector'

function DetalleLibroPage() {
  const { id } = useParams()
  const { cart, addToCart } = useLibrary()
  const [mensaje, setMensaje] = useState('')
  const [cantidad, setCantidad] = useState(1)
  const book = books.find(item => String(item.id) === id)

  if (!book) return <section className="featured-books empty-library"><h2>Libro no encontrado</h2><Link to="/catalogo">Volver al catálogo</Link></section>
  const enCarrito = cart.filter(item => item === book.id).length
  const disponible = Math.max(0, book.stock - enCarrito)
  const cantidadSeleccionada = Math.min(cantidad, disponible)
  const perfil = autoresVerificados[book.autor]
  const otrosLibros = books.filter(item => item.autor === book.autor && item.id !== book.id)

  function anadir() {
    if (!book) return
    const resultado = addToCart(book.id, cantidadSeleccionada)
    if (resultado === 'added') setCantidad(1)
    setMensaje(resultado === 'added' ? `${cantidadSeleccionada} ${cantidadSeleccionada === 1 ? 'unidad añadida' : 'unidades añadidas'} al carrito` : resultado === 'limit' ? 'No quedan suficientes unidades disponibles' : 'No se pudo guardar en este navegador')
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
        <dl><div><dt>Idioma</dt><dd>{book.idioma}</dd></div><div><dt>Stock disponible</dt><dd>{book.stock} unidades</dd></div></dl>
        <QuantitySelector cantidad={cantidadSeleccionada} disponible={disponible} onChange={setCantidad} titulo={book.titulo} />
        <button className="primary-button detail-add" type="button" onClick={anadir} disabled={disponible === 0}>Añadir al carrito</button>
        {disponible === 0 && <p>Has alcanzado el máximo disponible.</p>}
        <p role="status">{mensaje}</p>
      </div>
    </div>
    <div className="detail-sections">
      <section><h2>Sobre el libro</h2><p>{book.descripcion}</p><p>{contextoLibros[book.id]}</p></section>
      <section><h2>Sobre {book.autor}</h2>
        {perfil ? <><p>{perfil.texto}</p><a href={perfil.fuente} target="_blank" rel="noopener noreferrer">Conocer más sobre {book.autor}</a></> : <p>{book.autor} firma «{book.titulo}», incluido en nuestra selección de {book.categoria.toLowerCase()}.{otrosLibros.length > 0 ? ` También encontrarás ${otrosLibros.map(item => `«${item.titulo}»`).join(' y ')} en el catálogo.` : ' Pronto añadiremos más información biográfica.'}</p>}
      </section>
    </div>
  </section>
}
export default DetalleLibroPage
