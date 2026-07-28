import { Router } from "express";
import ActivityModel from "../models/Activity.js";

const router = Router();

router.get("/", async (req, res) => {
  const activities = await ActivityModel.find().populate("user");
  res.json({ activities, message: "List activities" });
});

router.post("/", async (req, res) => {
  const activity = await ActivityModel.create(req.body);
  res.status(201).json({ activity, message: "Create activity" });
});

export default router;
