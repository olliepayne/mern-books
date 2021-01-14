import { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import * as booksAPI from '../../services/books-api'
import Navbar from '../../components/Navbar/Navbar'
import Landing from '../../pages/Landing/Landing'

function App() {
  useEffect(() => {

  })

  return (
    <div className="App">
      <Navbar />
      <Route
        exact path="/"
        render={() => {
          <Landing />
        }
      }/>
    </div>
  );
}

export default App;