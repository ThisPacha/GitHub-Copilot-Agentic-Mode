import mongoose from "mongoose";

const leaderboardSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    totalPoints: { type: Number, required: true },
    rank: { type: Number, required: true }
  },
  { timestamps: true }
);

const LeaderboardModel = mongoose.models.Leaderboard || mongoose.model("Leaderboard", leaderboardSchema);
export default LeaderboardModel;
