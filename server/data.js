export const authors = [
  { id: "a1", name: "Robert C. Martin" },
  { id: "a2", name: "Martin Kleppmann" },
  { id: "a3", name: "Eric Evans" },
  { id: "a4", name: "Andrew Hunt" },
  { id: "a5", name: "David Thomas" },
  { id: "a6", name: "Martin Fowler" },
  { id: "a7", name: "Kyle Simpson" },
  { id: "a8", name: "Douglas Crockford" },
  { id: "a9", name: "Marijn Haverbeke" },
  { id: "a10", name: "Eric Freeman" },
  { id: "a11", name: "Elisabeth Robson" },
  { id: "a12", name: "Alex Xu" },
];

export const books = [
  {
    id: "b1",
    title: "Clean Code",
    pages: 464,
    authorId: "a1",
  },
  {
    id: "b2",
    title: "Clean Architecture",
    pages: 432,
    authorId: "a1",
  },
  {
    id: "b3",
    title: "The Clean Coder",
    pages: 256,
    authorId: "a1",
  },
  {
    id: "b4",
    title: "Designing Data-Intensive Applications",
    pages: 616,
    authorId: "a2",
  },
  {
    id: "b5",
    title: "Domain-Driven Design",
    pages: 560,
    authorId: "a3",
  },
  {
    id: "b6",
    title: "The Pragmatic Programmer",
    pages: 352,
    authorId: "a4",
  },
  {
    id: "b7",
    title: "Programming Ruby",
    pages: 864,
    authorId: "a5",
  },
  {
    id: "b8",
    title: "Refactoring",
    pages: 448,
    authorId: "a6",
  },
  {
    id: "b9",
    title: "Patterns of Enterprise Application Architecture",
    pages: 560,
    authorId: "a6",
  },
  {
    id: "b10",
    title: "You Don't Know JS",
    pages: 278,
    authorId: "a7",
  },
  {
    id: "b11",
    title: "JavaScript: The Good Parts",
    pages: 176,
    authorId: "a8",
  },
  {
    id: "b12",
    title: "Eloquent JavaScript",
    pages: 472,
    authorId: "a9",
  },
  {
    id: "b13",
    title: "Head First Design Patterns",
    pages: 694,
    authorId: "a10",
  },
  {
    id: "b14",
    title: "Head First JavaScript Programming",
    pages: 704,
    authorId: "a11",
  },
  {
    id: "b15",
    title: "System Design Interview",
    pages: 320,
    authorId: "a12",
  },
  {
    id: "b16",
    title: "System Design Interview Volume 2",
    pages: 434,
    authorId: "a12",
  },
];

export const reviews = [
  {
    id: "r1",
    bookId: "b1",
    rating: 5,
    comment: "Must-read for software developers.",
  },
  {
    id: "r2",
    bookId: "b1",
    rating: 4,
    comment: "Some advice feels strict, but very useful.",
  },
  {
    id: "r3",
    bookId: "b2",
    rating: 5,
    comment: "Great book for understanding software architecture.",
  },
  {
    id: "r4",
    bookId: "b3",
    rating: 4,
    comment: "Good for learning professional developer behavior.",
  },
  {
    id: "r5",
    bookId: "b4",
    rating: 5,
    comment: "Best book for distributed systems.",
  },
  {
    id: "r6",
    bookId: "b4",
    rating: 5,
    comment: "Dense but extremely valuable.",
  },
  {
    id: "r7",
    bookId: "b5",
    rating: 4,
    comment: "Deep book on software modeling and business logic.",
  },
  {
    id: "r8",
    bookId: "b6",
    rating: 5,
    comment: "Very practical advice for becoming a better programmer.",
  },
  {
    id: "r9",
    bookId: "b6",
    rating: 4,
    comment: "Simple ideas, but powerful if applied consistently.",
  },
  {
    id: "r10",
    bookId: "b7",
    rating: 3,
    comment: "Useful, but very language-specific.",
  },
  {
    id: "r11",
    bookId: "b8",
    rating: 5,
    comment: "Excellent for learning how to improve existing code.",
  },
  {
    id: "r12",
    bookId: "b9",
    rating: 4,
    comment: "Very useful for backend and enterprise patterns.",
  },
  {
    id: "r13",
    bookId: "b10",
    rating: 5,
    comment: "Great for understanding JavaScript deeply.",
  },
  {
    id: "r14",
    bookId: "b10",
    rating: 4,
    comment: "Not beginner-friendly, but very rewarding.",
  },
  {
    id: "r15",
    bookId: "b11",
    rating: 3,
    comment: "Short and opinionated, but still useful.",
  },
  {
    id: "r16",
    bookId: "b12",
    rating: 4,
    comment: "Good beginner-to-intermediate JavaScript book.",
  },
  {
    id: "r17",
    bookId: "b12",
    rating: 5,
    comment: "Very clear explanations with practical examples.",
  },
  {
    id: "r18",
    bookId: "b13",
    rating: 5,
    comment: "Best beginner-friendly book for design patterns.",
  },
  {
    id: "r19",
    bookId: "b13",
    rating: 4,
    comment: "Explains patterns in a fun and visual way.",
  },
  {
    id: "r20",
    bookId: "b14",
    rating: 4,
    comment: "Good for learning JavaScript fundamentals.",
  },
  {
    id: "r21",
    bookId: "b15",
    rating: 4,
    comment: "Useful for interview preparation and system design basics.",
  },
  {
    id: "r22",
    bookId: "b15",
    rating: 5,
    comment: "Very practical for system design interviews.",
  },
  {
    id: "r23",
    bookId: "b16",
    rating: 5,
    comment: "More advanced examples than volume 1.",
  },
  {
    id: "r24",
    bookId: "b16",
    rating: 4,
    comment: "Helpful for understanding large-scale systems.",
  },
];

export let nextBookNumber = 17;
export let nextReviewNumber = 25;

export function getNextBookId() {
  return `b${nextBookNumber++}`;
}

export function getNextReviewId() {
  return `r${nextReviewNumber++}`;
}