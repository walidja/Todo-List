import { ProjectSchema } from "../models/Project.js";
import { TaskSchema } from "../models/Task.js";
import { DBConnection } from "./DBConnection.js";

// connect to the database
const db = DBConnection.getInstance();

export const Project = db.define("Project", ProjectSchema, {
  timestamps: false,
  paranoid: true,
});

export const Task = db.define("Task", TaskSchema, {
  timestamps: false,
  paranoid: true,
});

Project.hasMany(Task, {
  foreignKey: {
    allowNull: false,
  },
  onDelete: "cascade",
});
Task.belongsTo(Project, {
  foreignKey: {
    allowNull: false,
  },
});

db.sync();
