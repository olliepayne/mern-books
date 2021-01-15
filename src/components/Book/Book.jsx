import { useEffect, useState } from 'react'
import './Book.css'

const Book = (props) => {
  const { index, book } = props
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    // <div className="book-card" onClick={handleOpen} >
    //   <li key={index}>
    //     {isOpen ?
    //       <>
    //         <span className="book-title">{book.title}</span>, by {book.author}
    //         {book.pages !== undefined ? <p>{book.pages} pages</p> : ''}
    //         <button className="update-btn">Update</button>
    //         <button className="delete-btn">Delete</button>
    //       </>
    //       :
    //       <img className="book-image" src={book.imageURL} alt={book.title} />
    //     }
    //   </li>
    // </div>
    <li key={index}>
      <div className="book-card" onClick={handleOpen} >
        {isOpen ?
            <>
              <span className="book-title">{book.title}</span>, by {book.author}
              {book.pages !== undefined ? <>{book.pages} pages</> : ''}
              <div className="btn-container">
                <button className="update-btn">Update</button>
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