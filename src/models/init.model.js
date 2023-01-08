const Users = require("./users.model");
const TodosCategories = require("./todos-categories");
const Todos = require("./todos.model");
const Categories = require("./categories.model");

const initModels = () => {
  Users.hasMany(Todos, { as: "task", foreignKey: "user_id" });
  Todos.belongsTo(Users, { as: "author", foreignKey: "user_id" });

  Todos.hasMany(TodosCategories, { as: "category", foreignKey: "todo_id" });
  TodosCategories.belongsTo(Todos, { as: "task", foreignKey: "todo_id" });

  Categories.hasMany(TodosCategories, {
    as: "task",
    foreignKey: "category_id",
  });
  TodosCategories.belongsTo(Categories, {
    as: "category",
    foreignKey: "category_id",
  });
};

module.exports = initModels;
