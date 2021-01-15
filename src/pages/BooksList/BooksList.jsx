const BooksList = (props) => {
  const { books } = props

  return (
    <div className="books-list-container">
      <h1>All Books.</h1>
      {books.length > 0 ?
        <ul>
          {props.books.map((book, index) => (
            <li key={index}>{book.title}, by {book.author}
              {book.pages !== null ? <p>{book.pages} pages</p> : ''}
            </li>
          ))}
        </ul>
        :
        <p>Loading books...</p>
      }
    </div>
  )
}

export default BooksList