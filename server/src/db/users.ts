import { User, RegisterBody } from "types";
import { pool } from "./pool";
import { QueryResult } from "pg";

export const getUsers = async () => {
  const users = await pool.query("SELECT * FROM users");
  return users;
};

export const getUserByUsername = async (username: String) => {
  try {
    const user: QueryResult<User> = await pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );
    if (user.rowCount) {
      return [user, null];
    } else {
      return [null, null];
    }
  } catch (err) {
    return [null, err];
  }
};

export const createUser = async (user: RegisterBody) => {
  const res = await pool.query(
    "INSERT INTO users (username, address, password) VALUES ($1, $2, $3)",
    [user.username, user.address, user.password]
  );
};
