import express from "express";
import { createServer } from "node:http";
import { connectToSever } from "../controllers/socketManager.js";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "../routes/user.routes.js";

import dotenv from "dotenv";

dotenv.config();

const app = express();
const server = createServer(app);
const io = connectToSever(server);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));
app.use("/api/v1/users", userRoutes);

app.get("/", async (req, res) => {
  return res.json({ message: "Hello, World!" });
});

const main = async () => {
  await mongoose.connect(`${process.env.DB_URI}`);

  server.listen(app.get("port"), () => {
    console.log(`${process.env.PORT} Listening`);
  });
};

main();
