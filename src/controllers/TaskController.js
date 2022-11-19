import { Task } from "../DB/DBAssociations.js";
export const getTasks = (req, res) => {
  Task.findAll({
    attributes: { exclude: ["ProjectId"] },
    where: {
      ProjectId: req.params.projectID,
    },
  }).then((values) => {
    res.status(200);
    res.send(values);
  });
};

export const addNewTask = (req, res) => {
  req.body["ProjectId"] = req.params.projectID;
  Task.create(req.body)
    .then((value) => {
      res.status(200);
      res.send(value);
    })
    .catch((reason) => {
      res.status(400);
      res.send(reason);
    });
};

export const updateTask = async (req, res) => {
  const task = await Task.findByPk(req.params.taskID, {
    attributes: { exclude: ["ProjectId"] },
  });
  if (!task) {
    res.status(404);
    res.send({});
  } else {
    task.update(req.body).then((value) => {
      res.status(200);
      res.send(value);
    });
  }
};

export const deleteTask = async (req, res) => {
  const task = await Task.findByPk(req.params.taskID);
  if (!task) {
    res.status(404);
    res.send({});
  } else {
    task.destroy().then((value) => {
      res.status(200);
      res.send(value);
    });
  }
};
