import './Navbar.css'

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav>
        <h2>MERN Books</h2>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/books">All Books</a></li>
          <li><a href="/books/new">Add Book</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar