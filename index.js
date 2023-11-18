import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import cookieParser from "cookie-parser";
import flash from "connect-flash";
import { readTasks, addTask, findTask, deleteTask } from "./utils/tasks.js";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser("secret"));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

app.get("/", (req, res) => {
  const tasksList = readTasks();
  // console.log(`Ini taskslist : ${tasksList}`);
  res.render("index", { tasksList, msg: req.flash("msg") });
});

app.post("/add", (req, res) => {
  // console.log(`Ini addtask : ${req.body}`);
  addTask(req.body);
  req.flash("msg", "Task added successfuly!");
  res.redirect("/");
});

app.get("/delete/:task", (req, res) => {
  const task = findTask(req.params.task);
  console.log(`Ini task yang di delete${task}`);
  if (!task) {
    res.status(404);
    res.send(`<h4>Task doesn't found!</h4>`);
  } else {
    deleteTask(req.params.task);
  }
  res.redirect("/");
});

app.get("/edit/:task", (req, res) => {
  const task = findTask(req.params.task);
  console.log(`Ini task yang di edit${task}`);
  // res.render("edit-task", { task });
});

app.post("/update", (req, res) => {
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
