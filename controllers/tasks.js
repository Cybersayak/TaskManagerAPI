export const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

export const createTask = (req, res) => {
  res.json(req.body);
};

export const getTaskbyId = (req, res) => {
  res.send({ id: req.params.id });
};

export const updateTaskbyID = (req, res) => {
  res.send("updating task by id");
};
export const deleteTask = (req, res) => {
  res.send("deleting task");
};
