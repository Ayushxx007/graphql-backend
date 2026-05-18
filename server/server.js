import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import {
  books,
  reviews,
  authors,
  getNextBookId,
  getNextReviewId,
} from "./data.js";


const typeDefs=`#graphql

type Book{
    id:ID!
    title:String!
    pages:Int!
    author:Author!
    reviews:[Review!]!
}
type Author{
    id:ID!
    name:String!
    books:[Book!]!

},
type Review{
    id:ID!
    rating:Int!
    comment:String!
    book:Book!

},
type Query{
    books:[Book!]!
    book(id:ID!):Book
    authors:[Author!]!
    author(id:ID!):Author

},
type Mutation{
    addBook(title:String!,pages:Int!,authorId:ID!):Book!
    addReview(bookId:ID!,rating:Int!,comment:String!):Review!

}
`;

const resolvers={
    Query:{
        books(){
            return books;
        },
        book(parent,args){
            return books.find((book)=>book.id===args.id);
        },
        authors(){
            return authors;
        },
        author(parent,args){
            return authors.find((author)=>author.id===args.id);
        },
    },
        Mutation:{
            addBook(parent,args){
                let authorExists=authors.some((author)=>author.id===args.authorId);
                if(!authorExists){
                    throw new Error("Author does not exist");
                }
                let newBook={
                    id:getNextBookId(),
                    title:args.title,
                    pages:args.pages,
                    authorId:args.authorId
                }
                books.push(newBook);
                return newBook;
            },
            addReview(parent,args){
                let bookExists=books.some((book)=>book.id===args.bookId);
                if(!bookExists){
                    throw new Error("Book does not exist");
                }
                if(args.rating<1 || args.rating>5){
                    throw new Error("Rating must be between 1 and 5");
                }
                let newReview={
                    id:  getNextReviewId(),
                    bookId:args.bookId,
                    rating:args.rating,
                    comment:args.comment
                }
                reviews.push(newReview);
                return newReview;
            }
        },

        Book:{
    author(parent){
        return authors.find((author)=>author.id===parent.authorId);
    },
    
    reviews(parent){
        return reviews.filter((review)=>review.bookId===parent.id);

}
        },

Author:{
    books(parent){
        return books.filter((book)=>book.authorId===parent.id);
    }
},
    
Review:{
    book(parent){
        return books.find((book)=>book.id===parent.bookId);

    },
}
};


        
const server = new ApolloServer({
    typeDefs,resolvers
  
});



const { url } = await startStandaloneServer(server, {
  listen: { port: 4001 },
});

console.log(`GraphQL server running at ${url}`);