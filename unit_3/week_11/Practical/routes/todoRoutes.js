const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");



router.get("/", todoController.getTodoList);


router.get("/new", todoController.newTodo);


router.post("/", todoController.createTodo);


router.delete("/:id", todoController.deleteTodo);


router.get("/:id/edit", todoController.editTodo);


router.put("/:id", todoController.updateTodo);



router.get("/:id", todoController.showTodo);

module.exports = router;
