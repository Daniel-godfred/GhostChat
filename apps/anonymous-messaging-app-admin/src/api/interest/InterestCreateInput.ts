import { UserCreateNestedManyWithoutInterestsInput } from "./UserCreateNestedManyWithoutInterestsInput";

export type InterestCreateInput = {
  users?: UserCreateNestedManyWithoutInterestsInput;
};
