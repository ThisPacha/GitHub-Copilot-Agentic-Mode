import { Router } from "express";
import LeaderboardModel from "../models/Leaderboard.js";
const router = Router();
router.get("/", async (req, res) => {
    const leaderboard = await LeaderboardModel.find().populate("user").sort({ rank: 1 });
    res.json({ leaderboard, message: "Leaderboard standings" });
});
export default router;
//# sourceMappingURL=leaderboard.js.map