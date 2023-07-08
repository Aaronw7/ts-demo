import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { users } from './db/schema';
import dotenv from 'dotenv';
import routes from './routes';

// CONFIG
dotenv.config();
const app = express();
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors({
  credentials: true,
}));

// ROUTES
app.use('/awesome', routes);

app.get('/', (req, res) => {
  res.send('Typescript Backend')
})

const server = http.createServer(app);

server.listen(8080, () => {
  console.log('Server running on http://localhost:8080/')
})

const connectionString = process.env.DATABASE_URL;
console.log(connectionString);
const client = postgres(connectionString);
const db = drizzle(client);

export async function getUserInfo() {
  const allInfo = await db.select().from(users);
   return allInfo;
}

async function createUserInfo() {
  const userInfo = {
    fullName: 'tester2',
    phone: '1234567890'
  }
  const insertUserInfo = await db.insert(users).values(userInfo);
}