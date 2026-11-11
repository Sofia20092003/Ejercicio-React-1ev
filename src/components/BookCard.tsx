import type {Book} from '../types/Book'

interface BookCardProps{
    book: Book
}

function BookCard({book}: BookCardProps){
    return(
        <article className='book-card'>
            <img 
                src={book.imagen}
                alt={`Portada de ${book.titulo}`}
            />

            <div className='book-card-info'>
                <p>{book.categoria}</p>

                <h3>{book.titulo}</h3>

                <p>{book.autor}</p>

                <p>{book.precio.toFixed(2)} €</p>
            </div>
        </article>
    )
}

export default BookCard