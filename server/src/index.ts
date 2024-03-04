import express, { urlencoded } from "express";
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
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello bro");
});

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server running on Port ${port}`);
  console.log(`BomboBomboLaBombo rassPussy clat: ${process.env.bombo || ""}`);
});
