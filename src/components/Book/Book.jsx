import { useEffect, useState } from 'react'
import './Book.css'

const Book = (props) => {
  const { index, book } = props
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="book-card" onClick={handleOpen} >
      <li key={index}>
        {isOpen ?
          <>
            <span className="book-title">{book.title}</span>, by {book.author}
            {book.pages !== undefined ? <p>{book.pages} pages</p> : ''}
          </>
          :
          <img className="book-image" src={book.imageURL} alt={book.title} />
        }
      </li>
    </div>
  )
}

export default Book