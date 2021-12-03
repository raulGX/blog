import express from "express";

export function makeServer(port: number = 3000) {
  const app = express();

  app.set("port", process.env.PORT);
  app.get("/", (_, res) => {
    res.json({ ok: true });
  });

  return app;
}
