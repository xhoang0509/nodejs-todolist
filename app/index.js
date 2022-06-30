// import yargs from "yargs"; es6
const yargs = require("yargs");
const chalk = require("chalk");

const { readAllTask, findOneTask, createTask, updateTask, deleteTask } = require("./models/task");
const {
  readAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  readOneProduct,
  increaseAmount50,
} = require("./models/product");

// CRUD

// TASK
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

// PRODUCT
// create - node app/index.js create-product --name="laptop" --price="1000" --amount="10" --description="Laptop gamming"
yargs.command({
  command: "create-product",
  builder: {
    name: {
      type: "string",
    },
    price: {
      type: "number",
    },
    amount: {
      type: "number",
    },
    description: {
      type: "string",
    },
  },
  handler: (args) => {
    const { name, price, amount, description } = args;
    newProduct = createProduct(name, price, amount, description);
    console.log(chalk.green("create new product successfully: "), newProduct);
  },
});

// read-all - node app/index.js read-all-product
yargs.command({
  command: "read-all-product",
  handler: () => {
    const data = readAllProduct();
    console.log(chalk.green("read-all data: "), data);
  },
});

// read-detail - node app/index.js read-detail-product --id="646e7edf-6c26-4707-97cc-a5b07a4e6622"
yargs.command({
  command: "read-detail-product",
  builder: {
    id: {
      type: "string",
    },
  },
  handler: (args) => {
    const { id } = args;
    const task = readOneProduct(id);
    console.log(chalk.green(`read-detail ${id}: `), task);
  },
});

// update - node app/index.js update-product --id="1" --name="laptop NEW" --price="1000" --amount="10" --description="Laptop gamming"
yargs.command({
  command: "update-product",
  builder: {
    id: {
      type: "string",
    },
    name: {
      type: "string",
    },
    price: {
      type: "number",
    },
    amount: {
      type: "number",
    },
    description: {
      type: "string",
    },
  },
  handler: (args) => {
    const { id, name, price, amount, description } = args;
    const res = updateProduct(id, name, price, amount, description);
    if (res) {
      console.log(chalk.red("update successfully: "), res);
    } else {
      console.log(chalk.red("update failed"));
    }
  },
});

// delete - node app/index.js delete-product --id="0.08356603381085859"
yargs.command({
  command: "delete-product",
  builder: {
    id: {
      type: "string",
    },
  },
  handler: (args) => {
    const { id } = args;
    const res = deleteProduct(id);
    if (res) {
      console.log(chalk.green("delete successfully"));
    } else {
      console.log(chalk.red("delete failed"));
    }
  },
});

// increse - node app/index.js increase-50 --id="0.08356603381085859"
yargs.command({
  command: "increase-50",
  builder: {
    id: {
      type: "string",
    },
  },
  handler: (args) => {
    const { id } = args;
    const res = increaseAmount50(id);
    if (res) {
      console.log(chalk.green("increase successfully"));
    } else {
      console.log(chalk.red("increase failed"));
    }
  },
});
// save command
yargs.parse();
