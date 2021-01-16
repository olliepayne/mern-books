import { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import * as booksAPI from '../../services/books-api'
import Navbar from '../../components/Navbar/Navbar'
import Landing from '../Landing/Landing'
import AddBook from '../AddBook/AddBook'
import BookList from '../BookList/BookList'

function App() {
  const [books, setBooks] = useState([])

  const getAllBooks = async () => {
    const booksData = await booksAPI.getAllBooks()
    setBooks(booksData)
  }

  const deleteBook = async (id) => {
    await booksAPI.deleteOne(id)
    setBooks(books.filter(b => b.id !== id))

    getAllBooks()
  }

  const bookFunctions = {
    delete: deleteBook
  }

  useEffect(() => {
    getAllBooks()
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Route
        exact path="/"
        render={() =>
          <Landing />
        }
      />
      <Route
        exact path="/books"
        render={() =>
          <BookList books={books} bookFunctions={bookFunctions}/>
        }
      />
      <Route
        exact path="/books/new"
        render={() =>
          <AddBook />
        }
      />
    </div>
  );
}

export default App;