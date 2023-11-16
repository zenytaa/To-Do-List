import express from "express";
import bodyParser from "body-parser";
import { readTasks } from "./utils/tasks.js";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const tasksList = readTasks();
  console.log(tasksList);
  res.render("index", tasksList);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
