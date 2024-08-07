import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type AdminWhereInput = {
  activeUsers?: IntNullableFilter;
  id?: StringFilter;
  loginStatistics?: JsonFilter;
  totalUsers?: IntNullableFilter;
  userReports?: JsonFilter;
};
