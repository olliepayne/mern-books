import './BooksList.css'

const BooksList = (props) => {
  const { books } = props

  return (
    <div className="books-list-container">
      <h1>All Books.</h1>
      {books.length > 0 ?
        <ul className="book-card-list">
          {props.books.map((book, index) => (
            <div className="book-card">
              <li key={index}>{book.title}, by {book.author}
                {book.pages !== null ? <p>{book.pages} pages</p> : ''}
              </li>
            </div>
          ))}
        </ul>
        :
        <p>Loading books...</p>
      }
    </div>
  )
}

export default BooksList