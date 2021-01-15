import { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import * as booksAPI from '../../services/books-api'
import Navbar from '../../components/Navbar/Navbar'
import Landing from '../Landing/Landing'
import BooksList from '../BooksList/BooksList'

function App() {
  const [books, setBooks] = useState([])

  const getAllBooks = () => {
    
  }

  useEffect(() => {
    setBooks()
  })

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
    </div>
  );
}

export default App;