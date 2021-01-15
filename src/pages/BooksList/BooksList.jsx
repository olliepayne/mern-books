import './BooksList.css'
import Book from '../../components/Book/Book'

const BooksList = (props) => {
  const { books } = props

  return (
    <div className="book-list-container">
      <h1>All Books.</h1>
      {books.length > 0 ?
        <ul className="book-card-list">
          {props.books.map((book, index) => (
            <Book index={index} book={book} />
          ))}
        </ul>
        :
        <img className="loading-img" src="#" alt="Loading..." />
      }
    </div>
  )
}

export default BooksList