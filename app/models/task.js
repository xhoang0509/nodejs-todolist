const fs = require("fs");

const { FILE_NAME } = require("../constant");

const readAllTask = () => {
  const buffer = fs.readFileSync("task.json");
  // convert hex to string
  const taskString = buffer.toString();
  // convert string to JSON
  const taskJSON = JSON.parse(taskString);
  return taskJSON;
};

const findOneTask = (id) => {
  const buffer = fs.readFileSync("task.json");
  // convert hex to string
  const taskString = buffer.toString();
  // convert string to JSON
  const taskJSON = JSON.parse(taskString);
  const task = taskJSON.filter((task) => task.id === id);
  return task;
};

const createTask = (title, description) => {
  const newTask = {
    id: Math.random().toString(),
    title,
    description,
  };
  let tasks = readAllTask();
  tasks = [...tasks, newTask];
  fs.writeFileSync("task.json", JSON.stringify(tasks));
  return newTask;
};

const updateTask = (id, title, description) => {
  const data = readAllTask();
  const index = data.findIndex((item) => item.id === id);
  if (index !== -1) {
    const oldTask = data[index];
    const newTask = { ...oldTask, title, description };
    data[index] = newTask;
    fs.writeFileSync(FILE_NAME, JSON.stringify(data));
    return newTask;
  } else {
    return false;
  }
};

const deleteTask = (id) => {
  let data = readAllTask();
  const index = data.findIndex((item) => item.id === id);
  if (index !== -1) {
    data = data.filter((item) => item.id !== id);
    fs.writeFileSync(FILE_NAME, JSON.stringify(data));
    return true;
  } else {
    return false;
  }
};

module.exports = {
  readAllTask,
  findOneTask,
  createTask,
  updateTask,
  deleteTask,
};
