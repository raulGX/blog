import express from "express";
import bodyParser from "body-parser";
import {
  Department,
  DepartmentRepo,
  duplicateDepartmentError,
} from "./departmentRepo";

export function makeServer(
  port: number = 3000,
  departmentRepo: DepartmentRepo
) {
  const app = express();

  app.set("port", port);
  app.use(bodyParser.json());

  app.get("/departments", (_, res) => {
    res.json(departmentRepo.list());
  });

  app.post("/departments", async (req, res) => {
    const department: Department = req.body;
    // do some validation
    const [dep, err] = departmentRepo.add(department);

    if (err != null) {
      if (err === duplicateDepartmentError) {
        res.status(400).send({ error: duplicateDepartmentError.message });
      } else {
        res.status(500);
      }
      return;
    }

    res.send(dep);
  });

  return app;
}
