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

app.post("/submit", (req, res) => {
  const inputTask = req.body["inputTask"];
  const inputDate = req.body["inputDate"];
  const data = { inputTask, inputDate };
  console.log(data);
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
