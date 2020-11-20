import { Router } from "express";
import db from "../db";

let router = Router();

router.get("/:id?", async (req, res) => {
  const id = Number(req.params.id);
  if (id) {
    let [ blog ] = await db.Blogs.one(id);
    let [ blogTags ] = await db.BlogTags.one(id)
    blog.tags = blogTags
    res.json(blog);
  } else {
    try {
      let blogs = await db.Blogs.all();
      res.json(blogs);
    } catch (err) {
      console.error(err);
    }
  }
});

router.post("/", async (req, res) => {
  const blog = req.body;
  try {
    // let newAuthor = await db.Authors.insert(name, email)
    await db.Blogs.insert(blog.authorid, blog.title, blog.content);
     res.send(`Nice`)
    
  } catch (err) {
    console.error(err);
  }
});

router.put('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const blog = req.body

  try {
    await db.Blogs.update(blog.title, blog.content, id)
    await db.BlogTags.add(id, blog.tagId)
  } catch(err) {
    console.error(err)
  }
})

router.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    db.BlogTags.destroyTag(id);
    db.Blogs.destroyBlog(id);
  } catch (err) {
    console.error(err);
  }
});

export default router;
