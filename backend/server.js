import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server is running in ${PORT}`);
  console.log(process.env.PORT);
});

app.get("/", (req, res) => {
  res.send("vishnu prakash");
});

app.use("/api/auth", authRoutes);
