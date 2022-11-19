import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/ProjectController.js";

export const addProjectRoutes = (app) => {
  app.route("/projects").get(getProjects).post(createProject);
  app.route("/projects/:projectId").put(updateProject).delete(deleteProject);
};
