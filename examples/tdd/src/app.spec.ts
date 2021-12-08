import request from "supertest";
import { makeDepartmentRepo, makeServer } from "./app";

describe("/departments", () => {
  it("creates departments and checks if they exist", async (done) => {
    const app = makeServer(0, makeDepartmentRepo());

    const departments = [{ name: "marketing" }, { name: "financial" }];

    for (const department of departments) {
      await request(app).post("/departments").send(department).expect(200);
    }

    await request(app).get("/departments").expect(200, departments);
    done();
  });

  it("creates 2 departments with the same name and expects an error", async (done) => {
    const app = makeServer(0, makeDepartmentRepo());
    const department = { name: "technology" };

    await request(app).post("/departments").send(department).expect(200);
    await request(app).post("/departments").send(department).expect(400);

    await request(app).get("/departments").expect(200, [department]);
    done();
  });
});
