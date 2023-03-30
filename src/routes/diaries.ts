import express from "express";
import * as diaryServices from "../services/diaryServices";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(diaryServices.getEnties());
});

router.get("/:id", (req, res) => {
  const entry = diaryServices.findById(parseInt(req.params.id));
  entry ? res.send(entry) : res.send(404);
});

router.post("/", (req, res) => {
  const { title, subtitle, text, img, category } = req.body;

  const newDiaryEntry = diaryServices.addDiary({title, subtitle, text, img, category});

  res.json(newDiaryEntry);
});

export default router;
