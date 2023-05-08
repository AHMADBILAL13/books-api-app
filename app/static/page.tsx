import React from "react";

type Book = {
  id: number;
  name: string;
  type: string;
  available: boolean;
};

async function getBooks() {
  const respose = await fetch("https://simple-books-api.glitch.me/books");
  const data = respose.json();
  return data;
}

export default async function StaticPage() {
  const books = await getBooks();
  return (
    <div>
      <h1>Static page</h1>
      <ul>
        {books.map((book: Book) => (
          <li key={book.id}>
            {book.name} - {book.type}
          </li>
        ))}
      </ul>
    </div>
  );
}
