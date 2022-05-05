import express from "express";
const app = express();

app.use(express.json());

const users = [];

app.get("/users", (request, response) => {});

app.post("/users", (request, response) => {});

app.put("/users/:id", (request, response) => {});

app.delete("/users", (request, response) => {});

app.listen("3333", () => {
  console.log("Back-end Started!");
});
