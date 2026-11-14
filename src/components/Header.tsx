import { Link } from 'react-router'
import { useEffect, useRef, useState } from "react"
import SearchOverlay from "./SearchOverlay";

function Header() {
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
                    src="/public/images/logo-the-hidden-chapter.png"
                    alt=""
                    className="brand-logo"
                />
            </Link>

            <nav className={`navigation ${buscadorAbierto ? 'search-open' : ''}`} aria-label="Navegación principal">
                <div className="nav-links">
                    <Link to="/">Inicio</Link>
                    <Link to="/catalogo" target="_blank" rel="noopener noreferrer" aria-label="Catálogo (se abre en una pestaña nueva)">Catálogo</Link>
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
                            <img src="/public/icons/search.svg" alt="" />
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

                

                <a 
                    href="#carrito"
                    className="nav-icon"
                    aria-label="Ver carrito"
                >
                    <img src="/public/icons/shopping-bag.svg" alt="" />
                </a>
            </nav>

        </header>
    )
}

export default Header