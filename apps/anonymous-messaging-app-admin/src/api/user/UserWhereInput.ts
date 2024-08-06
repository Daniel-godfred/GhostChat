import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InterestWhereUniqueInput } from "../interest/InterestWhereUniqueInput";

export type UserWhereInput = {
  age?: IntNullableFilter;
  agePreference?: IntNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  interest?: InterestWhereUniqueInput;
  lastName?: StringNullableFilter;
  location?: StringNullableFilter;
  radiusPreference?: IntNullableFilter;
  status?: "Option1";
  username?: StringFilter;
};
