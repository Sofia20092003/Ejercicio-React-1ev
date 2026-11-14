import { Link } from 'react-router'

function Hero(){
    return(
        <section className="hero" id="inicio">
            <p className="eyebrow">UNA LIBRERIA PARA SOÑAR</p>

            <h1>
                Every story hides
                <br/>
                <span>another world.</span>
            </h1>

            <p className="hero-description">
                Descubre historias que te transportan a otros mundos,
                romances imposibles y secretos que esperan ser revelados.
            </p>

            <Link className="primary-button" to="/catalogo" target="_blank" rel="noopener noreferrer" aria-label="Explorar libros (se abre en una pestaña nueva)">
                Explorar libros
            </Link>
        </section>
    )
}

export default Hero