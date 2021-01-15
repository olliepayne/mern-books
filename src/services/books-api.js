const BASE_URL = '/api/books/';

export function create(book) {
  
}

export function getAllBooks() {
  return fetch(BASE_URL, {mode: 'cors'})
  .then(res => res.json())
}