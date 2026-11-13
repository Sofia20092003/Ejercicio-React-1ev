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
            <a className="brand" href="#inicio" aria-label="The Hidden Chapter - Inicio">
                <img 
                    src="/public/images/logo-the-hidden-chapter.png"
                    alt=""
                    className="brand-logo"
                />
            </a>

            <nav className={`navigation ${buscadorAbierto ? 'search-open' : ''}`} aria-label="Navegación principal">
                <div className="nav-links">
                    <a href="#inicio">Inicio</a>
                    <a href="#catalogo">Catálogo</a>
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