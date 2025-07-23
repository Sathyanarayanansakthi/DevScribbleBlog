import { Client, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1") // ✅ Or your custom Appwrite URL
  .setProject("687f95c90029c5f4acf0"); // 🔁 Replace with your Appwrite project ID

export const account = new Account(client);
