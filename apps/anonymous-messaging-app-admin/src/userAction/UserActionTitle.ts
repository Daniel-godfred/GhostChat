import { UserAction as TUserAction } from "../api/userAction/UserAction";

export const USERACTION_TITLE_FIELD = "actor";

export const UserActionTitle = (record: TUserAction): string => {
  return record.actor?.toString() || String(record.id);
};
