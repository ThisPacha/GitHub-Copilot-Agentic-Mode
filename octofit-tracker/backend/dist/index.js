import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDatabase from "./config/database.js";
dotenv.config();
const app = express();
const PORT = Number(process.env.PORT ?? 8000);
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.json({ message: "OctoFit Tracker backend is running." });
});
app.listen(PORT, async () => {
    console.log(`Backend listening on http://localhost:${PORT}`);
    await connectDatabase();
});
//# sourceMappingURL=index.js.map