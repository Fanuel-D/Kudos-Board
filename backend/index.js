const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
const PORT = process.env.PORT;
const boards = require("./routes/allBoards.js");
const userRoutes = require("./routes/auth.js");

app.use(cors());
app.use(express.json());
app.use("/boards", boards);
app.use("/login", userRoutes);

app.listen(PORT, () => {
  console.log(`This app is listening to the http://localhost:${PORT}`);
});
