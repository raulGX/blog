---
title: "How do I test my code?"
coverImage: ""
excerpt: "Writing tests can be a difficult process. From my experience, the interaction between developers and tests is not what could and should be. Some people view tests as a chore, something to do after you finished your implementation. This is a wrong behaviour as it can cause tests to be left out."
date: "2020-11-25T18:35:07.322Z"
tags: ["tests", "javascript", "web"]
author: raul
---

# How do I test my code?

Writing tests can be a difficult process. From my experience, the interaction between developers and tests is not what could and should be. Some people view tests as a chore, something to do after you finished your implementation. This behavior can cause tests to be left out. Coding new features can often be a long and painful process. You might not have the willpower left to write tests. You are frustrated. That javascript library you just added to the project is not working as you expected. Who is going to write more code to prove the last 2 hours you spent have produced perfect and bug-free features? You'll play around with postman or use the part of the application you just modified and grab a cookie for a job well done.

Tests are best written while you develop your features. This can have amazing benefits! Write a test, make your code pass it, write another one, and so on. I think one of the most undervalued skills as a developer is to work in small and incremental steps. The test-first approach forces you to think this way. You should try to have your code functional as often as you can. Having to test your code will make you refactor it to be more usable. Sometimes the feature you are developing is very difficult to reach or you have to do a lot of manual steps to prepare the system to see if what you are doing works. Tests don't have this problem, once you wrote the setup for the test, it's there to be used for every test you write.

Depending on how many parts you are testing, tests have different names. I think it does not matter all that much how you call it. You should always try to write your tests in a way you get the most amount of value from the least time invested. You shouldn't try to cover all the cases that exist, just try to have the happy case covered.

Sometimes you find bugs in your code while you develop. Try to reproduce that bug in a test, fix it and see the test pass. I can feel the dopamine kick that this way of working would produce, just by writing about it. Having that red test turn green is a beautiful feeling. This can motivate you to keep going if you aren't particularly feeling pumped about coding that day.

There is this cool thing you can do just before taking a break or going home (A little side note here, writing going home during the pandemic, where most of us are working from home feels a little off, anyway going on...). Write a new test, see it fail, and lock your computer. This sounds kinda evil, but it works great. You will get on with your day, but you'll have that tingly sensation in your brain that tells you that something is not finished. I guarantee you the following morning, you will rush for your coffee and get back to the keyboard to fix that damn test! A note here, if you have trouble turning off work in your free time, this will do more bad than good, so to each his own.

Let's see an example.

## TDD example

You are working on an employee time tracking app. You are a subject for burnout working on such a thing, but you take pride in your work. You are going to develop it using TDD. First of all, let's see what is asked of you.

> We need to create departments. A department can be on the top level or can be part of another department. We need to search for departments based on hierarchies. Ex: we have to see all the departments that are children or inside the hierarchy of the finance department.

We'll start with making an express server. There may be other better libraries that make working with http easier, but express is very easy to read.

```ts
import express from "express";

export function makeServer(port: number = 3000) {
  const app = express();

  app.set("port", port);
  app.get("/", (_, res) => {
    res.json({ ok: true });
  });

  return app;
}
```

It looks like a basic example (sans hello world). Let's see the test.

```ts
import request from "supertest";
import { makeServer } from "./app";

describe("GET /", () => {
  it("should return 200 OK", async (done) => {
    const app = makeServer(0); // assign a free port

    let res = await request(app).get("/");
    expect(res.body).toEqual({ ok: true });

    done();
  });
});
```

Make sure the test library you are using has a watch feature. Also make sure it has a cool-looking console view with instant feedback, red/green colors, etc. We wanna make sure we feed our dopamine receptors with all the juice we can.

### Starting the rest api

We need a `create` and `list` endpoint. They should look like this:

- GET `/departments` - returns a list of departments
- POST `/departments` - creates a department

First, the test:

```ts
it("creates departments and checks if they exist", async (done) => {
  const app = makeServer(0);

  const departments = [{ name: "marketing" }, { name: "financial" }];

  for (const department of departments) {
    await request(app).post("/departments").send(department).expect(200);
  }

  await request(app).get("/departments").expect(200, departments);
  done();
});
```

Now we have a failing test that we need to fix. To parse the JSON in the request body so we use the handy `body-parser` library. To fix the failing test, we conjure some obscure and naive solution.

