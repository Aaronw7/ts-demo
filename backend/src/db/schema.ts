import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const applicants = pgTable('applicants', {
  id: serial('id').primaryKey(),
  fullName: text('full_name'),
  email: text('email'),
  phone: varchar('phone', { length: 256 }),
  hobby: text('hobby'),
});