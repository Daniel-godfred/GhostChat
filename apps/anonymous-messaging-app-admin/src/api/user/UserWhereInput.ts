import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InterestWhereUniqueInput } from "../interest/InterestWhereUniqueInput";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { UserActionListRelationFilter } from "../userAction/UserActionListRelationFilter";

export type UserWhereInput = {
  age?: IntNullableFilter;
  agePreference?: IntNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  interest?: InterestWhereUniqueInput;
  lastName?: StringNullableFilter;
  location?: StringNullableFilter;
  notifications?: NotificationListRelationFilter;
  radiusPreference?: IntNullableFilter;
  status?: "Option1";
  userActions?: UserActionListRelationFilter;
  username?: StringFilter;
};
