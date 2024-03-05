import { createUser } from "../db/users";
import express from "express";

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { username, address, password } = req.body;

    if (!username || !address || !password) {
      res.status(400).send("Invalid Registration");
    }

    const newUser = await createUser({ username, address, password });
    res.status(200).send(`User created: ${username}`);
  } catch (err) {
    res.status(400).send("Caught err");
  }
};
