import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <h2>MERN Books</h2>
      <ul className="nav-links">
        <li><a href="/books">Home</a></li>
        <li><a href="/books">All Books</a></li>
        <li><a href="/books/new">Add Book</a></li>
      </ul>
    </nav>
  )
}

export default Navbar