import { addProjectRoutes } from "./projectRoute.js";
import { addTaskRoutes } from "./taskRoutes.js";
export const addRouts = (app) => {
  addProjectRoutes(app);
  addTaskRoutes(app);
};
