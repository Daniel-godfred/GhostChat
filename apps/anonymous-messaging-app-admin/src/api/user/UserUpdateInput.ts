import { InterestWhereUniqueInput } from "../interest/InterestWhereUniqueInput";
import { NotificationUpdateManyWithoutUsersInput } from "./NotificationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { UserActionUpdateManyWithoutUsersInput } from "./UserActionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  age?: number | null;
  agePreference?: number | null;
  email?: string | null;
  firstName?: string | null;
  interest?: InterestWhereUniqueInput | null;
  lastName?: string | null;
  location?: string | null;
  notifications?: NotificationUpdateManyWithoutUsersInput;
  password?: string;
  radiusPreference?: number | null;
  roles?: InputJsonValue;
  status?: "Option1" | null;
  userActions?: UserActionUpdateManyWithoutUsersInput;
  username?: string;
};
