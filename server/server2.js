import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { users, getNextUserId } from "./data2.js";



const typeDefs=`#graphql
type User{
  id:ID!,
  name:String!,
  age:Int!,
  isMarried:Boolean!,
  friends:[User!]!,
 
  },
  type Query{
    getUsers:[User!]!,
    getUserById(id:ID!):User,

  }
  type Mutation{
    createUser(name:String!,age:Int!,isMarried:Boolean!):User!
    updateUser(id:ID!,name:String!,age:Int!,isMarried:Boolean!):User!
    deleteUser(id:ID!):User!
    addFriend(userId: ID!, friendId: ID!): User!

  }
`;

const resolvers={
  Query:{
    getUsers:()=>{
      return users;
    },
    getUserById(parent,args){
      return users.find((user)=>user.id===args.id);
    },
  },
    Mutation:{
    updateUser(parent,args){
      let userExists=users.some((user)=>user.id===args.id);
      if(!userExists){
        throw new Error("User does not exist");
      }
      let updatedUser=users.find((user)=>user.id===args.id);
      updatedUser.name=args.name;
      updatedUser.age=args.age;
      updatedUser.isMarried=args.isMarried;
      return updatedUser;
    },
    deleteUser(parent,args){
      let userExists=users.some((user)=>user.id===args.id);
      if(!userExists){
        throw new Error("User does not exist");
      }
      let deletedUser=users.find((user)=>user.id===args.id);
      users=users.filter((user)=>user.id!==args.id);
      return deletedUser;
    },
    createUser(parent,args){
      let newUser={
        id:getNextUserId(),
        name:args.name,
        age:args.age,
        isMarried:args.isMarried,
      }
      users.push(newUser);
      return newUser;
    },
    addFriend(parent,args){
      const user=users.find((user)=>user.id===args.id);
      const friend=users.find((user)=>user.id===args.friendId);
      if(!user){
        throw new Error("User does not exist");
      }
      if(!friend){
        throw new Error("Friend does not exist")
      }
      if(user.id===friend.id){
        throw new Error("User cannot add himself as a friend")
      }
      if(user.firendIds.includes(friend.id)){
        throw new Error("friend already added")
      }
      user.friendIds.push(friend.id);
   
    }
},
User:{
  friends(parent){
    return users.filter((user)=>parent.friendIds.includes(user.id));
  }
}
};





const server=new ApolloServer({
  typeDefs,resolvers
});


const { url } = await startStandaloneServer(server, {
  listen: { port: 4002 },
});

console.log(`GraphQL server running at ${url}`);