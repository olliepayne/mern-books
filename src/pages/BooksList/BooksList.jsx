import './BooksList.css'

const BooksList = (props) => {
  const { books } = props

  return (
    <div className="book-list-container">
      <h1>All Books.</h1>
      {books.length > 0 ?
        <ul className="book-card-list">
          {props.books.map((book, index) => (
            <div className="book-card">
              <li key={index}><span className="book-title">{book.title}</span>, by {book.author}
                {book.pages !== undefined ? <p>{book.pages} pages</p> : ''}
              </li>
            </div>
          ))}
        </ul>
        :
        <img className="loading-img" src="" alt="Loading..."/>
      }
    </div>
  )
}

export default BooksList