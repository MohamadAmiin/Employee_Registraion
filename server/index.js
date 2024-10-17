import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT } from "./config.js";
import empolyeRouters from './routers/empolyeRouters.js'
const app = express();
app.use(express.json());
app.use(cors());
app.use('/empolyee' , empolyeRouters)


mongoose
  .connect("mongodb://localhost:27017/registraion")
  .then(() => console.log("Connecting to the database is sucessful"))
  .catch((err) => console.log("Database connection error", err));

app.listen(PORT, () => console.log(`The Server is Running on Port ${PORT}`));
