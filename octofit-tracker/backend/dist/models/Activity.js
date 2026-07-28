import mongoose from "mongoose";
const activitySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    description: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    caloriesBurned: { type: Number, required: true },
    date: { type: Date, required: true }
}, { timestamps: true });
const ActivityModel = mongoose.models.Activity || mongoose.model("Activity", activitySchema);
export default ActivityModel;
//# sourceMappingURL=Activity.js.map