import React from 'react'

type Book ={
    id:number;
    name:string;
    type:string;
    available:boolean;
}

async function getFiction() {
    const respose =  await fetch("https://simple-books-api.glitch.me/books?type=fiction", {
        cache:"no-store"
    })
    const data = respose.json();
    return data;
}

async function getNonFiction() {
    const respose =  await fetch("https://simple-books-api.glitch.me/books?type=non-fiction", {
        cache:"no-store"
    })
    const data = respose.json();
    return data;
}

export default async function Parallel() {
        const fictionBooks = getFiction();
        const nonFictionBooks = getNonFiction();

        const [fiction, nonfiction] = await Promise.all([
            fictionBooks,
            nonFictionBooks
        ])
    return (
    <div>
        <h1>Fiction Books</h1>
        <ul>
        {fiction.map((book:Book) => (
            <li key={book.id}>
            {book.name}
        </li>
        ))} 
        </ul>

        <h1>Non-Fiction Books</h1>
        <ul>
        {nonfiction.map((book:Book) => (
            <li key={book.id}>
            {book.name}
        </li>
        ))} 
        </ul>
    </div>
  )
}
