import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserActionWhereInput = {
  action?: "Option1";
  actionTimestamp?: DateTimeNullableFilter;
  actionType?: "Option1";
  actor?: StringNullableFilter;
  id?: StringFilter;
  target?: StringNullableFilter;
  targetUser?: StringNullableFilter;
  targetUserId?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
