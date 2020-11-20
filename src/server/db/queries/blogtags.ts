import { Query } from "../index";

const one = (id: number) =>
  Query(
    `
select tags.name from BlogTags
join Tags
on BlogTags.blogid = Tags.id
WHERE BlogTags.blogid = ?`,
    [id]
  );

const add = (id: number, tagId: number) =>
  Query(`INSERT INTO BlogTags(blogid, tagid) VALUES(? , ?)`, [id, tagId]);

const destroyTag = (id: number) =>
  Query(`DELETE FROM BlogTags WHERE blogid = ?`, [id]);

const getAllWithTag = (name: string) =>
  Query(
    `
    SELECT 
      Tags.*, BlogTags.blogid 
    FROM Tags
    JOIN BlogTags on BlogTags.tagid 
    WHERE Tags.name = ?
    `,
    [name]
  );

export default {
  one,
  add,
  destroyTag,
  getAllWithTag,
};
