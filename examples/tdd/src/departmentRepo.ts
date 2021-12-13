import DB, { Database } from "better-sqlite3";

export interface Department {
  name: string;
}

export interface DepartmentRepo {
  list(): Department[];
  add(dep: Department): [dep: Department, err: Error | null];
}

export const duplicateDepartmentError = new Error("Department already exists");

export function makeDepartmentRepo(db: Database): DepartmentRepo {
  const listStatement = db.prepare(`SELECT * FROM department`);
  const getStatement = db.prepare(`SELECT * FROM department WHERE name = ?`);
  const insertStatement = db.prepare(
    `INSERT INTO department (name) VALUES (?)`
  );
  return {
    add(department: Department) {
      let existingDepartment: Department | undefined = getStatement.get(
        department.name
      );
      if (existingDepartment) {
        return [null, duplicateDepartmentError];
      }
      insertStatement.run(department.name);
      return [department, null];
    },
    list() {
      return listStatement.all();
    },
  };
}

export function makeDbConnection(fileName: string): Database {
  return new DB(fileName, { fileMustExist: false, timeout: 2000 });
}

export function runMigrations(db: Database): void {
  db.pragma("journal_mode = WAL");
  db.exec(`CREATE TABLE IF NOT EXISTS department (name text);`);
}
