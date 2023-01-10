require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./api/routes");

const { mysqlDatabase } = require("./api/models/dbconfig");
const { globalErrorHandler } = require('./api/middleware/error');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(routes);
app.use(globalErrorHandler)

app.get("/pong", async (req, res) => {
  res.status(200).json({ message: "pingssss" });
});

const PORT = process.env.PORT;

const start = async () => {
  try {
    await mysqlDatabase.initialize().then(() => {
      console.log("Data Source has been inilialized!💡💡 ");
    });
    app.listen(PORT, () => console.log(`server is listening on ${PORT}🔥🔥🔥🔥🔥🔥🔥 `));
  } catch (err) {
    console.error("Error during Data Source initialization", err);
    mysqlDatabase.destroy();
  }
};

start();
