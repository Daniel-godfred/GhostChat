import { User } from "../user/User";

export type Interest = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  users?: Array<User>;
};
