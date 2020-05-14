import { hello, getBooksByTitle, getBooks } from "./query";
import { addBook } from "./mutation";

export const resolvers = {
    Query: {
        hello: (root, args, context) => hello(args, context),
        getBooksByTitle: (root, args, context) => getBooksByTitle(args, context),
        getBooks: (root, args, context) => getBooks(args, context)
    },
    Mutation: {
        addBook: (root, { input: args }, context) => addBook({ input: args }, context),
    }

}
