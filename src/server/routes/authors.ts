import { Router } from "express";
import db from "../db";

let router = Router();

router.post("/", async (req, res) => {
  try{

    let author = req.body
    let newAuthor = await db.Authors.insert(author.name, author.email);
    res.send(newAuthor);
  }catch(err){
    console.error(err)
  }
});

export default router;
