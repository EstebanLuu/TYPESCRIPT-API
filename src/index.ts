import express from "express";
import diaries from "./routes/diaries";

const app = express();

app.use(express.json()); //middleware que transforma la req.body a un json

const PORT = 3000;

app.get("/ping", (_req, res) => {
  console.log("someone pinged here!!");
  res.send("Pong");
});

app.use("/api/diaries", diaries); 

app.listen(PORT, () => {
  console.log("server is on port 3000");
});
