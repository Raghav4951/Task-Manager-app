const express = require("express");
const {
  createTask,
  getMyTasks,
  getSingleTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/")
  .post(protect, createTask)
  .get(protect, getMyTasks);

router.route("/:id")
  .get(protect, getSingleTask)
  .put(protect, updateTask)
  .delete(protect, deleteTask);

module.exports = router;