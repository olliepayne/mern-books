const BASE_URL = '/api/books/';

export function create(book) {
  return fetch(BASE_URL, {
    
  })
}

export function getAllBooks() {
  return fetch(`${BASE_URL}`)
}