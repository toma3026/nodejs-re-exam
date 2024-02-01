import { openDatabase } from "./database/openDatabase.js";
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors({
    credentials: true,
    origin: true
}));

app.get("/api/message", (req, res) => {
    const message = "Message from server.";
    res.send({ data: message});
});

const db = await openDatabase();
const row = await db.get(
    `
        SELECT * FROM messages
    `
);
await db.close();

app.get("/api/database/message", (req, res) => {
    res.send({ data: row.message});
});

const PORT = 8080;
app.listen(PORT);
