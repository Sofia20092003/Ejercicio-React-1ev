import { useState } from "react"

function Header() {
    const [buscadorAbierto, setBuscadorAbierto] = useState(false);

    return(
        <header className="header">
            <a className="brand" href="#inicio" aria-label="The Hidden Chapter - Inicio">
                <img 
                    src="/public/images/logo-the-hidden-chapter.png"
                    alt=""
                    className="brand-logo"
                />
            </a>

            <nav className="navigation" aria-label="Navegación principal">
                <a href="#inicio">Inicio</a>
                <a href="#catalogo">Catálogo</a>

                <button
                    type="button"
                    className="nav-icon"
                    aria-label="Buscar libros"
                    aria-expanded={buscadorAbierto}
                    onClick={() => setBuscadorAbierto(!buscadorAbierto)}
                >
                    <img src="/public/icons/search.svg" alt="" />
                </button>

                <a 
                    href="#carrito"
                    className="nav-icon"
                    aria-label="Ver carrito"
                >
                    <img src="/public/icons/shopping-bag.svg" alt="" />
                </a>
            </nav>

            {buscadorAbierto && (
                <div className="search-preview">
                    <p>Próximamente: buscador de libros</p>
                </div>
            )}
        </header>
    )
}

export default Header