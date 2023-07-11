import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { applicants } from './db/schema';
import dotenv from 'dotenv';
import routes from './routes';
import { eq } from 'drizzle-orm';

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
app.use('/', routes);

// SERVER AND DATABASE

const server = http.createServer(app);

server.listen(8080, () => {
  console.log('Server running on http://localhost:8080/')
})

const connectionString = process.env.DATABASE_URL;
const client = postgres(connectionString);
const db = drizzle(client);

export async function getApplicantInfo(): Promise<any[]> {
  const allInfo = await db.select().from(applicants);
  return allInfo;
}

export async function createApplicantInfo(fullName: string, email: string, phone: string, hobby: string, image: string) {
  const applicantInfo = {
    fullName,
    email,
    phone,
    hobby,
    image,
  }
  const insertUserInfo = await db.insert(applicants).values(applicantInfo);
  return insertUserInfo
}

export async function deleteApplicantInfo(id: number) {
  await db.delete(applicants).where(eq(applicants.id, id))
}