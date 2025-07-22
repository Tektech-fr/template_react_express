import bcrypt from "bcrypt";

interface User {
  id: string;
  username: string;
  passwordHash: string;
}
const salt = bcrypt.genSaltSync(10);

export const users: User[] = [
  {
    id: "1",
    username: "admin",
    passwordHash: bcrypt.hashSync("password123", salt),
  },
];
