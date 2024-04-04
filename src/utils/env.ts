import { z } from "zod";

const varSchema = z.string().min(1);

const envSchema = z.object({
  FIREBASE_PROJECT_ID: varSchema,
  FIREBASE_PRIVATE_KEY: varSchema,
  FIREBASE_CLIENT_EMAIL: varSchema,
});

export const zEnv = envSchema.parse(process.env);
