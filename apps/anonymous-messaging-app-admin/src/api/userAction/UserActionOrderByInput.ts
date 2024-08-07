import { SortOrder } from "../../util/SortOrder";

export type UserActionOrderByInput = {
  action?: SortOrder;
  actionTimestamp?: SortOrder;
  actionType?: SortOrder;
  actor?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  target?: SortOrder;
  targetUser?: SortOrder;
  targetUserId?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
