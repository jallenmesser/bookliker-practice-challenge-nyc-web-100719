document.addEventListener("DOMContentLoaded", function() {

    fetch('http://localhost:3000/books')
    .then(resp => resp.json())
    .then(books => {
    books.forEach(addBook)
    })

  let bookList = document.getElementById('list')

  bookList.addEventListener('click', function(event){
      fetch(`http://localhost:3000/books/${event.target.dataset.id}`)
        .then(resp => resp.json())
        .then(book => {
            selectedBook(book)
        })

  })



  


});

let addBook = book => {
    const ul = document.getElementById('list')
    const li = document.createElement('li')
    li.className = 'book'
    li.dataset.id = book.id
    
    li.innerText = `${book.title}`
  
    ul.append(li)
  }

  let selectedBook = book => {
    let showPanel = document.getElementById('show-panel')
    showPanel.innerHTML = `
    <h1> ${book.title} </h1>
    <img src='${book.img_url}'>
    <p> ${book.description}</p>
    <h3> Users Who Have Read This Book</h3>
    <ul>
    </ul>
    <button classname= "readButton">Read</button>
    `
    
    book.users.forEach(user => {
        let userUL = showPanel.getElementsByTagName('ul')[0]
        let li = document.createElement('li')
        li.innerHTML = `
        ${user.username}
        `
        userUL.append(li)
      })

    let button = showPanel.getElementsByTagName('button')
    button.addEventListener('click', function(event){
        
    })
  }

  let renderUser = user => {
    let userUL = document.getElementsByClassName('users')
    console.log(userUL[0])
    let li = document.createElement('li')
    li.innerHTML = `
    <p>${user.username}</p>
    `
    userUL.append(li)
  }
