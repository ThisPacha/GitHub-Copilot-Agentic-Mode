import mongoose from "mongoose";
const workoutSchema = new mongoose.Schema({
    title: { type: String, required: true },
    difficulty: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    focusAreas: [{ type: String, required: true }]
}, { timestamps: true });
const WorkoutModel = mongoose.models.Workout || mongoose.model("Workout", workoutSchema);
export default WorkoutModel;
//# sourceMappingURL=Workout.js.map