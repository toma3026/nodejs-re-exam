import fs from "fs";
import { databasePath, openDatabase } from "./openDatabase.js";

// delete the entire database file if it already exists.
if (fs.existsSync(databasePath)) {
    fs.unlinkSync(databasePath);
}

const db = await openDatabase();

await db.exec(
    `
        CREATE TABLE messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            message TEXT
        );
    `
);

await db.run(
    `
        INSERT INTO messages (message)
        VALUES
            ('Message from database.')
        ;
    `
);

await db.close();
