import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "5z5hul5b",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
}); 