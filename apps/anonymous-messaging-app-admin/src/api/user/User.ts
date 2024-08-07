import { Interest } from "../interest/Interest";
import { Notification } from "../notification/Notification";
import { JsonValue } from "type-fest";
import { UserAction } from "../userAction/UserAction";

export type User = {
  age: number | null;
  agePreference: number | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  interest?: Interest | null;
  lastName: string | null;
  location: string | null;
  notifications?: Array<Notification>;
  radiusPreference: number | null;
  roles: JsonValue;
  status?: "Option1" | null;
  updatedAt: Date;
  userActions?: Array<UserAction>;
  username: string;
};
