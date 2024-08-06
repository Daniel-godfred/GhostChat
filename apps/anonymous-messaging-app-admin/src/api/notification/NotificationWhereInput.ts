import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  typeField?: "Option1";
  user?: UserWhereUniqueInput;
};
