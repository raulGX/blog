---
title: "How do I test my code?"
coverImage: ""
excerpt: "Writing tests can be a difficult process. From my experience, the interaction between developers and tests is not what could and should be. Some people view tests as a chore, something to do after you finished your implementation. This is a wrong behaviour as it can cause tests to be left out."
date: "2020-11-25T18:35:07.322Z"
tags: ["tests", "javascript", "web"]
author: raul
---

# How do I test my code?

Writing tests can be a difficult process. From my experience, the interaction between developers and tests is not what could and should be. Some people view tests as a chore, something to do after you finished your implementation. This is a wrong behaviour as it can cause tests to be left out. Coding new features can often be a long and painfull process. You might not have willpower left to write tests. You are frustrated because that javascript library you just added to the project is not working as you expected to. Who is going to write more code to prove the last 2 hours you spent have produced perfect and bug free features? You'll just play around with postman or just use the part of the application you just modified and grab a cookie for a job well done.

Tests are best written while you develop your features. This can have amazing benefits! Write a test, make your code pass it, write another one and so on. I think one of the most undervalued skills as a developer is to work in small and incremental steps. You should try to have your code functional as often as you can. Having to test your code will make you refactor it in order to be more usable. Sometimes the feature you are developing is very difficult to reach or you have to do a lot of manual steps to prepare the system in order to see if what you are doing actually works. Tests don't have this problem, once you wrote the setup for the test, it's there to be used for every test you write.

Depending on how many parts you are testing, tests have different names. I think it does not matter all that much how you call it. You should always try to write your tests in a way you get the most amount of value from the least time invested. You shouldn't try to cover all the cases that exist, just try to have the happy case covered. Sometimes you find bugs in your code while you develop. Try to reproduce that bug in a test, fix it and see the test pass. I can feel the dopamine kick that this way of working would produce, just by writing about it. Having that red test turn green is a beautiful feeling. This can motivate you to keep going, if you aren't paritculary feeling pumped about coding that day. There is this cool thing you can do just before taking a break or going home (A little side note here, writing going home during the pandemic, where most of us are working from home feels a little off, anyway going on...). Write a new test, see it fail and lock your computer. This sounds kinda evil, but it works great. You will get on with your day, but you'll have that tingly sensation in your brain that tells you that something is not finished. I guarantee you the following morning, you will rush for your coffee and get back to the keyboard to fix that damn test! A note here, if you have trouble turning off work in your free time, this will do more bad than good, so to each his own.

Let's see an example.

## TDD example

You are working on a employee time tracking app. You are a subject for burnout working on such a thing, but you take pride in your work. You are going to develop it using TDD. First of all let's see what is asked of you.

> We need to create departments. A department can be on the top level or can be part of another department. We need to search for departments based on hierarchies. Ex: we have to see all the departments that are children or inside the hierarchy of the finance department.

We'll start with making an express server. There may be other better libraries that make working with http easier, but express is very easy to read.

```ts
import express from "express";

export function makeServer(port: number = 3000) {
  const app = express();

  app.set("port", process.env.PORT);
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
