import { InterestWhereUniqueInput } from "../interest/InterestWhereUniqueInput";
import { NotificationCreateNestedManyWithoutUsersInput } from "./NotificationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  age?: number | null;
  agePreference?: number | null;
  email?: string | null;
  firstName?: string | null;
  interest?: InterestWhereUniqueInput | null;
  lastName?: string | null;
  location?: string | null;
  notifications?: NotificationCreateNestedManyWithoutUsersInput;
  password: string;
  radiusPreference?: number | null;
  roles: InputJsonValue;
  status?: "Option1" | null;
  username: string;
};
