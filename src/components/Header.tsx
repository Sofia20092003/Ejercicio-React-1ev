function Header() {
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
                <a href="#carrito">Carrito</a>
            </nav>
        </header>
    )
}

export default Header