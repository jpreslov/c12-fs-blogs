import { Query } from "../index";

const insert = (name: string, email: string) =>
  Query(
    `
INSERT INTO Authors(name, email) VALUES(?, ?)`,
    [name, email]
  );

export default {
  insert,
};
