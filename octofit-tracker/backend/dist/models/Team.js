import mongoose from "mongoose";
const teamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
}, { timestamps: true });
const TeamModel = mongoose.models.Team || mongoose.model("Team", teamSchema);
export default TeamModel;
//# sourceMappingURL=Team.js.map