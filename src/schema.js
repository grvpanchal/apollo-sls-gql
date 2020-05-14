const schema = `

"""
Add Book input
"""
input addBookInput {
     vendor: String!
     title: String!
     author: String!
     ISBN: String!
}

"""
A book type that is an extension of a product
"""
type Book {
    ID: Int
    vendor: String
    title: String
    author: String
    ISBN: String
}

type Query {
     hello: String!
     """
     Get All Books
     """
     getBooks: [Book]
     """ 
     A query to get all the books a title has posted. 
     """
     getBooksByTitle(title:String!) : [Book]
}

type Mutation {
     addBook(input:addBookInput) : Book
}

`;

export { schema };
