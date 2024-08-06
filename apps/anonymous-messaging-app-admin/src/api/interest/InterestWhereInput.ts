import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type InterestWhereInput = {
  id?: StringFilter;
  users?: UserListRelationFilter;
};
