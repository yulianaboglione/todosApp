const db = require("../utils/database");
const Users = require("../models/users.model");
const Todos = require("../models/todos.model");

const users = [
  { username: "yuli", email: "yuli@gmail.com", password: "1234" },
  { username: "julio", email: "julio@gmail.com", password: "1234" },
  { username: "dina", email: "dina@gmail.com", password: "1234" },
];

const todos = [
  {
    title: "Tarea 1",
    description: "Descripcion para 1",
    userId: 1,
  },
  {
    title: "Tarea 2",
    description: "Descripcion para 2",
    userId: 1,
  },
  {
    title: "Tarea 3",

    userId: 2,
  },
  {
    title: "Tarea 4",
    description: "Descripcion para 4",
    userId: 3,
  },
];
db.sync({ force: true })
  .then(() => {
    console.log("insertando informacion");
    users.forEach((user) => Users.create(user));
    setTimeout(() => {
      todos.forEach((todo) => Todos.create(todo));
    }, 100);
  })
  .catch((error) => console.log(error));
//const categories = [];
//const todosCategories = [];
