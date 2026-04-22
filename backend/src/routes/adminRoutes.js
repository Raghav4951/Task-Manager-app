const express = require("express");
const { getAllUsers, getAllTasks } = require("../controllers/adminController");
const { protect, authorizeRoles } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/users", protect, authorizeRoles("admin"), getAllUsers);
router.get("/tasks", protect, authorizeRoles("admin"), getAllTasks);

module.exports = router;