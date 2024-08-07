import { User } from "../user/User";

export type UserAction = {
  action?: "Option1" | null;
  actionTimestamp: Date | null;
  actionType?: "Option1" | null;
  actor: string | null;
  createdAt: Date;
  id: string;
  target: string | null;
  targetUser: string | null;
  targetUserId: string | null;
  timestamp: Date | null;
  updatedAt: Date;
  user?: User | null;
};
