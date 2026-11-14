import { useState, type RefObject } from "react";
import { Link } from "react-router";
import {books} from '../data/books'

interface SearchOverlayProps{
    onClose: () => void
    inputRef: RefObject<HTMLInputElement | null>
}

function SearchOverlay({onClose, inputRef}: SearchOverlayProps){
    const [busqueda, setBusqueda] = useState('')

    const textoBusqueda = busqueda.trim().toLowerCase()

    const resultados = textoBusqueda
        ? books.filter((book) =>
                book.titulo.toLowerCase().includes(textoBusqueda) ||
                book.descripcion.toLowerCase().includes(textoBusqueda)
            ).slice(0, 4)
        : []
    return (
        <div className="inline-search">
            <div className="inline-search-field">
                <img
                    src="/icons/search.svg"
                    alt=""
                    className="inline-search-icon"
                />

                <input
                    ref={inputRef}
                    type="search"
                    placeholder="Buscar libros..."
                    aria-label="Buscar libros"
                    value={busqueda}
                    onChange={(event) => setBusqueda(event.target.value)}
                />

                <button
                    type="button"
                    className="search-close"
                    onClick={onClose}
                    aria-label="Cerrar buscador"
                >
                    ✕
                </button>
            </div>

            {textoBusqueda && (
                <div className="inline-search-results">
                {resultados.length > 0 ? (
                    resultados.map((book) => (
                    <Link className="inline-search-result" key={book.id} to={`/libro/${book.id}`} onClick={onClose}>
                        <img src={book.imagen} alt="" />

                        <div>
                        <p className="result-title">{book.titulo}</p>
                        <p className="result-author">{book.autor}</p>
                        </div>
                    </Link>
                    ))
                ) : (
                    <p className="search-empty">
                    No encontramos libros con esa búsqueda.
                    </p>
                )}
                </div>
            )}
        </div>
    )
}

export default SearchOverlay