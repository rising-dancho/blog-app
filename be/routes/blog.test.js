import request from "supertest";
import app from "../index.js";

describe("GET /api/v1/blogs/", () => {
  test("It should respond with 200 and json", async () => {
    await request(app)
      .get("/api/v1/blogs/")
      .expect(200)
      .expect("Content-Type", /json/);
  });
});

describe("GET /api/v1/blogs/:blogId", () => {
  test("It should respond with 200 and json", async () => {
    await request(app)
      .get("/api/v1/blogs/66579c45dd2bd97475423e18")
      .expect(200)
      .expect("Content-Type", /json/);
  });

  test("It should respond with 404 and 'Blog not found.'", async () => {
    const response = await request(app)
      .get("/api/v1/blogs/66579c45dd2bd97475423e1a")
      .expect(404)
      .expect("Content-Type", /json/);

    expect(response.body.message).toBe("Blog not found.");
  });
});
