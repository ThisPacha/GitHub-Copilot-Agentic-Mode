import mongoose from "mongoose";
import dotenv from "dotenv";
import UserModel from "../models/User.js";
import TeamModel from "../models/Team.js";
import ActivityModel from "../models/Activity.js";
import WorkoutModel from "../models/Workout.js";
import LeaderboardModel from "../models/Leaderboard.js";
dotenv.config();
// Seed the octofit_db database with test data.
async function seed() {
    const uri = process.env.MONGODB_URI ?? "mongodb://127.0.0.1:27017/octofit_db";
    await mongoose.connect(uri);
    console.log("Connected to MongoDB for seeding:", uri);
    await Promise.all([
        UserModel.deleteMany({}),
        TeamModel.deleteMany({}),
        ActivityModel.deleteMany({}),
        WorkoutModel.deleteMany({}),
        LeaderboardModel.deleteMany({})
    ]);
    const users = await UserModel.create([
        { name: "Ariana Vale", email: "ariana@example.com", role: "coach" },
        { name: "Jules Mercer", email: "jules@example.com", role: "member" },
        { name: "Noah Kim", email: "noah@example.com", role: "member" }
    ]);
    const teams = await TeamModel.create([
        {
            name: "Peak Performers",
            description: "A team focused on high-intensity training and endurance.",
            members: [users[0]._id, users[1]._id]
        },
        {
            name: "Cardio Crew",
            description: "Team dedicated to weekly running and cycling challenges.",
            members: [users[2]._id]
        }
    ]);
    await UserModel.updateMany({ _id: { $in: [users[0]._id, users[1]._id] } }, { team: teams[0]._id });
    await UserModel.updateOne({ _id: users[2]._id }, { team: teams[1]._id });
    const activities = await ActivityModel.create([
        {
            user: users[1]._id,
            description: "Trail run",
            durationMinutes: 52,
            caloriesBurned: 640,
            date: new Date("2026-07-25T08:00:00Z")
        },
        {
            user: users[2]._id,
            description: "Spin class",
            durationMinutes: 45,
            caloriesBurned: 520,
            date: new Date("2026-07-26T17:30:00Z")
        }
    ]);
    const workouts = await WorkoutModel.create([
        {
            title: "Strength Builder",
            difficulty: "Intermediate",
            durationMinutes: 40,
            focusAreas: ["upper body", "core"]
        },
        {
            title: "Quick HIIT",
            difficulty: "Advanced",
            durationMinutes: 20,
            focusAreas: ["full body", "cardio"]
        }
    ]);
    const leaderboard = await LeaderboardModel.create([
        { user: users[0]._id, totalPoints: 980, rank: 1 },
        { user: users[1]._id, totalPoints: 860, rank: 2 },
        { user: users[2]._id, totalPoints: 740, rank: 3 }
    ]);
    console.log("Seed data inserted:", {
        users: users.length,
        teams: teams.length,
        activities: activities.length,
        workouts: workouts.length,
        leaderboard: leaderboard.length
    });
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB after seeding.");
}
seed().catch((error) => {
    console.error("Seed script failed:", error);
    process.exit(1);
});
//# sourceMappingURL=seed.js.map