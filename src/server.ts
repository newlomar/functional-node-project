import express from "express";
const app = express();

app.use(express.json());

interface User {
  id: string;
  name: string;
  email: string;
}

const users: USer[] = [];

app.get("/users", (request, response) => {
  return response.json(users);
});

app.post("/users", (request, response) => {});

app.put("/users/:id", (request, response) => {});

app.delete("/users", (request, response) => {});

app.listen("3333", () => {
  console.log("Back-end Started!");
});
