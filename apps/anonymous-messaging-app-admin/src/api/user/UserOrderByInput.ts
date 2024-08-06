import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  age?: SortOrder;
  agePreference?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  interestId?: SortOrder;
  lastName?: SortOrder;
  location?: SortOrder;
  password?: SortOrder;
  radiusPreference?: SortOrder;
  roles?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
