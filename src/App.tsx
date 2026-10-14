function App() {
  return(
    <main className="store">
      <header className="header">
        <a className="brand" href="#">The Hidden Chapter</a>
        <nav className="navigation" aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#carrito">Carrito</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <p className="eyebrow">UNA LIBRERÍA PARA SOÑAR</p>
        <h1>
          Every story hides
          <br/>
          <span>another world.</span>
        </h1>
        <p className="hero-description">
          Descubre historias que te transportan a otros mundos, romances imposibles y 
          secretos que esperan ser revelados.
        </p>
        <a className="primary-button" href="#catalogo">Explorar libros</a>
      </section>

      <section className="intro" id="catalogo">
        <p className="eyebrow">TU PRÓXIMO MUNDO TE ESPERA</p>
        <h2>Hay historias que nunca te abandonan.</h2>
        <p>
          Fantasía, romantasy, romance y literatura juvenil.
          Encuentra tu próximo capítulo favorito.
        </p>
      </section>

      <footer className="footer" id="carrito">
        <p>The Hidden Chapter</p>
        <p>Every story hides another world.</p>
      </footer>
    </main>

  )
}

export default App
