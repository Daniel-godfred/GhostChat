import { UserUpdateManyWithoutInterestsInput } from "./UserUpdateManyWithoutInterestsInput";

export type InterestUpdateInput = {
  name?: string | null;
  users?: UserUpdateManyWithoutInterestsInput;
};