```ts
interface Department {
  name: string;
}

app.use(bodyParser.json());

const departments: Department[] = [];

app.get("/departments", (_, res) => {
  res.json(departments);
});

app.post("/departments", async (req, res) => {
  const department: Department = req.body;
  // do some validation
  departments.push(department);
  res.send();
});
```

At some point, we'll use a database for persisting the data, but we don't want to do that for now. Setting up the database is a boring task, we wanna continue with the red-green stuff.
Let's wrap the adding and listing inside an injectable object that can be replaced later.

```ts
interface DepartmentRepo {
  list(): Department[];
  add(dep: Department): unknown;
}

export function makeDepartmentRepo(): DepartmentRepo {
  const departmets: Department[] = [];
  return {
    add(department: Department) {
      departmets.push(department);
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
    departmentRepo.add(department);
    res.send();
  });

  return app;
}
```

To fix the test: `const app = makeServer(0, makeDepartmentRepo());`. You should always test that your code returns errors. We'll do that next. The add method of our repository has the following signature `add(dep: Department): unknown;`. There shouldn't be 2 departments with the same name, let's write a test to make sure!

```ts
it("creates 2 departments with the same name and expects an error", async (done) => {
  const app = makeServer(0, makeDepartmentRepo());
  const department = { name: "technology" };

  await request(app).post("/departments").send(department).expect(200);
  await request(app).post("/departments").send(department).expect(400);

  // also make sure we don't actually save the department, despite the error.
  await request(app).get("/departments").expect(200, [department]);
  done();
});
```

I don't particularily enjoy exceptions as a way of treating errors, so let's see a different approach.

```ts
interface DepartmentRepo {
  list(): Department[];
  add(dep: Department): [dep: Department, err: Error | null];
}
```

This way of error treatment is inspired from golang. I'm 100% sure if you are not familiar with go, you will not like how this looks, but bear with me.

```ts
export const duplicateDepartmentError = new Error("Department already exists");

// the repo method
add(department: Department) {
  if (departmets.some((d) => d.name === department.name)) {
    return [null, duplicateDepartmentError];
  }
  departmets.push(department);
  return [department, null];
}
// ...
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
```

## Adding data persistence

We played around enough, let's save the data. For that, we'll use SQLite. Most of the applications we build these days don't require complex database systems like PostgreSQL and such. SQLite has its downsides, but the ease of use and deployment is worth it. I encourage you to give it a try.

We'll not use an ORM. Those things are traps, maybe I'll go into detail about why I don't like ORMs in a later post. We'll just use a simple driver instead. `better-sqlite3` has a synchronous API. Yes, hearing that while writing javascript should make you uneasy. They promise `better concurrency than an asynchronous API... yes, you read that correctly`. That should be enough for our experiment. Concurrency will be a problem if we have a lot of users that use our app at the same time. At that point, we should just ditch SQLite and embrace PostgreSQL or your other favorite flavor.

To interact with the database we have to develop a new implementation for the interface `DepartmentRepo`. At this point, all of our tests will fail, but once we are done with our implementation they should pass again. To add and retrieve data from SQLite we need a table. Those should be created by migrations. There are multiple ways of running migrations, but let's not worry about the best way for now. We'll just run them when we start the test server.

The repo will end up looking like this.

```ts
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
```

We'll add a test hook to build the environment:

```ts
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
```

We prepare the statements before actually using them. We do this for a couple of reasons:

- if the statement is incorrect, the server will fail to start. Because we don't use an ORM, we might have typos in our SQL code.
- we might generate the SQL in the future. There is no need to manually type the SQL when we can use the machines to do the work for us.

Also, let's do some code review on the add method.

```ts
let existingDepartment: Department | undefined = getStatement.get(
  department.name
);
if (existingDepartment) {
  return [null, duplicateDepartmentError];
}
insertStatement.run(department.name);
return [department, null];
```

If you would use a database other than SQLite (and the sync driver) the method would be error-prone. If 2 requests with the same `primary key` are made at the same time, we would end up with 2 departments with the same name (there is no constraint on the table). Take a second to appreciate we don't have to burden of concurrency.

I hope you enjoyed the walkthrough. In another post, we will describe what situations SQL is not the right tool and we'll embrace NoSql.
