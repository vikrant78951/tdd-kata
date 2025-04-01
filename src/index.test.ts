import request from "supertest";
import { app } from "./index";

describe("Testing Application", () => {
  test("should return 200 and the sum when given valid input", async () => {
    const response = await request(app)
      .post("/calculate")
      .send({ calculate: "1,2,3" });
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.result).toBe(6);
  });
  test("should return Input is required for empty string", async () => {
    const response = await request(app)
      .post("/calculate")
      .send({ calculate: "" });
    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.error).toBe("Input is required.");
  });
  test("should return an error for invalid input", async () => {
    const response = await request(app)
      .post("/calculate")
      .send({ calculate: "a,b,c" });

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
  });
  test("should return an invalid input alphabet character", async () => {
    const response = await request(app)
      .post("/calculate")
      .send({ calculate: "1,2,c" });

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.error).toBe("Invalid input: c");
  });
});
