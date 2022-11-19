import {
  addNewTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../controllers/TaskController.js";
export const addTaskRoutes = (app) => {
  app.route("/projects/:projectID/").get(getTasks).post(addNewTask); //.put().delete(); we can make all the tasks completed at once. the same for delete.
  app.route("/projects/:projectID/:taskID").put(updateTask).delete(deleteTask);
};
