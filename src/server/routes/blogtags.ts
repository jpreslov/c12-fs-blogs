import { Router } from "express";
import db from "../db";

let router = Router();

router.get("/:name", async (req, res) => {
  const name = req.params.name;

  try {
    let arr: any = [];
    let bt = await db.BlogTags.getAllWithTag(name);
    await bt.map((x: any) => arr.push(x.blogid));
    res.send(arr);
  } catch (err) {
    console.error(err);
  }
});

export default router;
