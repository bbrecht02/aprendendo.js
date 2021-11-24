const booksByCategory = [
    {   
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionaria",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da babilonia",
                author: "George S. Clason",
            },
            {
                title: "Os segredos da mente milionaria",
                author: "Robert T. Kiyasaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligencia Emocional",
        books: [
            {
                title: "Você é insubstituivel",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas alternamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    }
] 


let totalCategories = booksByCategory.length
console.log("Total de categorias: ",totalCategories)

for (let category of booksByCategory) { 
    console.log("total de livros por categoria: ", category.category)
    console.log(category.books.length)
}

countAuthors = () => {
    let authors = []

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }

    console.log("Total de autores: ", authors.length)
}

countAuthors()

booksOfAugustoCury = (author) => {
    let books = []

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === author) {
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}: ${books}`)
}

booksOfAugustoCury("Augusto Cury")