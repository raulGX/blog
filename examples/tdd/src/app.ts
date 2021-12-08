import express from "express";
import bodyParser from "body-parser";

interface Department {
  name: string;
}

interface DepartmentRepo {
  list(): Department[];
  add(dep: Department): [dep: Department, err: Error | null];
}

export const duplicateDepartmentError = new Error("Deparment already exists");

export function makeDepartmentRepo(): DepartmentRepo {
  const departmets: Department[] = [];
  return {
    add(department: Department) {
      if (departmets.some((d) => d.name === department.name)) {
        return [null, duplicateDepartmentError];
      }
      departmets.push(department);
      return [department, null];
    },
    list() {
      return departmets;
    },
  };
}

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
