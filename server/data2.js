// data.js

export let users = [
    {
      id: "u1",
      name: "Gaurank",
      age: 21,
      isMarried: false,
      friendIds: ["u2", "u3"],
    },
    {
      id: "u2",
      name: "Ayush",
      age: 24,
      isMarried: false,
      friendIds: ["u1", "u4"],
    },
    {
      id: "u3",
      name: "Rohit",
      age: 27,
      isMarried: true,
      friendIds: ["u1", "u5"],
    },
    {
      id: "u4",
      name: "Priya",
      age: 25,
      isMarried: false,
      friendIds: ["u2"],
    },
    {
      id: "u5",
      name: "Sneha",
      age: 29,
      isMarried: true,
      friendIds: ["u3", "u6"],
    },
    {
      id: "u6",
      name: "Karan",
      age: 30,
      isMarried: true,
      friendIds: ["u5"],
    },
  ];
  
let nextUserNumber = 7;

 export function getNextUserId(){
  return `u${nextUserNumber++}`;
 }