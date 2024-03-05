import express from "express";
import { pool } from "./db/pool";
import { getUsers } from "./db/users";
import { register } from "./handlers/register";
import { searchByUsername } from "./handlers/search";
import http from "http";
import cors from "cors";

const port = 5000;

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const users = await getUsers();
    res.send(users.rows);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post("/register", register);
app.post("/search", searchByUsername);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on Port ${port}`);
  console.log(
    `BomboBomboLaBombo rassPussy Bloodclat: ${process.env.bombo || ""}`
  );
});
