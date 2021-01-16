const BASE_URL = '/api/books/';

export function create(book) {
  return fetch(BASE_URL, {
    
  })
}

export function getAllBooks() {
  return fetch(BASE_URL, {mode: 'cors'})
  .then(res => res.json())
}

export function update() {

}

export function deleteOne(id) {
  return fetch(`${BASE_URL}${id}`, {
    method: 'DELETE',
  }, {mode: "cors"})
  .then(res => res.json());
}