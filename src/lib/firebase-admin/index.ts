import { zEnv } from "@/utils/env";
import { cert, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

initializeApp({
  credential: cert({
    projectId: zEnv.FIREBASE_PROJECT_ID,
    privateKey: zEnv.FIREBASE_PRIVATE_KEY,
    clientEmail: zEnv.FIREBASE_CLIENT_EMAIL,
  }),
});

export const db = getFirestore();
