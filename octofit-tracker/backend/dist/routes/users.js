import { Router } from "express";
import UserModel from "../models/User.js";
const router = Router();
router.get("/", async (req, res) => {
    const users = await UserModel.find().populate("team");
    res.json({ users, message: "List users" });
});
router.post("/", async (req, res) => {
    const user = await UserModel.create(req.body);
    res.status(201).json({ user, message: "Create user" });
});
export default router;
//# sourceMappingURL=users.js.map