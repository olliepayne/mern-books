import { useEffect, useState } from 'react'
import './Book.css'

const Book = (props) => {
  const { index, book } = props
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <li key={index}>
      <div className="book-card" onClick={handleOpen} onMouseLeave={() => isOpen ? handleOpen() : null} >
        {isOpen ?
            <>
              <p>
                <span className="book-title">{book.title}</span>, by {book.author}
                <br />
                {book.pages !== undefined ? <>{book.pages} pages</> : null}
              </p>
              <div className="btn-container">
                <button className="delete-btn">Delete</button>
              </div>
            </>
            :
            <img className="book-image" src={book.imageURL} alt={book.title} />
        }
      </div>
    </li>
  )
}

export default Book