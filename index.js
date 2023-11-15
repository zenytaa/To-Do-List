import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

let taskList = [];
let dateList = [];
app.post("/submit", (req, res) => {
  const inputTask = req.body["inputTask"];
  const inputDate = req.body["inputDate"];
  // const data = [inputTask, inputDate];
  taskList.push(inputTask);
  dateList.push(inputDate);
  let datas = { taskList, dateList };
  console.log(datas);
  res.render("index.ejs", datas);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
