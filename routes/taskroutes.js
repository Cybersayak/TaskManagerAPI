import express from "express";
const router = express.Router();

import {
  getAllTasks,
  createTask,
  getTaskbyId,
  updateTaskbyID,
  deleteTask,
} from "../controllers/tasks.js";

router.route("/").get(getAllTasks).post(createTask);

router.route("/:id").get(getTaskbyId).patch(updateTaskbyID).delete(deleteTask);

export default router;
