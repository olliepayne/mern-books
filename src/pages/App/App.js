import { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import * as booksAPI from '../../services/books-api'
import Navbar from '../../components/Navbar/Navbar'
import Landing from '../Landing/Landing'
import AddBook from '../AddBook/AddBook'
import BooksList from '../BooksList/BooksList'

function App() {
  const [books, setBooks] = useState([])

  const getAllBooks = async () => {
    const booksData = await booksAPI.getAllBooks()
    setBooks(booksData)
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
          <BooksList />
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