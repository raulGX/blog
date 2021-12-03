import request from "supertest";
import { makeServer } from "./app";

describe("GET /", () => {
  it("should return 200 OK", async (done) => {
    const app = makeServer(0);

    let res = await request(app).get("/");
    expect(res.body).toEqual({ ok: true });

    done();
  });
});
