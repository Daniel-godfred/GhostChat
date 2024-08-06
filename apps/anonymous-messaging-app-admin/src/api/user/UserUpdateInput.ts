import { InterestWhereUniqueInput } from "../interest/InterestWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  age?: number | null;
  agePreference?: number | null;
  email?: string | null;
  firstName?: string | null;
  interest?: InterestWhereUniqueInput | null;
  lastName?: string | null;
  location?: string | null;
  password?: string;
  radiusPreference?: number | null;
  roles?: InputJsonValue;
  status?: "Option1" | null;
  username?: string;
};
