import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/books";

function bookUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getBooks() {
  return http.get(apiEndpoint);
}

export function getBook(bookId) {
  return http.get(bookUrl(bookId));
}

export function saveBook(book) {
  if (book.id) {
    const body = { ...book };
    delete body.id;
    return http.put(bookUrl(book.id), body);
  }

  return http.post(apiEndpoint, book);
}

export function deleteBook(bookId) {
  return http.delete(bookUrl(bookId));
}
