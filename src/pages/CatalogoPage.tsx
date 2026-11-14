import { useState, type FormEvent } from 'react'
import BookCard from '../components/BookCard'
import { books } from '../data/books'

const librosPorPagina = 8
const categorias = [
  { valor: 'todos', nombre: 'Todos' },
  { valor: 'fantasia', nombre: 'Fantasía' },
  { valor: 'romantasy', nombre: 'Romantasy' },
  { valor: 'romance', nombre: 'Romance' },
  { valor: 'juvenil', nombre: 'Juvenil' },
]

function CatalogoPage() {
  const [categoria, setCategoria] = useState('todos')
  const [texto, setTexto] = useState('')
  const [busqueda, setBusqueda] = useState('')
  const [pagina, setPagina] = useState(1)

  const librosFiltrados = books.filter(book => {
    const coincideCategoria = categoria === 'todos' || book.categoria.toLowerCase() === categoria
    const coincideBusqueda = book.titulo.toLowerCase().includes(busqueda) || book.descripcion.toLowerCase().includes(busqueda)
    return coincideCategoria && coincideBusqueda
  })
  const totalPaginas = Math.ceil(librosFiltrados.length / librosPorPagina)
  const librosVisibles = librosFiltrados.slice((pagina - 1) * librosPorPagina, pagina * librosPorPagina)

  function buscar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setBusqueda(texto.trim().toLowerCase())
    setPagina(1)
  }

  function cambiarCategoria(valor: string) {
    setCategoria(valor)
    setPagina(1)
  }

  return (
    <section className="featured-books">
      <h2>Nuestros Libros</h2>
      <form className="search-container" onSubmit={buscar}>
        <label htmlFor="book-search">Buscar libros</label>
        <div className="search-actions">
          <input type="search" id="book-search" placeholder="Busca por título o descripción..." value={texto} onChange={event => setTexto(event.target.value)} />
          <button className="primary-button" type="submit">Buscar</button>
        </div>
      </form>
      <div className="category-filters" aria-label="Filtrar libros por categoría">
        {categorias.map(item => <button key={item.valor} type="button" className={categoria === item.valor ? 'active' : ''} aria-pressed={categoria === item.valor} onClick={() => cambiarCategoria(item.valor)}>{item.nombre}</button>)}
      </div>
      {librosFiltrados.length ? <>
        <p className="catalog-count" role="status">{librosFiltrados.length} {librosFiltrados.length === 1 ? 'libro encontrado' : 'libros encontrados'}</p>
        <div className="books-grid">{librosVisibles.map(book => <BookCard key={book.id} book={book} />)}</div>
        {totalPaginas > 1 && <nav className="pagination" aria-label="Páginas del catálogo">
          {Array.from({ length: totalPaginas }, (_, index) => index + 1).map(numero => <button key={numero} type="button" aria-label={`Página ${numero}`} aria-current={pagina === numero ? 'page' : undefined} onClick={() => { setPagina(numero); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>{numero}</button>)}
        </nav>}
      </> : <p className="no-results">No hemos encontrado libros que coincidan con tu búsqueda.</p>}
    </section>
  )
}
export default CatalogoPage
