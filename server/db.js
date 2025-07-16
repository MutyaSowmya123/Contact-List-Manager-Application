import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const dbPromise = open({
  filename: './contacts.db',
  driver: sqlite3.Database
});

const initDB = async () => {
  const db = await dbPromise;
  await db.exec(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      title TEXT NOT NULL,
      address TEXT NOT NULL
    )
  `);
  await db.exec(`ALTER TABLE contacts ADD COLUMN title TEXT;`);
  await db.exec(`ALTER TABLE contacts ADD COLUMN address TEXT;`);
};


export { dbPromise, initDB };
