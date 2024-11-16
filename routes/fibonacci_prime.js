/*
 * Cormac Taylor
 * I pledge my honor that I have abided by the Stevens Honor System.
 */
import { Router } from "express";
import path from "path";

const router = Router();

router.get("/", (_, res) => {
  res.sendFile(path.resolve("static/homepage.html"));
});

export default router;
