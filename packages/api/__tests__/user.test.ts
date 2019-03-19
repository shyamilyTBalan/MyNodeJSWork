import request from "supertest";
import { app } from "../src/app";

describe("Sample", () => {
  it("should run", async () => {
    const { body } = await request(app).get("/users");
    const users = body.users as string[];
    expect(users.length).toBe(1);
    expect(users.includes("test")).toBe(true);
  });
});
