// import yargs from "yargs"; es6
const yargs = require("yargs");
const chalk = require("chalk");

const { readAllTask, findOneTask, createTask, updateTask, deleteTask } = require("./models/task");

// CRUD
// create - node app/index.js create --title="Learn NodeJS" --description="Learn NodeJS is very easy for everyone"
yargs.command({
  command: "create",
  builder: {
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
  },
  handler: (args) => {
    const { title, description } = args;
    newTask = createTask(title, description);
    console.log(chalk.green("create new task successfully: "), newTask);
  },
});

// read-all - node app/index.js read-all
yargs.command({
  command: "read-all",
  handler: () => {
    const data = readAllTask;
    console.log(chalk.green("read-all data: "), data);
  },
});

// read-detail - node app/index.js read-detail --id="646e7edf-6c26-4707-97cc-a5b07a4e6622"
yargs.command({
  command: "read-detail",
  builder: {
    id: {
      type: "string",
    },
  },
  handler: (args) => {
    const { id } = args;
    const task = findOneTask(id);
    console.log(chalk.green(`read-detail ${id}: `), task);
  },
});

// update - node app/index.js update --id="0.4715119693607994" --title="Learn NodeJS NEW" --description="Learn NodeJS is very easy for everyone NEW"
yargs.command({
  command: "update",
  builder: {
    id: {
      type: "string",
    },
    type: {
      type: "string",
    },
    description: {
      type: "string",
    },
  },
  handler: (args) => {
    const { id, title, description } = args;
    const res = updateTask(id, title, description);
    if (res) {
      console.log(chalk.red("update successfully: "), res);
    } else {
      console.log(chalk.red("update failed"));
    }
  },
});

// delete - node app/index.js delete --id="0.4715119693607994"
yargs.command({
  command: "delete",
  builder: {
    id: {
      type: "string",
    },
  },
  handler: (args) => {
    const { id } = args;
    const res = deleteTask(id);
    if (res) {
      console.log(chalk.green("delete successfully"));
    } else {
      console.log(chalk.red("delete failed"));
    }
  },
});
// save command
yargs.parse();
