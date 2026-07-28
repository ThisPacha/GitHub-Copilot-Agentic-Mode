import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDatabase from "./config/database.js";
import { apiUrl } from "./config/api.js";
import usersRouter from "./routes/users.js";
import teamsRouter from "./routes/teams.js";
import activitiesRouter from "./routes/activities.js";
import leaderboardRouter from "./routes/leaderboard.js";
import workoutsRouter from "./routes/workouts.js";
dotenv.config();
const app = express();
const PORT = Number(process.env.PORT ?? 8000);
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.json({ message: "OctoFit Tracker backend is running.", apiUrl });
});
app.use("/api/users", usersRouter);
app.use("/api/teams", teamsRouter);
app.use("/api/activities", activitiesRouter);
app.use("/api/leaderboard", leaderboardRouter);
app.use("/api/workouts", workoutsRouter);
export async function startServer() {
    await connectDatabase();
    return app.listen(PORT, () => {
        console.log(`Backend listening on ${apiUrl}`);
    });
}
export default app;
//# sourceMappingURL=server.js.map