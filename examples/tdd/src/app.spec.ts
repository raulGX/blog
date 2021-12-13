import { Express } from "express";
import request from "supertest";

import { makeServer } from "./app";
import {
  makeDbConnection,
  makeDepartmentRepo,
  runMigrations,
} from "./departmentRepo";

describe("/departments", () => {
  let app: Express;

  beforeEach(() => {
    // empty string makes a temp db
    let dbConnection = makeDbConnection("");
    runMigrations(dbConnection);
    app = makeServer(0, makeDepartmentRepo(dbConnection));
    app.on("close", () => {
      dbConnection.close();
    });
  });

  it("creates departments and checks if they exist", async (done) => {
    const departments = [{ name: "marketing" }, { name: "financial" }];

    for (const department of departments) {
      await request(app).post("/departments").send(department).expect(200);
    }

    await request(app).get("/departments").expect(200, departments);
    done();
  });

  it("creates 2 departments with the same name and expects an error", async (done) => {
    const department = { name: "technology" };

    await request(app).post("/departments").send(department).expect(200);
    await request(app).post("/departments").send(department).expect(400);

    await request(app).get("/departments").expect(200, [department]);
    done();
  });
});
