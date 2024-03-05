import express from "express";
import { getUserByUsername } from "../db/users";

export const searchByUsername = async (
  req: express.Request,
  res: express.Response
) => {
  const [user, err] = await getUserByUsername(req.body.username);
  if (!user) {
    res.status(400).send("User Not Found");
  } else if (err) {
    res.status(400).send("Error");
  } else {
    res.status(200).send(user.rows[0]);
  }
};
