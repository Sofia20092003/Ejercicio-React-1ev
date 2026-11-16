import { Link } from 'react-router'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <p className="footer-brand">The Hidden Chapter</p>
          <p>Every story hides another world.</p>
          <p>Una librería ficticia para descubrir historias y guardar tus próximas lecturas.</p>
        </div>
        <nav className="footer-nav" aria-label="Navegación del pie de página">
          <h2>Explora</h2>
          <Link to="/">Inicio</Link>
          <Link to="/catalogo">Catálogo</Link>
          <Link to="/favoritos">Mis favoritos</Link>
          <Link to="/carrito">Mi carrito</Link>
        </nav>
        <div className="footer-note">
          <h2>Sobre el proyecto</h2>
          <p>Proyecto académico de una tienda ficticia. Los precios y el stock son de ejemplo; todavía no se realizan pagos ni envíos.</p>
        </div>
      </div>
      <p className="footer-bottom">The Hidden Chapter · Un proyecto hecho para amantes de las historias</p>
    </footer>
  )
}

export default Footer
