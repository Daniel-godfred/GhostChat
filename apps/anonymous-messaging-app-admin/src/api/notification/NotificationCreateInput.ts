import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationCreateInput = {
  content?: string | null;
  typeField?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
