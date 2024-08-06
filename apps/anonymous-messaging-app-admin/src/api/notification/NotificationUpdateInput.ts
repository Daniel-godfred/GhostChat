import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationUpdateInput = {
  content?: string | null;
  typeField?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
