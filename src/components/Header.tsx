import { Link } from 'react-router'
import { useEffect, useRef, useState } from "react"
import SearchOverlay from "./SearchOverlay";
import { useLibrary } from "../hooks/useLibrary"

function Header() {
    const { cart } = useLibrary()
    const [buscadorAbierto, setBuscadorAbierto] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if(buscadorAbierto) {
            inputRef.current?.focus()
        }
    }, [buscadorAbierto])

    useEffect(() => {
        if(!buscadorAbierto) return

        function cerrarConEscape(event: KeyboardEvent){
            if(event.key === 'Escape'){
                setBuscadorAbierto(false)
            }
        }

        window.addEventListener('keydown' , cerrarConEscape)

        return () => {
            window.removeEventListener('keydown' , cerrarConEscape)
        }
    } , [buscadorAbierto])

    return(
        <header className="header">
            <Link className="brand" to="/" aria-label="The Hidden Chapter - Inicio">
                <img
                    src="/images/logo-the-hidden-chapter.png"
                    alt=""
                    className="brand-logo"
                />
            </Link>

            <nav className={`navigation ${buscadorAbierto ? 'search-open' : ''}`} aria-label="Navegación principal">
                <div className="nav-links">
                    <Link to="/">Inicio</Link>
                    <Link to="/catalogo">Catálogo</Link>
                </div>

                <div className="nav-search">
                    {!buscadorAbierto ? (
                        <button
                            type="button"
                            className="nav-icon"
                            aria-label="Buscar libros"
                            aria-expanded={buscadorAbierto}
                            onClick={() => setBuscadorAbierto(!buscadorAbierto)}
                        >
                            <img src="/icons/search.svg" alt="" />
                        </button>
                    ) : (
                        <div className="nav-search-expanded">
                            <SearchOverlay
                                inputRef={inputRef}
                                onClose={() => setBuscadorAbierto(false)}
                            />
                        </div>
                    )}
                </div>



                <Link to="/favoritos" className="nav-icon" aria-label="Ver favoritos">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" /></svg>
                </Link>

                <Link
                    to="/carrito"
                    className="nav-icon cart-icon"
                    aria-label={`Ver carrito: ${cart.length} ${cart.length === 1 ? 'producto' : 'productos'}`}
                >
                    <img src="/icons/shopping-bag.svg" alt="" />
                    {cart.length > 0 && <span className="cart-badge" aria-hidden="true">{cart.length}</span>}
                </Link>
            </nav>

        </header>
    )
}

export default Header
