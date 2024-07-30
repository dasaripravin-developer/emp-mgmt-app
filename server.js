import express from "express";
import bodyParser from "body-parser";
import { empRouter } from "./src/routes/employee.routes.js";
import "dotenv/config";

const app = express();
app.use(bodyParser.json());
app.use("/employee", empRouter);
app.listen(process.env.PORT || 3001, "0.0.0.0", () => {
  console.log("server started");
});

process.on('uncaughtException', (err) => {
  console.log('Error - >', err)
})
