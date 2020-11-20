import { Query } from "../index";
// import type { TChirps, TUsers } from "../models/types";

const all = () =>
  Query(`
    SELECT
        Blogs.*,
        Authors.name
    FROM Blogs
    JOIN Authors ON Authors.id = Blogs.authorid
`);

const one = (id: number) =>
  Query(
    `
    SELECT
        Blogs.*,
        Authors.name
    FROM Blogs
    JOIN Authors ON Authors.id = Blogs.authorid
    WHERE Blogs.id = ?
`,
    [id]
  );

const insert = (authorid: number, title: string, content: string) =>
  Query<{ insertId: number }>(
    `INSERT INTO Blogs (authorid, title, content) VALUES (?, ?, ?)`,
    [authorid, title, content]
  );

const update = (title: string, content: string, id: number) =>
  Query(
    `
    UPDATE Blogs 
      SET title = ?, 
      content = ? 
    WHERE id = ?
  `,
    [title, content, id]
  );

const destroyBlog = (id: number) =>
  Query(`DELETE FROM Blogs WHERE id = ?`, [id]);

export default {
  all,
  one,
  insert,
  update,
  destroyBlog,
};
