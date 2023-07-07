import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { users } from './db/schema';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors({
  credentials: true,
}))
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Typescript Backend')
})

const server = http.createServer(app);

server.listen(8080, () => {
  console.log('Server running on http://localhost:8080/')
})

const connectionString = process.env.DATABASE_URL
const client = postgres(connectionString)
const db = drizzle(client);

async function getUserInfo() {
  const allInfo = await db.select().from(users);
  console.log('here is the info: ', allInfo);
}

getUserInfo();