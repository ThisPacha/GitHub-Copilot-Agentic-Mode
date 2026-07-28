import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, default: "member" },
    team: { type: mongoose.Schema.Types.ObjectId, ref: "Team" }
}, { timestamps: true });
const UserModel = mongoose.models.User || mongoose.model("User", userSchema);
export default UserModel;
//# sourceMappingURL=User.js.map