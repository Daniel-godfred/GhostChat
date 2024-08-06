import { User } from "../user/User";

export type Notification = {
  content: string | null;
  createdAt: Date;
  id: string;
  typeField?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
