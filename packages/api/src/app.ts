import express from "express";
import { userService } from "./services/user";

const runningEnvironment = (process.env.RUNNING_ENV as string) || "development";

const { getAllUsers } = userService[runningEnvironment];

export const app = express();

app.get("/", (req, res) => {
  res.json({ message: "It Works!" });
});

app.get("/users", (req, res) => {
  const users = getAllUsers();
  res.json({ users });
});
