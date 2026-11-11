function Header() {
    return(
        <header className="header">
            <a className="brand" href="#">
                The Hidden Chapter
            </a>

            <nav className="navigation" aria-label="Navegación principal">
                <a href="#inicio">Inicio</a>
                <a href="#catalogo">Catálogo</a>
                <a href="#carrito">Carrito</a>
            </nav>
        </header>
    )
}

export default Header