import BookCard from "../components/BookCard";
import { books } from "../data/books";

function CatalogoPage() {
    return (
        <section className="featured-books" id="catalogo">
            <h2>Nuestro Catálogo</h2>

            <div className="books-grid">
                {books.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </section>
    )
}

export default CatalogoPage