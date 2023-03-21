import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.8.0"

const supabaseUrl = 'https://cisjjwpuhifurlweybve.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpc2pqd3B1aGlmdXJsd2V5YnZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1NTU2NzcsImV4cCI6MTk5MzEzMTY3N30.vgiJMTb-qOYO_hrxkbd5CD6UnX-b812WGjigqNRVqC4'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks()
{
  let { data: Books, error } = await supabase
  .from('Books')
  .select('*')

for(let book of Books)
  {
    let bookList = document.getElementById('books');
    bookList.innerHTML += `<tr><th scope = "row">${book.title}</th><td>${book.author}</td><td>${book.ISBN}</td></tr>`;
  }
}

getBooks();