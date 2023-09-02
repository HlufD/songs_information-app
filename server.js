import express from "express";
import dotenv from "dotenv";
import path from "node:path";
import { connectToDb } from "./config/database.js";
import songsRouter from "./routes/songs.route.js";
import { notFound } from "./middlewares/notFound.js";
import { erroHandler } from "./middlewares/errorHandler.js";
import cors from "cors";
dotenv.config();

const app = express();
app.set("port", process.env.PORT);

app.use(express.json());
app.use(cors());
app.use("/api/songs", songsRouter);

if (process.env.NODE_ENV == "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist", "index.html"));
  });
}

app.use(notFound);
app.use(erroHandler);

async function start() {
  await connectToDb(process.env.MNGO_URI);
  app.listen(app.get("port"), () => {
    console.log(`Server is rinnig on port ${process.env.PORT}`);
  });
}

start();
