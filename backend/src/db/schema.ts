import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const applicants = pgTable('applicants', {
  id: serial('id').primaryKey(),
  fullName: text('full_name'),
  email: text('email'),
  phone: text('phone'),
  hobby: text('hobby'),
  image: varchar('image', { length: 256 }),
});