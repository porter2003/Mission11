import { useState, useEffect } from 'react';
import { Book } from './types/book';
function BookList () {

    const [books, setBooks] = useState<Book[]>([]);     

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch('https://localhost:5000/api/Book/GetBooks');
            const data = await response.json();
            setBooks(data);
        }
        fetchBooks();
    }, []);
    

    return (
        <>
        <h2>Book List</h2>
        <br/>
        {books.map((b) => 
            <div id="projectCard">
                <h1>{b.title}</h1>
                <p><strong>Author:</strong> {b.author}</p>
                <p><strong>Publisher:</strong> {b.publisher}</p>
                <p><strong>ISBN:</strong> {b.isbn}</p>
                <p><strong>Classification:</strong> {b.classification}</p>
                <p><strong>Category:</strong> {b.category}</p>
                <p><strong>Pages:</strong> {b.pageCount}</p>
                <p><strong>Price:</strong> ${b.price}</p>
            </div>
        )}
        </>
    );
}

export default BookList;