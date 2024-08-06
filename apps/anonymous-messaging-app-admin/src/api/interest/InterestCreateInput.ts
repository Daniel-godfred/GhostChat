import { UserCreateNestedManyWithoutInterestsInput } from "./UserCreateNestedManyWithoutInterestsInput";

export type InterestCreateInput = {
  name?: string | null;
  users?: UserCreateNestedManyWithoutInterestsInput;
};
