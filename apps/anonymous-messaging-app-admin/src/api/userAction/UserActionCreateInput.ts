import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserActionCreateInput = {
  action?: "Option1" | null;
  actionTimestamp?: Date | null;
  actionType?: "Option1" | null;
  actor?: string | null;
  target?: string | null;
  targetUser?: string | null;
  targetUserId?: string | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
