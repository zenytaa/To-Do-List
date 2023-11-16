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

export { readTasks };
