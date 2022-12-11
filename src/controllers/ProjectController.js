import { Project } from "../DB/DBAssociations.js";

export const getProjects = (req, res) => {
  Project.findAll().then((values) => {
    res.status(200);
    res.send(values);
  });
};

export const createProject = (req, res) => {
  Project.create(req.body, { fields: ["title"] })
    .then((value) => {
      res.status(200);
      res.send(value);
    })
    .catch((reason) => {
      res.status(400);
      res.send(reason);
    });
};

export const updateProject = async (req, res) => {
  const project = await Project.findByPk(req.params.projectId);
  if (!project) {
    res.status(404);
    res.send({});
  } else {
    project.update(req.body).then((value) => {
      res.status(200);
      res.send(value);
    });
  }
};

export const deleteProject = async (req, res) => {
  const project = await Project.findByPk(req.params.projectId);
  if (!project) {
    res.status(404);
    res.send({});
  } else {
    project.destroy().then((value) => {
      res.status(200);
      res.send({});
    });
  }
};
