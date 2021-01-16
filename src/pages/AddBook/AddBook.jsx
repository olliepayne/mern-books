import '../AddBook.css'

const AddBook = () => {
  const formData = {
    title: String,
    author: String,
    pages: Number,
    imageURL: String
  }

  const handleChange = (e) => {

  }

  return (
    <div className="add-book-container">
      <h1>Add a new book!</h1>
      <form className="add-book-form">
        <label>Title [required]</label>
        <input type="text" value={} onChange={() => handleChange()} />
      </form>
    </div>
  )
}

export default AddBook