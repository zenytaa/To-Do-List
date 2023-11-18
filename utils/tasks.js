import fs from "fs";

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const dataPath = dirPath + "/taskList.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const readTasks = () => {
  const fileBuff = fs.readFileSync(dataPath, "utf-8");
  const tasks = JSON.parse(fileBuff);
  return tasks;
};

const findTask = (thisTask) => {
  const tasks = readTasks();
  const task = tasks.find((t) => t.task === thisTask);
  return task;
};

const saveTasks = (tasks) => {
  fs.writeFileSync("data/taskList.json", JSON.stringify(tasks));
};

const addTask = (task) => {
  const tasks = readTasks();
  tasks.push(task);
  saveTasks(tasks);
};

const deleteTask = (task) => {
  const tasks = readTasks();
  const filteredTasks = tasks.filter((t) => t.task !== task);
  saveTasks(filteredTasks);
};

export { readTasks, addTask, findTask, deleteTask };
